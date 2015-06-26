(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = product;

	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
			console.log("hi");
		};

		this.isSelected = function(checkTab){
			return this.tab == checkTab;
		};

	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};

	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){
					this.tab = setTab;
					console.log("hi");
				};

				this.isSelected = function(checkTab){
					return this.tab == checkTab;
				};
			},
			controlerAs: 'panels'

		};
	});

	var product = [
		{
			name: 'Shirt 1',
			price: 2.43,
			description: '....',
			images: [
				{
					full: 'http://www.overclock.net/gallery/data/500/homer.png',
					thumb: 'http://vignette1.wikia.nocookie.net/simpsons/images/2/20/Homer-simpson.png'
				},
				{
					full: 'http://www.overclock.net/gallery/data/500/homer.png',
					thumb: 'http://vignette1.wikia.nocookie.net/simpsons/images/2/20/Homer-simpson.png'
				}
				],
			reviews: [
				{
					stars: 5,
					body: "I love this product",
					author: "chris@google.com"
				}
				]
		},
		{
			name: 'Shirt 2',
			price: 3,
			description: '....',
			images: [
				{
					full: 'http://www.overclock.net/gallery/data/500/homer.png',
					thumb: 'http://vignette1.wikia.nocookie.net/simpsons/images/2/20/Homer-simpson.png'
				},
				{
					full: 'http://www.overclock.net/gallery/data/500/homer.png',
					thumb: 'http://vignette1.wikia.nocookie.net/simpsons/images/2/20/Homer-simpson.png'
				}
				],
			reviews: [
				{
					stars: 5,
					body: "I love this product",
					author: "chris@google.com"
				}
				]
		

		}
	];



})();