//Set up model as object

var model = {
	//Set up initial object as null
	selectedCat: null;
	//Build up cats as cat array for all the cats in the list
	cats:[
	{
		name: 'Mimi',
		clicks: 0,
		image:'img/cat-1.jpg'
	},

	{
		name: 'Lily',
		clicks: 0,
		image:'img/cat-2.jpg'
	},

	{
		name: 'Meggie',
		clicks: 0,
		image:'img/cat-3.jpg'
	},

	{
		name: 'Sunny',
		clicks: 0,
		image:'img/cat-4.jpg'
	},

	{
		name: 'Jackie',
		clicks: 0,
		image:'img/cat-5.jpg'
	}
	]
};

// Model is an object literal
var model = {
	selectedCat: null,
	adminVis: null,
	cats: [		
		{
			name: 'Mimi',
			clicks: 0,
			image: 'img/cat-1.jpg',
		},
		{
			name: 'Lily',
			clicks: 0,
			image: 'img/cat-2.jpg'
		},
		{
			name: 'Meggie',
			clicks: 0,
			image: 'img/cat-3.jpg'
		},
		{
			name: 'Sunny',
			clicks: 0,
			image: 'img/cat-4.jpg'
		},
		{
			name: 'Jackie',
			clicks: 0,
			image: 'img/cat-5.jpg'
		}	
	]
};


/*
var octopus = {

	init: function(){
        // Set our current cat to the first one in the list
		model.selectedCat = model.cats[0];
		//model.adminVis = false;
		
		// Initialize views
		catListView.init();
		catView.init();
		adminView.init();
	},

	getAllCats: function(){
		return model.cats;
	},

	getSelectedCat: function(){
		return model.selectedCat;
	},
	
	// Set the currently-selected cat to the object passed in
	setCurrentCat: function(cat){
		model.selectedCat = cat;
	},
	
	// Increments the counter for the currently-selected cat
	clickCounter: function(){
		model.selectedCat.clicks++;
		catView.render();
	},
	
	showAdmin: function(){
		model.adminVis = true;
		adminView.render();
	},
	
	hideAdmin: function(){
		model.adminVis = false;
	},
	
	saveAdmin: function(name, numClicks, adminImgUrl){
		alert("name = " + name);
		alert("numClicks = " + numClicks);
		alert("adminImgUrl = " + adminImgUrl);
		model.selectedCat.name = name;
		model.selectedCat.clicks = numClicks;
		model.selectedCat.image = adminImgUrl;
		alert(model.selectedCat.name);
		catView.render();
		
	}
		
};



var catListView = {  

	init: function(){
		// store the DOM element for easy access later
		this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
		this.render();
	},

	render: function(){
		
		var cat, elem, i;
		// Get the cats we'll be rendering from the octopus (which gets it from the model)
		var cats = octopus.getAllCats();
		
		// Clear out text
		this.catListElem.innerHTML = '';

		// Let's loop over the cats in our array
		for (i = 0; i < cats.length; i++){

			// This is the number we're currently on...
			var cat = cats[i];

			// Make a cat list item and set its text
			elem = document.createElement('li');
			elem.textContent = cat.name;
			
			// On click, setCurrentCat and render the catView
			// (this uses our closure-in-a-loop trick to connect the value
			// of the cat variable to the click event function)
			elem.addEventListener('click', (function(catCopy){
				return function(){
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));
			
			// Finally, add the element to the list
			this.catListElem.appendChild(elem);
		}
	}	
};

var catView = {
	// Render gets called over and over, but init just once
	
	init: function(){
		// Store pointers to our DOM elements for easy access later
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');
		this.imgUrl = document.getElementById('img-url');
		
		// On click, increment the current cat's counter 
		// Only need to do once, values are changed
		this.catImageElem.addEventListener('click', function(){
			octopus.clickCounter();
		});
		
		//  Render this view (update the DOM elements with the right values)
		this.render();	
	},
	
	render: function(){	
		// Update the DOM elements with values from the current cat
		var selectedCat = octopus.getSelectedCat(); // (which gets it from the model)
		this.countElem.textContent = selectedCat.clicks;
		this.catNameElem.textContent = selectedCat.name;
		this.catImageElem.src = selectedCat.image;
		this.imgUrl.textContent = "The path to this image is " + selectedCat.image;
	}
};

var adminView = {
	
	init: function(){
		// Store pointers to our DOM elements for easy access later	
		var selectedCat = octopus.getSelectedCat();	
		document.getElementById('name').value = selectedCat.name;
		document.getElementById('adminImgUrl').value = selectedCat.image;
		document.getElementById('num-clicks').value = selectedCat.clicks;
		this.saveBtn = document.getElementById('save');
		this.cancelBtn = document.getElementById('cancel');
		this.adminBtn = document.getElementById('admin');
		this.adminVis  = document.getElementById("adminSec").style.visibility = "hidden";
		
		this.cancelBtn.addEventListener('click', function(){
			octopus.hideAdmin();
		});
		
		this.adminBtn.addEventListener('click', function(){
			console.log(selectedCat.name);
			octopus.showAdmin();
		});
		
		this.saveBtn.addEventListener('click', function(){
			this.name = document.getElementById('name').value;
			this.numClicks = document.getElementById('num-clicks').value;
			this.adminImgUrl = document.getElementById('adminImgUrl').value;
			//alert("this.adminImgUrl = " + this.adminImgUrl);
			octopus.saveAdmin(this.name, this.numClicks, this.adminImgUrl);
		});	
		
	},
	
	render: function(){
		this.adminVis = document.getElementById("adminSec").style.visibility = "visible";
		
		this.numClicks = document.getElementById('num-clicks').value;
		this.name = document.getElementById('name').value;
		this.adminImgUrl = document.getElementById('adminImgUrl').value;

	}
	
};
*/
// Make it go!
octopus.init();