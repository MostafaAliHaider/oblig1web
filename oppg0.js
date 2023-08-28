//Oppgave 1
//Source: https://codingbeautydev.com/blog/javascript-remove-element-on-click/

const button = document.getElementById("remove-btn");
const remove = document.getElementById("remove");
button.addEventListener('click', () =>{
    remove.remove();
});


//Oppgave 2
//Source: https://www.shecodes.io/athena/10151-how-to-change-text-when-clicking-in-javascript
const press = document.getElementById("change-btn");
const change = document.getElementById("change");

press.addEventListener("click", function(){
    change.textContent = "Text has been changed, go to next task!";
})

//Oppgave 3
    // Hent tekst og output elementene
    const inputTekst = document.getElementById("input");
    const outputTekst = document.getElementById("input-text");

    inputTekst.addEventListener("input", function(){

        const inputElement = inputTekst.value;

        outputTekst.textContent = inputElement;
    })


//Oppgave 4
const list = document.getElementById("ul");
const printList = document.getElementById("write-list")

const myList = ["hey", "ho", "lets go"]

printList.addEventListener("click", () =>{
    for (let i = 0; i < myList.length; i++)
})