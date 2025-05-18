// Вивести всю, без виключення, інформацію про об'єкт post на який клікнули.
// Нижче інформація про пост, вивести всі коментарі поточного поста:
// енд-поінт - https://jsonplaceholder.typicode.com/posts/POST_ID/comments

const postContainer = document.getElementById("post");
const post = JSON.parse(localStorage.getItem("postInfo"));
const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`

const postList = document.createElement("ul");
postList.classList.add("post-list");
for (const key in post) {
    const postItem = document.createElement("li");
    const postText = document.createElement("p");
    postText.innerText = `${key}: ${post[key]}`;
    postItem.appendChild(postText);
    postList.appendChild(postItem);
}
const commentsList = document.createElement("ul");
commentsList.classList.add("comments-list");
fetch(url).then(res => res.json()).then(comments => {
    comments.forEach(comment => {
        const commentItem = document.createElement("li");
        for (const key in comment) {
            const commentText = document.createElement("p");
            commentText.innerText = `${key}: ${comment[key]}`;
            commentItem.appendChild(commentText);
            commentsList.appendChild(commentItem);
        }
    })
})
postContainer.append(postList, commentsList);
