
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
            //messageBox.insertAdjacentHTML("afterbegin",`<div class="message" style="background-color: ${currentStyle}">${item.value}</div>`);
            createBox(item.value);
        }
        
    });
});

textfields.forEach((item) =>{
	if (item.name == "color"){
		colorizeDiv();
	}
	else
	{
		item.addEventListener("keypress", function(event) {
			if (event.key === "Enter") {
				createBox(item.value);
			}
		});
	}
});

function createBox(content)
{
	messageBox.insertAdjacentHTML("afterbegin",`<div class="message" style="background-color: ${currentStyle}">${content}</div>`);

}

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
