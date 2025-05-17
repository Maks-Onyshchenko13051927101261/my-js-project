
const url = "https://jsonplaceholder.typicode.com/users";
const usersContainer = document.getElementById("container");

fetch(url).then(res => res.json()).then(users => {
    users.forEach(user => {
        const userContainer = document.createElement("div");
        userContainer.classList.add("user-container");
        const title = document.createElement("h2");
        title.innerText = `id: ${user.id} - ${user.name}`;
        const btnUsers = document.createElement("button");
        btnUsers.classList.add("btn");
        btnUsers.innerHTML = "user details";

        btnUsers.addEventListener("click", () => {
            localStorage.setItem("userData", JSON.stringify(user));
            window.location.href = `user-details.html`;
        })

        userContainer.append(title, btnUsers);
        usersContainer.appendChild(userContainer);
    })

})