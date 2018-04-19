
var numSquares = 6;
var color = generateRandomColor(numSquares);

//["rgb(255, 0, 0)" , "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"]
	var squares = document.querySelectorAll(".square");
	var pickedColor = colorPicked();
	var messageDisplay = document.querySelector("#messageDisplay");
	var colorDisplay = document.getElementById("colorDisplay");
	colorDisplay.textContent = pickedColor;
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");
	var easyButton = document.getElementById("easyButton");
	var hardButton = document.getElementById("hardButton");

	resetButton.addEventListener("click", function()
	{
		 color = generateRandomColor(numSquares);
		 pickedColor = colorPicked();
		 colorDisplay.textContent = pickedColor;
		 messageDisplay.textContent = " ";
		 this.textContent = "New colors";
		 for (var i=0; i<squares.length; i++)
		 {
		 	squares[i].style.backgroundColor=color[i];
		 }
		 h1.style.backgroundColor= "steelblue"; 

	});
	

	easyButton.addEventListener("click", function()
	{
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
		numSquares = 3;
		color = generateRandomColor(numSquares);
		pickedColor=colorPicked();
		colorDisplay.textContent = pickedColor;
		for(var i =0; i<squares.length; i++)
			{ if (color[i])
				{
				squares[i].style.backgroundColor = color[i];
				} 
			else
				{
				squares[i].style.display= "none";
				}
			}
		});

	hardButton.addEventListener("click", function()
	{
		easyButton.classList.remove("selected");
		hardButton.classList.add("selected");
		numSquares = 6;
		color = generateRandomColor(numSquares);
		pickedColor=colorPicked();
		colorDisplay.textContent = pickedColor;
		for(var i =0; i<squares.length; i++)
			{ squares[i].style.backgroundColor = color[i];
			squares[i].style.display= "block";
			}
		});

for (var i=0; i<squares.length; i++)
{
	//add initial color to square
	squares[i].style.backgroundColor= color[i];
	squares[i].addEventListener("click", function()
	{	
		var clickedColor = this.style.backgroundColor;
		//var pickedColor = color[3];
		
		if (clickedColor === pickedColor)
		{
			messageDisplay.textContent= "Correct!!";
			changeColor(clickedColor);
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = clickedColor;
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!!";
		}
	});
}

function changeColor(color)
	{
		for(var i=0 ; i<squares.length; i++)
		{
			squares[i].style.backgroundColor= color;
		}
	}

function colorPicked()
	{
		var random = Math.floor(Math.random() * color.length );
		return color[random];
	}


function generateRandomColor(num)
{
	var arr = [];
	for(var i=0; i<num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor()
{
	var r= Math.floor(Math.random()* 256);
	var g= Math.floor(Math.random()* 256);
	var b= Math.floor(Math.random()* 256);
	return"rgb(" + r + ","+ " " + g + "," + " "+ b + ")";
}