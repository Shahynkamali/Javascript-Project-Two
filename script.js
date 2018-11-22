
//===================OBJECT OF 2 ARRAYS CONTAINING MULTIPLE OBJECTS======================================//

const wine = {
			red:[
				{
					name:'Bordeaux',
					body:'full-bodied',
					style: 'earthy',
					flavour:'sourCherry'
				},
				{
					name:'Burgundy',
					body:'light-bodied',
					style:'earthy',
					flavour:'strawberry'
				},
				{
					name:'Southern Rhone',
					body:'full-bodied',
					style:"fruity",
					flavour:'strawberry'

				},
				{
					name: 'Rioja',
					body: 'full-bodied',
					style: 'fruity',
					flavour: 'sourCherry'

				},
				{
					name: 'Napa Valley',
					body:'full-bodied',
					style:'fruity',
					flavour:'sourCherry'
				},
				{
					name: 'Martinborough',
					body: 'light-bodied',
					style: 'fruity',
					flavour: 'sourCherry'
				},
				{
					name: "Barolo",
					body: 'light-bodied',
					style: 'fruity',
					flavour: 'strawberry'
				},
				{
					name: 'Ribera del Duero',
					body: 'full-bodied',
					style: 'fruity',
					flavour: 'sourCherry'
				},
				{
					name: 'Chianti',
					body: 'light-bodied',
					style: 'earthy',
					flavour: 'sourCherry'
				},
				{	
					name: 'Nero',
					body: 'full-bodied',
					style: 'earthy',
					flavour: 'strawberry'
				}

			],
			white:[
				{
					name:'Bordeaux',
					body:'light-acidity',
					style: 'non-oaked',
					flavour:'lemon'
				},
				{
					name:'New Zealand SB',
					body:'light-acidity',
					style:'non-oaked',
					flavour:'grapefruit'
				},
				{
					name:'Napa Valley Chardonnay',
					body:'high-acidity',
					style:"oaked",
					flavour:'lemon'

				},
				{
					name: 'German Riesling',
					body: 'high-acidity',
					style: 'non-oaked',
					flavour: 'lemon'

				},
				{
					name: 'Viognier',
					body:'high-acidity',
					style:'oaked',
					flavour:'grapefruit'
				},
				{
					name: 'Rioja Blanco',
					body: 'high-acidity',
					style: 'oaked',
					flavour: 'lemon'
				},
				{
					name: "Pinot Grigio",
					body: 'light-acidity',
					style: 'non-oaked',
					flavour: 'grapefruit'
				},
				{
					name: 'Pinot Gris',
					body: 'light-acidity',
					style: 'non-oaked',
					flavour: 'lemon'
				},
				{
					name: 'Albarino',
					body: 'high-acidity',
					style: 'non-oaked',
					flavour: 'grapefruit'
				},
				{	
					name: 'Chablis',
					body: 'light-acidity',
					style: 'non-oaked',
					flavour: 'lemon'
				},
				{	
					name: 'Burgundy White',
					body: 'light-acidity',
					style: 'oaked',
					flavour: 'grapefruit'
				},
				{	
					name: 'Sancerre',
					body: 'light-acidity',
					style: 'oaked',
					flavour: 'lemon'
				}

			]

		};

		$(function(){


//=================RESET BUTTON===================================================//				
				const reload = () =>{
					location.reload();	
				
				}

//==================PICKS ONE ITEM OUT OF THE ARRAY==================================//

				const getRandomWine = function(array){
				const  randomIndex = Math.floor(Math.random() * array.length);
				const option = array[randomIndex];
				return option;
	}

//=================LOGS THE VALUE OF THE CHOICES OF THE USER ============================//	
			$('input[type=submit]').on('click', function(event){
				event.preventDefault();
				const wineColour = $('input[name=type]:checked').val();
				console.log(wineColour);
				const wineStyle = $('input[name=style]:checked').val();
				console.log(wineStyle);
				const wineBody = $('input[name=body]:checked').val();
				console.log(wineBody);
				const wineFlavour = $('input[name=flavour]:checked').val(); 
				console.log(wineFlavour);
				const wineOption = wine[wineColour];

//============= FILTERS THROUGH THE OBJECT AND RETURNS CONDITIONAL OPTIONS============// 				
				const filteredWine = wineOption.filter(function(option){
					if(wineStyle === option.style && wineBody === option.body && wineFlavour === option.flavour){
						return true
					}	else false
						
				})		

//=============== SELECTS THE OPTION AND RETURNS IN TO THE USER ============================//
				console.log(filteredWine);
				const selectedWine = getRandomWine(filteredWine);
				console.log(selectedWine);
				$('.result').html(`<p>We suggest you should try a: ${selectedWine.name}</p>`);
				$('.reset').show();
				})




//============= ALLOWS FOR THE IMG TO RETURN A VALUE =========================================//

			   $('.red-img').delegate('img','click', function(){
	       			$(this).prev().attr('checked',true);
	  			 });

//=====================MAKES THE IMAGES HIDE AND SHOW DURING EXECUTION ===========================//
			$('.reset').hide();  	
			$('.red').hide();
			$('.white').hide();
				$('#red').on('click', function(){
					$('.white',).fadeOut();
					$('.red').fadeIn();
				})
				$('#white').on('click', function(){
					$('.red').fadeOut();
					$('.white').fadeIn();
				})

				$('.first-question').on('click', function(){
					$('.first-question').hide();
				})



				$('.red-img').on('click', function(){
					const $parent = $(this).parent();
					const $next = $parent.next();
					$parent.fadeOut(800);
  					$next.fadeIn(800)

				})



//  ==================== ALLOWS THE IMAGES TO CHANGE COLOR ON HOVER =======================//
			
				$('.red-img').hover(function() {
					$('.first-image-red', this).attr('src', 'images/wine-red.svg' );
				}, function() {
					$('.first-image-red', this).attr('src', 'images/wine.svg' );
				})

				$('.red-img').hover(function() {
					$('.first-image-white', this).attr('src', 'images/wine-white.svg' );
				}, function() {
					$('.first-image-white', this).attr('src', 'images/wine.svg' );
				})


				$('.red-img').hover(function() {
					$('.second-image-fruit', this).attr('src', 'images/fruit-forward-color.svg' );
				}, function() {
					$('.second-image-fruit', this).attr('src', 'images/fruit-forward.svg' );
				})

				$('.red-img').hover(function() {
					$('.second-image-earth', this).attr('src', 'images/earth-color.svg' );
				}, function() {
					$('.second-image-earth', this).attr('src', 'images/earth.svg' );
				})

				$('.red-img').hover(function() {
					$('.third-image-lightbody', this).attr('src', 'images/light-bodied-color.svg' );
				}, function() {
					$('.third-image-lightbody', this).attr('src', 'images/light-bodied.svg' );
				})

				$('.red-img').hover(function() {
					$('.third-image-fullBody', this).attr('src', 'images/full-bodied-color.svg' );
				}, function() {
					$('.third-image-fullBody', this).attr('src', 'images/full-bodied.svg' );
				})

				$('.red-img').hover(function() {
					$('.fourth-image-strawberry', this).attr('src', 'images/strawberry-color.svg' );
				}, function() {
					$('.fourth-image-strawberry', this).attr('src', 'images/strawberry.svg' );
				})

				$('.red-img').hover(function() {
					$('.fourth-image-sourCherry', this).attr('src', 'images/cherries-color.svg' );
				}, function() {
					$('.fourth-image-sourCherry', this).attr('src', 'images/cherries.svg' );
				})

				$('.red-img').hover(function() {
					$('.second-image-oaked', this).attr('src', 'images/wine-barrel-color.svg' );
				}, function() {
					$('.second-image-oaked', this).attr('src', 'images/wine-barrel.svg' );
				})

				$('.red-img').hover(function() {
					$('.second-image-non-oaked', this).attr('src', 'images/grape-color.svg' );
				}, function() {
					$('.second-image-non-oaked', this).attr('src', 'images/grape.svg' );
				})

				$('.red-img').hover(function() {
					$('.third-image-highAcid', this).attr('src', 'images/high-acid-color.svg' );
				}, function() {
					$('.third-image-highAcid', this).attr('src', 'images/high-acid.svg' );
				})

				$('.red-img').hover(function() {
					$('.third-image-lightAcid', this).attr('src', 'images/light-acid-color.svg' );
				}, function() {
					$('.third-image-lightAcid', this).attr('src', 'images/light-acid.svg' );
				})

				$('.red-img').hover(function() {
					$('.fourth-image-lemon', this).attr('src', 'images/lemon-color.svg' );
				}, function() {
					$('.fourth-image-lemon', this).attr('src', 'images/lemon.svg' );
				})

				$('.red-img').hover(function() {
					$('.fourth-image-grapefruit', this).attr('src', 'images/grapefruit-color.svg' );
				}, function() {
					$('.fourth-image-grapefruit', this).attr('src', 'images/grapefruit.svg' );
				})

	//============RELOADS THE GAME ====================//			

			$("#click").on("click", function(e){
			e.preventDefault();
			reload();
				
			})	


		})

		