
function Bullet(props){

	this.width	= props.width || 30;
 	this.height	= props.height || 30;
 	this.class  = props.class || "bullet";
 	this.id 	= props.id || "bullet";
 	this.$parent = props.parent;
 	this.background = props.background || "images/bullet.png";
 	this.speed 		= props.speed || 30;
 	this.dy 		= 1;
 	this.x 			= props.left;
 	this.y 			= props.bottom;
 	this.parentHeight = props.parentHeight;
 	this.parentWidth  = props.parentWidth;
 	this.$parentOfParent = props.parentOfParent;
 	this.parentX = props.parentX;

 	var thisBullet = this;

 	this.$bullet = document.createElement("div");

 	this.initBullet = function(){

 		thisBullet.$bullet.style.width 		= thisBullet.width + "px";
 		thisBullet.$bullet.style.height 	= thisBullet.height + "px";
 		thisBullet.$bullet.style.backgroundImage = "url("+ thisBullet.background+ ")";
 		thisBullet.$bullet.setAttribute("id", thisBullet.id);
 		thisBullet.$bullet.className		= thisBullet.class;
 		thisBullet.$bullet.style.left 	= thisBullet.x + "px";
 		thisBullet.$bullet.style.bottom	= thisBullet.y + "px";

 		// BULLET APPENDED TO SHOOTER OBJ SO THAT IT LOOKS LIKE BULLET COMING OUT FROM SHOOTER
 		thisBullet.$parent.appendChild(thisBullet.$bullet);

 		// TO MOVE THE BULLET
 		// fireBullet();

 		return thisBullet.$bullet;
 	}

 	var updateBulletPosition = function(){

 		// ADDING SHOOTERS X POSITION TO MAKE IT FLY ON SAME POSITION OF SHOOTERS PARENT
 		thisBullet.$bullet.style.left 	= thisBullet.x + thisBullet.parentX + "px";
 		thisBullet.$bullet.style.bottom	= thisBullet.y + "px";
 		thisBullet.y += thisBullet.dy * thisBullet.speed;

 		// BULLET IS APPENDED NOW TO THE SHOOTERS PARENT SO IT INDEPENDENT FORM SHOOTER
 		thisBullet.$parentOfParent.appendChild(thisBullet.$bullet);

 		// IF BULLET CROSSES THE SCREEN ITS REMOVED FRO THE SCREEN AND ARRAY
 		if(thisBullet.y > thisBullet.parentHeight){

 			thisBullet.$parentOfParent.removeChild(thisBullet.$bullet);
				
 		}
		
 	}

 	this.fireBullet = function(){

 		// var firedBullet = setInterval(function(){

 			updateBulletPosition();

 		// 	if(thisBullet.y > (thisBullet.parentHeight + 100)){
 				
 		// 		clearInterval(firedBullet);
 		// 		return false;
 		// 	}

 		// },10)
 		
 	}

 	this.destroyBullet = function(){
 		
	 	if (thisBullet.$bullet.parentNode == thisBullet.$parentOfParent){

	 		thisBullet.$bullet.style.backgroundImage = "url(images/fire2.gif)";
	 		thisBullet.$bullet.style.display = "none";
	 		thisBullet.$parentOfParent.removeChild(thisBullet.$bullet);
 		}
 	}
}