(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;

	});

	var gems = [
		{
			name: 'Shirt 1',
			price: 2.43,
			description: '....',
			canPurchase: false
		},
		{
			name: 'Shirt 2',
			price: 3,
			description: '....',
			canPurchase: true
		}
	];



})();