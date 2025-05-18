// Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (Енд-поінт для тримання постів https://jsonplaceholder.typicode.com/users/USER_ID/posts)

const userDetails = document.getElementById("userDetails");
const postsTitle = document.getElementById("postsTitle");
const btnPost = document.createElement("button");
btnPost.innerText = "post of current user";
const user = JSON.parse(localStorage.getItem("userData"));
const url = `https://jsonplaceholder.typicode.com/users/${user.id}/posts`

function createUser(obj, container) {
    const list = document.createElement("ul");
    for (const key in obj) {
        const li = document.createElement("li");
        const text = document.createElement("p");
        text.innerText = `${key}: ${typeof obj[key] === "object"? "":obj[key]}`;
        li.append(text);
        list.append(li);
        if(typeof obj[key] === "object"){
            createUser(obj[key], li);
        }
    }
    container.append(list, btnPost);
}
createUser(user, userDetails);

// Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

btnPost.addEventListener("click", ()=>{
    fetch(url).then(res => res.json()).then(posts => {
        const postsList = document.createElement("ul");
        posts.forEach(post => {
            const postsItem = document.createElement("li");
            const textItem = document.createElement("p");
            textItem.innerText = `${post.title}`;
            const btnLinkPost = document.createElement("button");
            btnLinkPost.innerText = "post details";
            postsItem.append(textItem, btnLinkPost);
            btnLinkPost.addEventListener("click", () => {
                localStorage.setItem("postInfo", JSON.stringify(post));
                window.location.href = `post-details.html`;
            })
            postsList.append(postsItem);
        })
        postsTitle.append(postsList)
    })
});