console.log("Hej världen!");




const checkbox = document.getElementById('divStyle');
const textfields = document.querySelectorAll('.textfield');
const messageBox = document.getElementById('messageBox');
const submitBtn = document.getElementById('submitBtn');

let currentStyle = "#0e0e0e;";

console.log(typeof(textfields));

textfields.forEach((item) =>{
    item.addEventListener('blur', (e) =>{
        
        if (item.name == "color"){
	    colorizeDiv();
        }
        else{
            console.log(e)
            console.log(item.value);
            messageBox.insertAdjacentHTML("afterbegin",`<div class="message" style="background-color: ${currentStyle}">${item.value}</div>`);

        }
        
    });
});


function colorizeDiv()
{
	//console.log(checkbox.checked);
	if( checkbox.checked === true)
	{
		currentStyle = document.getElementById("color").value;
	}
	else
	{
		currentStyle = "#0e0e0e;";
	}
}
checkbox.addEventListener('click', colorizeDiv);


submitBtn.addEventListener('click', () =>{
    messageBox.innerHTML = "";
});
