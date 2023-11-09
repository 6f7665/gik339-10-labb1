console.log("Hej världen!");




const checkbox = document.getElementById('divStyle');
const textfields = document.querySelectorAll('.textfield');
const messageBox = document.getElementById('messageBox');

let hej = "Det här skrev du i";

console.log(typeof(textfields));

textfields.forEach((item) =>{
    item.addEventListener('click', (e) =>{
        
     
        console.log(e)
        console.log(item.value);
        messageBox.innerHTML = hej + " " + item.value;
        
    });
});


function colorizeDiv()
{
	//console.log(checkbox.checked);
	if( checkbox.checked === true)
	{
		messageBox.style.color = document.getElementById("color__input").value;
	}
	else
	{
		messageBox.style.color = "white";
	}
}
checkbox.addEventListener('click', colorizeDiv);
