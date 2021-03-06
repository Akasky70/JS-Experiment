/**
 * BULLET CLASS
 */

 "use strict";

 class Bullet{

 	constructor(props){
 	
 		this.x		= props.x;
 		this.y		= props.y;
 		this.ctx	= props.ctx;
 		this.dx		= props.dx || 0;
 		this.dy		= props.dy || -1;
 		this.speed	= props.speed || 10;
 		this.width	= props.width || 50;
 		this.height	= props.height|| 80;
 		this.canvasWidth	= props.canvasWidth;
 		this.canvasHeight	= props.canvasHeight;

 		this.image = null;
 		this.bulletImage = null;
 		this.loadeBulletImage = [];
 		this.isBulletImageLoaded = false;

 	};

 	// IMAGES LOADER
 	loadImages() {

	    let images = ["images/blast.gif","images/fire2.gif"];

	    let loadcount = 0;
	    let loadtotal = images.length;
	    
	    for (var i=0; i<images.length; i++) {
	      	 
	      	this.image = new Image();
	        this.image.onload = function () {
	            loadcount++;
	            if (loadcount == loadtotal) {
	                // Done loading
	                this.isBulletImageLoaded = true;
	            }
	        }.bind(this);
	
	        this.image.src = images[i];
	 
	        // Save to the image array
	        this.loadeBulletImage[i] = this.image;
	    }
	 
	    return this.loadedUfos;
 	};

 	// FIRES THE BULLET
 	fire(angle){

		this.ctx.drawImage($bulletImage, this.x + angle, this.y-20, this.width, this.height);	
		
 	};

 	// ANIMATE BULLET
 	moveBullet(angle){

 		this.width -= 0.6;
 		this.height -= 0.6;

 		// let center = (this.canvasWidth / 2) ;
 		// let aim  = Math.floor(Math.random() * (center - 590)) + 590;

 		// if(!(this.x > (center - 200) && this.x < (center + 200))){

	 	// 	if( this.x < center){

	 	// 		this.x += 15;
	 	// 	}

	 	// 	if( this.x > center){
	 	// 		this.x -= 15;
	 	// 	}
	 	// }

	 // 	if (KEY_STATUS.left) {
			
	 // 		this.x +=15;

		// } else if (KEY_STATUS.right) {
			
		// 	this.x -= 15;

		// } else
		 if (KEY_STATUS.up) {
			this.y += 8 ;

		} else if (KEY_STATUS.down) {


		}

 		// console.log(this.dx);
 		this.y += this.dy * this.speed; 
 		this.x += this.dx * this.speed; 
 		
 		

		if(this.width > 0 && this.height > 0) {

			this.fire(angle);
		}else{

			return false;
		}	
 	};

 	// CHECKING BULLET AND UFO COLLISION
 	bulletHitUfo(ufos) {

 		for(let i = 0; i < ufos.length; i++ ) {

			if(ufos[i].x < (this.x + this.width) && (ufos[i].x + ufos[i].width) > this.x){

				if( (ufos[i].y + ufos[i].height) > this.y && ufos[i].y < (this.y + this.height) ){
					
					ufos[i].life--;

					if(ufos[i].life <= 0){

						ufos[i].destroyUfos(ufos);	
						
					}

					this.ctx.drawImage(this.loadeBulletImage[0], this.x + 50, this.y, this.width, this.height);
					
					return ufos;					
				}
			}
		}	
 	};


}
