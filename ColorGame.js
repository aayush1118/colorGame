var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares =6;
			reset();
		});
	}


	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.background = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
				resetButton.textContent = "Play Again?";
				
			} else {
				this.style.opacity = "0.1";
				messageDisplay.textContent = "Try Again";
			
			}
		});
	}

	reset();
}




function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
			squares[i].style.opacity = "1.0";
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

}


resetButton.addEventListener("click", reset);

colorDisplay.textContent = pickedColor;





function changeColors(color){
 	//loop through all squares
 	for (var i=0; i< squares.length;i++){
 		//change each colors to match given color
 		squares[i].style.backgroundColor=color;
 		squares[i].style.opacity = "1.0";
 	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[]
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	 
	}
	//return that array
	return arr;
}

function randomColor(){
	//red
	var r =Math.floor(Math.random()*256);

	//blue
	var g =Math.floor(Math.random()*256);

	//green
	var b =Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";

}
