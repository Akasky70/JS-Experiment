function GamePanel(props){
	
	// FOR FRONT TRANSPARENT GAME PANEL
	this.width	= props.width || 300;
	this.height	= props.height || 500;
	this.class	= props.class;
	this.id		= props.id;
	this.$parent= props.parent;

	// FOR BACKGROUND PANEL (ITS SEPERATE DIV ALREADY CREATED USING CSS HTML)
	this.background  = props.background;
	this.$background = props.backgroundParent;
	this.scrollY	 = 1;
	this.backgroundY = 0;
	this.scrollSpeed = props.scrollSpeed || 20;
	this.backgroundPosition = 0;
 	
	var thisPanel = this;
	var infinityBg;

	// CREATING DIV FOR GAME PANEL
	this.$gamePanel = document.createElement("div");
	this.$playButton = document.createElement("div");
	this.$controlPanel = document.createElement("div");
	this.$pauseButton = document.createElement("div");
	this.$scorePanel = document.createElement("div");
	this.$gameOverPanel = document.createElement("div");
	this.$exitButtton = document.createElement("div");

	this.initGamePanel = function(){

		thisPanel.$gamePanel.style.width 	= thisPanel.width + "px";
		thisPanel.$gamePanel.style.height = thisPanel.height + "px";
		thisPanel.$gamePanel.className 	= thisPanel.class;
		thisPanel.$gamePanel.setAttribute("id",thisPanel.id);
		thisPanel.$gamePanel.style.background = thisPanel.background;

		thisPanel.$parent.appendChild(thisPanel.$gamePanel);

		return thisPanel.$gamePanel;
	}

	// INFILITY LOOP FOR BACKGROUND PANEL
	this.infinityBackground = function(){

		infinityBg = setInterval(function(){
			thisPanel.backgroundPosition += thisPanel.scrollY * thisPanel.scrollSpeed;
			thisPanel.$background.style.backgroundPosition = "0px "+ thisPanel.backgroundPosition + "px";
		},100);
		
	}

	// GIVING NEW POSITION TO BG TO SCROLL
	var updateBackgroundPosition = function(){

		thisPanel.backgroundPosition += thisPanel.scrollY * thisPanel.scrollSpeed;
	}


	// THIS COMES OVER THE INFINIY BG
 	this.welComePanel = function(){

		thisPanel.$gamePanel.style.background 	= "rgba(0, 194, 255, 0.43)";
		thisPanel.$gamePanel.innerHTML = "<p>We came to know that numbers of UFOS are down to earth for destruction. We believed and choosed you to protect OUR EARTH against them. </p><h1>ARE YOUR READY TO TAKE DOWN THE UFOS?</h1>";

	}

	// ADDING PLAY SETTING AND OTHER BUTTOMS
	this.addButtoms = function(){

		thisPanel.$playButton.setAttribute("id","playbutton");
		thisPanel.$playButton.className= "button-for-all";
		thisPanel.$gamePanel.appendChild(thisPanel.$playButton);

		return thisPanel.$playButton;		
	}

	// ADDING PLAY SETTING AND OTHER BUTTOMS
	this.exitButton = function(){

		thisPanel.$exitButtton.setAttribute("id","exitbutton");
		thisPanel.$exitButtton.className= "button-for-all";
		thisPanel.$exitButtton.innerHTML = "<p>EXIT TO MAIN MENU</p>";
		thisPanel.$gamePanel.appendChild(thisPanel.$exitButtton);

		return thisPanel.$exitButtton;		
	}

	// BUTTON MESSAGE
	this.buttonName = function(name){

		thisPanel.$playButton.innerHTML = "<p>" + name + "</p>";
	}

	// RESET PANEL CONTENT TO PLAY GAMES
	this.resetGamePanel = function(){

		thisPanel.$gamePanel.removeChild(thisPanel.$playButton);
		thisPanel.$gamePanel.style.background = "transparent";
		thisPanel.$gamePanel.innerHTML = "";
	}

	// ADD CONTROL PANEL ON THE TOP OF GAME
	this.addControlPanel = function(){

		thisPanel.$controlPanel.className = "control-panel clearfix";
		thisPanel.$controlPanel.setAttribute("id","controlpanel");

		thisPanel.$parent.appendChild(thisPanel.$controlPanel);

		return thisPanel.$controlpanel;
	}

	// ADD PAUSE BUTTOM
	this.pauseButton = function(){

		thisPanel.$pauseButton.setAttribute("id","pausebutton");
		thisPanel.$pauseButton.className= "pause-buttom";
		thisPanel.$pauseButton.style.padding= "10px";
		thisPanel.$pauseButton.style.backgroundImage = "url(images/pause.png)";
		
		thisPanel.$controlPanel.appendChild(thisPanel.$pauseButton);

		return thisPanel.$pauseButton;
	}

	// CHANGE ICON OF PAUSE BUTTON
	this.changePauseIcon = function(icon){

		thisPanel.$pauseButton.style.backgroundImage = "url("+ icon +")";		
	}

	// GAME INFINITY BG PAUSE
	this.pauseInfinityBg = function(){

		clearInterval(infinityBg);
			
	}
	
	// SCORE PANEL ON TOP
	this.scorePanel = function(){

		thisPanel.$scorePanel.setAttribute("id","scorepanel");
		thisPanel.$scorePanel.className = "score-panel";

		thisPanel.$controlPanel.appendChild(thisPanel.$scorePanel);

		return thisPanel.$scorePanel;
	}

	// GAME OVER PANEL
	this.gameOverMessage = function(){

		thisPanel.$gamePanel.innerHTML = "<p>We are so sorry!!! You couldn't survive the Battle</p><h1>- GAME OVER -</h1>";

	}

	// REMOVE GAME PANEL TO RESTART
	this.removePanel = function(){

		thisPanel.$parent.removeChild(thisPanel.$gamePanel);
	}

	// REMOVE CONTROL PANEL TO RESTART
	this.removeControlPanel = function(){

		thisPanel.$parent.removeChild(thisPanel.$controlPanel);
	}

} 