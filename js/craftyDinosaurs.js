$(document).ready(function() {
    var pageCount = 1,
        searchWord = '',
        totalPages,
        pageDirection = '',
        highestPageCount = '',
        totalItems = 0,
        homepageHash = '';

 
        
        window.onpopstate = function(event) {
          console.log("location: ", document.location , ", state: " , event);
          var historyPage = document.location.hash.split('/')[2],
              historyCategory = document.location.hash.split('/')[1];
          if(location.hash == '' ){
              restartSearch();
              homepageHash = "onHomePage";  // set flag on homepage
          } else if (homepageHash == "onHomePage" && historyCategory!='') {
            console.log(historyCategory);
            homepageHash = '';
            searchDinoStuff(historyCategory); 
          } else {   
              moveDinoResults(historyPage);
              pageCount = historyPage; 
              showSubHeader(totalPages);
              showNextButton(totalPages); 
              showPrevButton(totalPages);  
           }     

        };

    // send search request
    function searchDinoStuff(searchTerm) {
        
            //check if the results page has been already created
            if (pageCount <= highestPageCount) {
                moveDinoResults(pageCount); // move the results forward or backwards
                console.log("first part of if for searchDinoStuff");
                showSubHeader(totalPages);
                showNextButton(totalPages); // show next button if more items
                showPrevButton(totalPages); // show prev button if pages have been advanced
                history.pushState(pageCount, 'Page'+ pageCount, '#/' + encodeURIComponent( searchTerm ) + '/' + encodeURIComponent( pageCount ));
            
                
            } else { // if pages has not been created then create a new results page
                // set up variables
                var searchRequest = {
                    api_key: 'q0r7ycz3zozftljmhx1yag8b',
                    terms: searchTerm + ', dinosaur',
                    itemsPerpage: '6',
                    pageNumber: pageCount,
                    etsyURL: 'https://openapi.etsy.com/v2/listings/active.js?keywords='
                };
                
                // assign searchword variable a value so it's accessible to rest of functions   
                searchWord = searchTerm;
                
                // send request to etsy 
                $.ajax({
                    url: searchRequest.etsyURL + searchRequest.terms +
                        "&limit=" + searchRequest.itemsPerpage +
                        "&includes=Images:1&api_key=" +
                        searchRequest.api_key + "&page=" +
                        searchRequest.pageNumber,
                    dataType: "jsonp",
                    success: function(data) {

                        var totalItems = data.count;
                        
                        totalPages = Math.ceil(totalItems/searchRequest.itemsPerpage);
                       
                        // look to see if there are any results and post them
                        if ((totalItems) > 0) {

                           makeResultsPage(data.results);
                     
                           // move search to reults pages
                           $('.searchAndResults').css({ transform: 'translateX(-145%)' });

                           history.pushState(pageCount, 'Page'+ pageCount, '#/' + encodeURIComponent( searchTerm ) + '/' + encodeURIComponent( pageCount ));
                                                                
                           // move to the new results page on screen
                           moveDinoResults(pageCount);
                            
                           //set up show next  & prev buttons
                           showNextButton(totalPages); // show next button if more items
                           showPrevButton(totalPages); // show prev button if pages have been advanced
                            
                            //create headers for the results page
                           showMainHeader(searchTerm);
                           showSubHeader(totalPages);
                           
                           // update the highest page count if on the highest page
                           if (pageCount > highestPageCount) {
                                highestPageCount = pageCount;
                           }
     

                        } else { // if no results create message
                            $('.noResponseContainer').fadeIn('400', function() {
                                    var noDinoProductsMessage = buildMessageNoProducts(searchTerm);
                                    $('.noResponseMessage').append(noDinoProductsMessage);
                                    $('.noResponseMessage').css('top','70px');
                                });
                        }
                    },
                    type: "GET"
                });
            }
        }
        
    // Build the output 
    function getSearchInfo(data) {
            var thumbnail = data.Images[0].url_170x135;
            var title = data.title;
            var url = data.url;
            var price = data.price;
            var currency = data.currency_code;
            var output = '<div class="itemCell">' +
                '<div class="itemHolder">' + '<div class="image">' +
                '<a href="' + url + '" target="_blank">' + 
                '<img src="' + thumbnail + '" alt="image of item">' + 
                '</a>' + '</div>' + '<div class="itemInfo">' + 
                '<h3><a href="' + url + '" target="_blank">' + title + '</a></h3>' +
                '<p class="cost">$' + price + ' (' + currency + ')</p>' +
                '</div>' + '</div>' + '</div>';
            return output;
        }
        
    // Get a random word and place it in the search bar 
    function randWordFinder() {
            $.ajax({
                url: 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=85000&maxCorpusCount=-1&minDictionaryCount=10&maxDictionaryCount=-1&minLength=3&maxLength=-1&limit=1&api_key=a6b702e895e72a81b452252cd67769286a06070437a481301',
                type: 'GET',
                dataType: 'jsonp',
                success: function(data) {
                    var randomWord = data[0].word;
                    $('#customSearch').val(randomWord);
                }
            });
        }
        
    //Build the message for no items found in etsy
    function buildMessageNoProducts(searchTerm) {
            var noDinoProducts =
                '<p>No one is makeing any crafts that are combine' +
                ' <em>dinosaurs</em> with <em>' + searchTerm +
                '</em>. This might be a good market for you to start!</p>' +
                '<p><a href="#">In the meantime you can still <span>' +
                'look for other dino-products</span></a></p>';
            return noDinoProducts;
    }

    function makeResultsPage(data){    
        // create the new results div
        var outPutContainer = $('<div class="output"></div>');
        
        // loop through results and create all the items
        $.each(data, function(i,item) {
            var output = getSearchInfo(item);
            outPutContainer.append(output);
        });

        $('.resultsArea').append(outPutContainer);
     }

    //Build Message for top results header that show search items
    function resultsHeader(searchTerm) {
                var resultsHeaderText = '<em>Dinosaurs</em> + <em>' +
                searchTerm + '</em>! What a great combo!';
            $('h1.resultsHeader').html(''); // clears previous message
            return resultsHeaderText;
        }
        
   

    //Show mainheader on page
    function showMainHeader(searchTerm) {
            var resultsHeaderMain = resultsHeader(searchTerm); // show items searched
            $('h1.resultsHeader').append(resultsHeaderMain);    
    }   

    //Show subheader on page
    function showSubHeader(allThePages){
            var resultsSubHeaderMain = resultsSubHeader(allThePages); // show what page you are on
            $('h2.resultsSubHeaders').append(resultsSubHeaderMain); // append page #
     }  

    //Build message for results subheader that shows current page
    function resultsSubHeader(count) {
            var subheader = "(page <em>" + pageCount + "</em> of <em>" +
                count + "</em>)"; //"There are " + count + " of these made." +
            $('h2.resultsSubHeaders').html(''); // clears previous message
            return subheader;
     }

    // reset and restart search
    function restartSearch() {
            $('#customSearch').val('');
            $('.searchAndResults').css({ transform: 'translateX(0%)' });
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            setTimeout(function() {
                $('div.resultsArea').html('');
                $('.resultsArea').css({transform: 'translateX(0%)'});
            }, 2000);
            pageCount = 1;
            searchWord = '';
            totalPages = '';
            pageDirection = '';
            highestPageCount = '';
            totalItems = '';
            history.pushState("Welcome", 'Welcome', 'index.html');

       }
        
    // show next button if there are more than one page available
    function showNextButton(Pages) {
            if (Pages > 1) {
                $('li.next').css('display', 'inline-block');
                $('.rightArrow').css('display', 'block');
            } else {
                $('li.next').css('display', 'none');
                $('.rightArrow').css('display', 'none');
            }
            if (Pages == pageCount) {
                $('li.next').css('display', 'none');
                $('.rightArrow').css('display', 'none');
            } else {
                $('li.next').css('display', 'inline-block');
                $('.rightArrow').css('display', 'block');
            }
        }
    // show previous button if pages have been advanced
    function showPrevButton(Pages) {
            if (Pages > 1 && pageCount > 1) {
                $('li.prev').css('display', 'inline-block');
                 $('.leftArrow').css('display', 'block');
            } else {
                $('li.prev').css('display', 'none');
                $('.leftArrow').css('display', 'none');
            }
        }
    // move results backward or forwards
    function moveDinoResults(pageCount) {
            var newPagePercent = (pageCount - 1) * 100;
                
            // move forwards    
            if (pageDirection == 'forward') {
                $('.resultsArea').css({
                    transition: 'transform 1s ease-in-out',
                    transform: 'translateX(-' + newPagePercent +'%)'
                });

            // move backwards    
            } else if (pageDirection == 'backward') {
                $('.resultsArea').css({
                    transition: 'transform 1s ease-in-out',
                    transform: 'translateX(-' + newPagePercent + '%)'
                });
  
            }
        }
    // set up click event for search buttons
    $('li.searchButton').click(function() {
        // run search function from button if custom search firls is empty
        if (!($('#customSearch').val())) {
            (event.preventDefault) ? event.preventDefault():event.returnValue = false;
            var dinoSearchTerm = $(this).attr('id');
            searchDinoStuff(dinoSearchTerm);
        // otherwise dont do the search
        } else { // if custom search has a value then dont let the button work
            event.preventDefault();
            console.log('full -TBD -  create a message for this'); // SET UP SCRIPT FOR THIS
        }
    }); // end click button functions
    
    // set up event for custom search term
    $('#dinoForm').submit(function() {
        (event.preventDefault) ? event.preventDefault(): event.returnValue = false;
        var dinoSearchTerm = $('#customSearch').val();
        searchDinoStuff(dinoSearchTerm);
    }); // end custom search function
    
    //set up click event for random word generator button
    $('#dinoRandom').click(function() {
        randWordFinder();
    });
    
    // set up click event for no items mesage screen to disappear
    $('.noResponseContainer').click(function() {
        $('.noResponseMessage').css('top', '-200px');
        $('.noResponseContainer').fadeOut('400');
        $('.noResponseMessage').html('');
        $('#customSearch').val('');
    });
    
    // prevent default when no response button is clicked 
    $('.noResponseContainer a').click(function() {
        (event.preventDefault) ? event.preventDefault(): event.returnValue = false;
    });
    
    //set up click event for "restart" button
    $('a.restart').click(function() {
        (event.preventDefault) ? event.preventDefault(): event.returnValue = false;
        restartSearch();
    });
    
    // add count of one to page count and run search on next page
    $('li.next a, .rightArrow' ).click(function() {
        (event.preventDefault) ? event.preventDefault(): event.returnValue = false;
        ++pageCount;
        pageDirection = 'forward';
        searchDinoStuff(searchWord);
    });
    
    // subtract one from page count and run search on that page
    $('li.prev a, .leftArrow').click(function() {
        (event.preventDefault) ? event.preventDefault(): event.returnValue = false;
        --pageCount;
        pageDirection = 'backward';
        searchDinoStuff(searchWord);
    });


    var state = document.location.hash;
    if ( /^#\/.+\//.test( state )) {
        var searchCategory = document.location.hash.split('/')[1], 
        searchPageNumber = document.location.hash.split('/')[2];
        pageDirection = 'forward';
        for (i=1; i <= searchPageNumber; i++){
            var pageCount = i; 
            searchDinoStuff(searchCategory);
            console.log(i);
           }
   
    }


});


