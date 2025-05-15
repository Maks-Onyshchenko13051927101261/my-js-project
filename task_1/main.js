//Name/Value pairs are to be entered into the upper textbox. This textbox will be used by the
// end-user to quickly add Name/Value pairs to the list below.
// The Name/Value pair entry format is <name> = <value>
// Where <name> is the name portion of the pair, and <value> is the value portion of the pair.
// Only valid Name/Value pairs can be added. Names and Values can contain only
// alpha-numeric characters. The equal-sign is used to delimit the pair, spaces before and/or
// after the equal-sign may be entered by the end user (and should be ignored.)
// When the ‘Sort by Name’ button is pressed the list will be sorted ascending by Name.
// When the ‘Sort by Value’ button is pressed the list will be sorted ascending by Value.
// When the ‘Delete’ button is pressed all selected items in the listbox will be deleted.

const formApp = document.forms["formApp"];
const addBtn = document.getElementById("add");
const sortByNameBtn = document.getElementById("sortByName");
const sortByValueBtn = document.getElementById("sortByValue");
const resetBtn = document.getElementById("reset");
let textarea = document.getElementById("textarea");
// checking local storage
let arr = JSON.parse(localStorage.getItem("arr")) || [];
arr.forEach((item) => {
    const textareaItem = document.createElement("li");
    textareaItem.innerText = `${item.name} = ${item.value}`;
    textarea.appendChild(textareaItem);
})
//parameters button "Add"
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
// parameters input
    let inputText = formApp.text.value.trim();
    const regex = /^([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)$/;
    const match = inputText.match(regex);
// check of entered values
    if (match) {
        const name = match[1];
        const value = match[2];
        const textareaItem = document.createElement("li");
        textareaItem.innerText = `${name} = ${value}`;
        textarea.appendChild(textareaItem);
        arr.push({name, value});
        localStorage.setItem("arr", JSON.stringify(arr));
    } else {
        alert("Please enter a valid like: name=value");
    }
    formApp.text.value = "";
})
//parameters button "Sort By Name"
sortByNameBtn.addEventListener("click", (e) => {
    arr.sort((a, b) => b.name.localeCompare(a.name));
    localStorage.setItem("arr", JSON.stringify(arr));

    textarea.innerHTML = "";
    arr.forEach((item) => {
        const textareaItem = document.createElement("li");
        textareaItem.innerText = `${item.name} = ${item.value}`;
        textarea.appendChild(textareaItem);
    })
})
//parameters button "Sort By Value"
sortByValueBtn.addEventListener("click", (e) => {
    arr.sort((a, b) => b.value.localeCompare(a.value));
    localStorage.setItem("arr", JSON.stringify(arr));

    textarea.innerHTML = "";
    arr.forEach((item) => {
        const textareaItem = document.createElement("li");
        textareaItem.innerText = `${item.name} = ${item.value}`;
        textarea.appendChild(textareaItem);
    })
})
//parameters button "Delete"
resetBtn.addEventListener("click", (e) => {
    localStorage.removeItem("arr");
    textarea.innerHTML = "";
    arr = [];
})