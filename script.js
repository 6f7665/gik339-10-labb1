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



let value = document.getElementById('textbox').value;
console.log(value);



