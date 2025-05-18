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
        const postsList = document.createElement("ul");
        posts.forEach(post => {
            const postsItem = document.createElement("li");
            postsItem.innerText = `${post.title}`;
            const btnLinkPost = document.createElement("button");
            btnLinkPost.innerText = "post details";

            btnLinkPost.addEventListener("click", () => {
                localStorage.setItem("postInfo", JSON.stringify(post));
                window.location.href = `post-details.html`;
            })

            postsList.append(postsItem, btnLinkPost);
        })
        postsTitle.append(postsList)

    })
});