//Uppgift 4 Skapa variabler
const checkbox = document.getElementById('divStyle');
const textfields = document.querySelectorAll('.textfield');
const messageBox = document.getElementById('messageBox');
const deleteBtn = document.querySelector('#deleteBtn');

// Uppgift 5 - Skapa en fördefinierad funktion
function handleEvent(e){
    console.log(e.target); //skriv ut i konsollen enligt uppgift
    console.log(e.target.name);
    if (e.target.name === "content"){
        createBox(e.target.value);
    }
}

function createBox(content)
{
    const newElement = document.createElement('div');
    newElement.classList.add('message'); 
    newElement.innerHTML = content;
    messageBox.insertAdjacentElement('afterbegin', newElement);
}

//uppgift 6 - Eventlyssnare till checkboxen
checkbox.addEventListener('change', () =>{
    if (checkbox.checked === true){
        messageBox.style.backgroundColor = textfields[0].value;
        deleteBtn.style.backgroundColor = textfields[0].value;
    }
    else{
        messageBox.style.backgroundColor = "transparent";
    }

});
// uppgift 6 eventlyssnare till textfälten
textfields.forEach((field) => field.addEventListener('blur', handleEvent));

//upgift 6 eventlyssnare till knappen
deleteBtn.addEventListener('click', () =>{
    messageBox.innerHTML = "";
});
