const userDetails = document.getElementById("userDetails");
const btnPost = document.createElement("button");
btnPost.innerText = "post of current user";
const user = JSON.parse(localStorage.getItem("userData"));
const url = `https://jsonplaceholder.typicode.com/users/${user.id}/posts`

function createUser(obj, container) {
    const list = document.createElement("ul");
    for (const key in obj) {
        const li = document.createElement("li");
        li.innerText = `${key}: ${typeof obj[key] === "object"? "":obj[key]}`;
        list.append(li);
        if(typeof obj[key] === "object"){
            createUser(obj[key], li);
        }
    }
    container.append(list, btnPost);
}
createUser(user, userDetails);

btnPost.addEventListener("click", ()=>{
    fetch(url).then(res => res.json()).then(posts => {
        console.log(posts);
    })
});