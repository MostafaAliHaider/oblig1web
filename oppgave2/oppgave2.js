const users = [
    
    {id: 0, name: "Trude", age: 77},
    {id: 1, name: "Simen", age: 85},
    {id: 2, name: "Lars", age: 99},
    {id: 3, name: "Ali", age: 34},
    {id: 4, name: "Finn", age: 60},
    {id: 5, name: "Kåre", age: 70},
    {id: 6, name: "Hanne", age: 20},
    {id: 7, name: "Åse", age: 21},
    {id: 8, name: "Anne", age: 6},
    {id: 9, name: "Amanda", age: 31},
    {id: 10, name: "Morgan", age: 87},
];

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const filterBtn = document.getElementById("filter");
const userList = document.getElementById("users");

const writeUsers = () => {
    users.map(user=>{
        const {id, name, age} = user;

        let li = document.createElement("li");
        li.innerHTML = `ID: ${id} - Name: ${name} - Age: ${age}`;
        userList.appendChild(li);

    })
} 

writeUsers();


const handleSearch = (e) => {

    userList.innerHTML = "";

    let foundUser = users.filter(user =>user.name.toLowerCase().includes(e.target.value.toLowerCase()));

    foundUser.map(user =>{
        const {id, name, age} = user;

        let li = document.createElement("li");
        li.innerHTML = `ID: ${id} - Name: ${name} - Age:${age}`;
        userList.appendChild(li);
    });

}
    const handleFilter = () =>{
        userList.innerHTML = "";

        let age = ageInput.value;
        let userByAge = users.filter(user=>user.age >= age);
        
        userByAge.map(user=>{

            const {id, name, age} = user;
            let li = document.createElement("li");
            li.innerHTML = `ID: ${id} - Name: ${name} - Age:${age}`;
            userList.appendChild(li);
        });

       
    }

nameInput.addEventListener("keypress", handleSearch);
filterBtn.addEventListener("click", handleFilter);