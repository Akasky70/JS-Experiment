/**
 * UFO class
 **/

 "use strict";

 class Ufo{

 	constructor(props){

 		this.point = 0;
 		this.image = null;
 		this.ctx = props.ctx;
 		this.loadedUfos = [];
 		this.ufoBullet 	= [];
 		this.isUfoLoaded = false;
 		this.x 	 	= props.x || 100;
 		this.y 		= props.y || 100;
 		this.dx 	= props.dx || 0;
 		this.dy 	= props.dy || -1;
 		this.life 	= props.life || 2;
 		this.type 	= props.type || 1;
 		this.speed 	= props.speed || 2;
 		this.width 	= props.width || 100;
 		this.height = props.height || 100;
 		this.canvasWidth = props.canvasWidth;
 		this.canvasHeight= props.canvasHeight;

 		if(this.dy === 1) { this.type = Math.floor(Math.random() * (6 - 4)) + 4; }
 		else { this.type = Math.floor(Math.random() * (6 - 0)) + 0; }

 		if(this.type >= 4)
 			this.point = 2;
 		else
 			this.point = 1;

 	};

 	// DRAW UFOS
 	drawUfo(){

 		if(this.isUfoLoaded){

 			// if(this.life === 0) 
 			// 	this.type = Math.floor(Math.random() * (15 - 8)) + 8;

 			// if(this.dx === -1 && this.dy ===-1) { this.ctx.rotate(20 * Math.PI / 180); this.y = 150}
 			// if(this.dx === -1 && this.dy === -1) { 

 			// 	 this.ctx.rotate(20 * Math.PI / 180);

 			// }

 			this.ctx.drawImage(this.loadedUfos[this.type], this.x + 50, this.y, this.width, this.height);

 			// this.ctx.resetTransform();

 		}else{

 			// console.log("No images loaded");
 		}
 	};

 	// IMAGES LOADER
 	loadImages() {

	    let images = ["images/fighter2.png", "images/fighter3.png", "images/fighter4.png", 
	    				"images/fighter5.png","images/ast1.png","images/ast2.png","images/ast3.png",
	    				"images/blast.gif","images/fire2.gif","images/b1.png","images/b2.png","images/b3.png",
	    				"images/b4.png","images/b5.png","images/b6.png","images/b7.png"];

	    let loadcount = 0;
	    let loadtotal = images.length;
	    
	    for (var i=0; i<images.length; i++) {
	      	 
	      	this.image = new Image();
	        this.image.onload = function () {
	            loadcount++;
	            if (loadcount == loadtotal) {
	                // Done loading
	                this.isUfoLoaded = true;
	            }
	        }.bind(this);
	
	        this.image.src = images[i];
	 
	        // Save to the image array
	        this.loadedUfos[i] = this.image;
	    }
	 
	    return this.loadedUfos;
 	};

 	// FLY UFOS
 	flyUfos() {

 		this.y -= this.dy * this.speed; 
 		this.x += this.dx * (this.speed + 2);
 		
 		this.width += 0.6;
 		this.height += 0.6;

 		this.drawUfo();
 	};

 	// REMOVE UFOS FROM ARRAY IF DESTROYED
 	destroyUfos(ufos) {

 		this.type = Math.floor(Math.random() * (15 - 9)) + 9;
		this.ctx.drawImage(this.loadedUfos[this.type], this.x + 50, this.y, this.width, this.height);
		
		ufos.splice(this, 1);

		// console.log("deleted form ufo");
	 	
	 	let explode = new GameSound("sound/explode3.mp3");
			explode.play();

 		return ufos;
 	};

 	// AFTER DESTROYING UFO AND SHOOTER ONCE THEY COLLIDE
 	destroyUfosAndShooter(ufos, shooter){

 		this.type = Math.floor(Math.random() * (15 - 9)) + 9;

 		this.ctx.drawImage(this.loadedUfos[this.type], this.x + 50, this.y, this.width, this.height);
 		this.ctx.drawImage(this.loadedUfos[8], shooter.x + 50, shooter.y, shooter.width, shooter.height);
 		
 		ufos.splice(this, 1);

 		let explode = new GameSound("sound/explode1.mp3");
			explode.play();

 		return false;
 		console.log("Both destroyed");
 	};
}