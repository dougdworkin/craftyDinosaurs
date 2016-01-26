$(document).ready(function(){

	var pageClicks = 1,
		searchWord = '';
		totalPages = '';

	// send search request
	function searchDinoStuff(searchTerm){

		// set up variables
		var searchRequest = {
			api_key: 'q0r7ycz3zozftljmhx1yag8b',
			terms: searchTerm + ', dinosaur',
			itemsPerpage: '6',
			pageNumber: pageClicks,
			etsyURL: 'https://openapi.etsy.com/v2/listings/active.js?keywords='
			};

		// assign searchword variable a value so it's accessible to rest of functions	
		searchWord = searchTerm;		

		// send request to etsy	
		$.ajax({
				url:searchRequest.etsyURL + 
					searchRequest.terms + 
					"&limit=" + searchRequest.itemsPerpage +
					"&includes=Images:1&api_key=" +	searchRequest.api_key + 
					"&page=" + searchRequest.pageNumber,
				dataType: "jsonp",
				
				success: function(data) {
					//clear past search results
					//$('.resultsArea').html('');
					
					var totalItems = data.count;
					var itemsPerpage = searchRequest.itemsPerpage;

					// look to see if there are any results and post them
					if ((totalItems) > 0) {
						// create result items on page
						$('.searchContainer').css({left: '-300%'});
						$('html, body').animate({ scrollTop: 0 }, 'slow');
						$('.resultsContainer').css({left: '0', display: 'block'});

						$('.resultsArea').append('<div class="output page' + pageClicks + '"></div>');

						$.each(data.results, function(i, item){
							var output = getSearchInfo(item);
							$('.page' + pageClicks).append(output);
							})
						// if there will be more items poplate the upcoming results page
						if((totalItems) > (pageClicks*itemsPerpage)) {
							console.log('more items on nexr page');

						}

						//set up show next  & prev buttons
						totalPages = Math.ceil(totalItems/itemsPerpage);
						showNextButton(totalPages); // show next button if more items
						showPrevButton(totalPages); // show prev button if pages have been advanced

						//create headers for the results page
						var resultsHeaderMain = resultsHeader(searchTerm); // show items searched
						$('h1.resultsHeader').append(resultsHeaderMain);
						var resultsSubHeaderMain = resultsSubHeader(totalItems); // show what page you are on
						$('h2.resultsSubHeader').append(resultsSubHeaderMain);

						 
					} else { // if no results create message
						$('.noResponseContainer').fadeIn('400', function() {
							var noDinoProductsMessage = buildMessageNoProducts(searchTerm);
				        	$('.noResponseMessage').append(noDinoProductsMessage);
				        	$('.noResponseMessage').css('top', '70px');
				        });
					}			
				},
				type: "GET"	
		});

	}	


	// Build the output	
	function getSearchInfo(data) {
		var thumbnail = data.Images[0].url_170x135;
		var title = data.title;
		var url = data.url;
		var price = data.price;
		var currency = data.currency_code;

		var output = '<div class="itemCell">' +
		'<div class="itemHolder">' +
		'<div class="image">' +
		'<a href="' + url + '" target="_blank">' +
		'<img src="'+
		thumbnail +
		'" alt="image of item">' +
		'</a>' +
		'</div>' +
		'<div class="itemInfo">' +
		'<h3><a href="' + url + '" target="_blank">' +
		title + '</a></h3>' +
		'<p class="cost">$' + price +
		' (' + currency + ')</p>' +
		'</div>' +
		'</div>' +
		'</div>';

		return output;
	}

	// Get a random work and place it in the search bar	
	function randWordFinder(){
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
	 	var noDinoProducts = '<p>No one is makeing any crafts that are combine' +
	 	' <em>dinosaurs</em> with <em>'+searchTerm +
	 	'</em>. This might be a good market for you to start!</p>'+
	 	'<p><a href="#">In the meantime you can still <span>' +
	 	'look for other dino-products</span></a></p>';
	 	return noDinoProducts;
 	}

 	//Build Message for top results header that show search items
 	function resultsHeader(searchTerm){
 		var resultsHeader = '<em>Dinosaurs</em> + <em>' + searchTerm + '</em>! What a great combo!';
 		$('h1.resultsHeader').html(''); // cleass previous message
 		return resultsHeader;
 	}

 	//Build message for results subheader that shows current page
 	function resultsSubHeader(count){
 		var subheader = "(page <em>" + pageClicks + "</em> of <em>" + totalPages +"</em>)"; //"There are " + count + " of these made." +
 		$('h2.resultsSubHeader').html(''); // clears previous message
 		return subheader;
 	}

 	// reset and restart search
 	function restartSearch(){
 		$('#customSearch').val('');
 		$('.resultsContainer').css({left: '200%'});
 		$('html, body').animate({ scrollTop: 0 }, 'slow');
 		$('.searchContainer').css({left: '0'});
 		setTimeout(function() { 
 			$('div.resultsArea').html('');
 		}, 2000);
 		pageClicks = 1;
 	}
 	
 	// show next button if there are more than one page available
 	function showNextButton(Pages) {
		if (Pages > 1){
			$('li.next').css('display', 'inline-block');
		} else {
			$('li.next').css('display', 'none');
		}

		if(Pages == pageClicks){
			$('li.next').css('display', 'none');
		} else {
			$('li.next').css('display', 'inline-block');
		}
	}

	// show previous button if pages have been advanced
	function showPrevButton(Pages) {
		if (Pages > 1 && pageClicks > 1){
			$('li.prev').css('display', 'inline-block');
		} else {
			$('li.prev').css('display', 'none');
		}

	}



	// set up click event for search buttons

	$('li.searchButton').click(function(){
		// run search function from button if custom search firls is empty
		if(!($('#customSearch').val())) {
			(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
			var dinoSearchTerm = $(this).attr('id');
			searchDinoStuff(dinoSearchTerm);
		// otherwise dont do the search 	
		} else { // if custom search has a value then dont let the button work
			event.preventDefault();
			console.log('full -TBD -  create a message for this');
		}
	}); // end click button functions


	// set up event for custom search term
	$('#dinoForm').submit(function(){
		(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
		var dinoSearchTerm = $('#customSearch').val();
		searchDinoStuff(dinoSearchTerm);
	}); // end custom search function

	//set up click event for random word generator button
	$('#dinoRandom').click(function(){
		console.log('click');
		randWordFinder();
	});

	// set up click event for no items mesage screen to disappear
	$('.noResponseContainer').click(function(){
		$('.noResponseMessage').css('top', '-200px');
		$('.noResponseContainer').fadeOut('400');
		$('.noResponseMessage').html('');
		$('#customSearch').val('');

	});

	// prevent default when no response button is clicked 
	$('.noResponseContainer a').click(function(){
		(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
	});

	//set up click event for "restart" button
	$('a.restart').click(function(){
		(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
		restartSearch();
	});
		

	// add count of one to page count and run search on next page
	$('li.next a').click(function(){
		(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
		++pageClicks;
		searchDinoStuff(searchWord);
		console.log(pageClicks);
	});	

	// subtract one from page count and run search on that page
	$('li.prev a').click(function(){
		(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
		--pageClicks;
		searchDinoStuff(searchWord);
		console.log(pageClicks);
	});	



});