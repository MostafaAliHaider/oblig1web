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
//Source: https://sabe.io/blog/javascript-print-array
const list = document.getElementById("ul");
const myList = ["hey", "ho", "lets go"]
const printList = document.getElementById("write-list")


printList.addEventListener("click", function(){
    list.innerHTML = "";

    myList.forEach(function(element) {
        const li = document.createElement("li");
        li.textContent = element;
        list.appendChild(li);
        
    });
});


//Oppgave 5
//placeholder er der nye elementer vil bli plassert
const placeholder = document.getElementById("placeholder");
//Select, brukeren kan her velge hvilken type HTML-overskrift de ønsker å opprette teksten med. 
const heading = document.getElementById("select");
//Input, elementet der brukeren kan skrive inn innholdet som skal vises inne i det nye HTML-elementet
const input = document.getElementById("text");
//Knapp, som brukeren kan trykke på for å opprette og vise det nye HTML-elementet.
const print = document.getElementById("create");

/*createTxt blir kalt når brukeren klikker på "print" knappen. 
Det som blir kjørt i funksjonen er følgende:
det opprettes et nytt HTML-element ved hjelp av 'document.createElement(heading.value)' heading.value 
vil inneholde verdiene "h1", "h2" osv. Som brukeren har valgt fra "select" elementet. 
- innholdet i det nye elementet blir satt til verdien som brukeren har skrevet inn i 'input' elementet ved å bruke
'element.innerHTML = input.value;
- Det nye elementet blir lagt til som et barn av "placeholder" elementet ved å bruke "placeholder.appendChild(element)"

-Til slutt blir det lag til en event listener på "print knappen". Når knappen klikkes, så blir createTxt funksjonen kjørt.
Det nye HTML-elementet blir da opprettet og plassert inni "placeholder" elementet.

*/
const createTxt = () => {

    let element = document.createElement(heading.value);
    element.innerHTML = input.value;

    placeholder.appendChild(element);

} 
print.addEventListener("click", createTxt);


//oppgave 6

const deleteList = document.getElementById("list");
const btnDelete = document.getElementById("remove-li");

btnDelete.addEventListener("click", function() {
   const firstListItem = deleteList.querySelector("li:first-child");
   if (firstListItem){
       deleteList.removeChild(firstListItem)
   }
   

});

