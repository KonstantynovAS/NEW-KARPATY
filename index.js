function pictChange(elem)
{
	document.getElementById("targpic").style.backgroundImage = "url('" + elem.src + "')";
}

function pictRight()
{
	var elem = document.getElementById("curr-sm-img");
	var elemNext = elem.nextElementSibling;
	var image;

	if (elemNext != null) {
		
		elem.removeAttribute("id");
		elemNext.setAttribute("id", "curr-sm-img");
		image = elemNext.childNodes[0];
		document.getElementById("targpic").style.backgroundImage = "url('" + image.src + "')";
	}

}

function pictLeft()
{
	var elem = document.getElementById("curr-sm-img");
	var elemNext = elem.previousElementSibling;
	var image;

	if (elemNext != null) {
		
		elem.removeAttribute("id");
		elemNext.setAttribute("id", "curr-sm-img");
		image = elemNext.childNodes[0];
		document.getElementById("targpic").style.backgroundImage = "url('" + image.src + "')";
	}

}