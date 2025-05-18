// отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users

const url = "https://jsonplaceholder.typicode.com/users";
const usersContainer = document.getElementById("container");

// Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

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