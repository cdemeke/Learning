(function(){
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', ['$http', function($http){
		var store = this;
		store.products = [];

		$http.get('/products.json').success(function(data){
			store.products = data;
		});
	}]);


	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	

	var x = [
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