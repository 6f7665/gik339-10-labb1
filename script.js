console.log("Hej världen!");




const checkbox = document.getElementById('divStyle');
const textfields = document.querySelectorAll('.textfield');
const messageBox = document.getElementById('messageBox');
const submitBtn = document.getElementById('submitBtn');


console.log(typeof(textfields));

textfields.forEach((item) =>{
    item.addEventListener('blur', (e) =>{
        
        if (item.name == "color"){
            return;
        }
        else{
            console.log(e)
            console.log(item.value);
            messageBox.insertAdjacentHTML("afterbegin",`<div class="message">${item.value}</div>`);

        }
        
    });
});


function colorizeDiv()
{
	//console.log(checkbox.checked);
	if( checkbox.checked === true)
	{
		messageBox.style.color = document.getElementById("color").value;
	}
	else
	{
		messageBox.style.color = "#e0e6eb";
	}
}
checkbox.addEventListener('click', colorizeDiv);


submitBtn.addEventListener('click', () =>{
    messageBox.innerHTML = "";
});
