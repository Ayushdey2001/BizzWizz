const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const slider = document.querySelector(".carousel__slider");

var cardIndex;
var slidenum;

rightArrow.addEventListener("click", function () {
	cardIndex = document.querySelector('input[name="slide"]:checked').value;
	cardIndex++;
	if (cardIndex > 3) {
		cardIndex = 1;
	}
	slidenum = "slide" + cardIndex;
	document.getElementById(slidenum).checked = true;
});

leftArrow.addEventListener("click", function () {
	cardIndex = document.querySelector('input[name="slide"]:checked').value;
	cardIndex--;
	if (cardIndex < 1) {
		cardIndex = 3;
	}
	slidenum = "slide" + cardIndex;
	document.getElementById(slidenum).checked = true;
});
