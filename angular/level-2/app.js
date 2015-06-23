(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;

	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab == checkTab;
		};

	});

	var gems = [
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
			]
		}
	];



})();