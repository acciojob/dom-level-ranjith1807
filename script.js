let level=document.getElementById("level");
let domlevel=0;
while(level){
	domlevel++;
	level=level.parentElement;
}
alert(`The level of the element is: ${domlevel}`);