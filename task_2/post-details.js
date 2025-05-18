const postContainer = document.getElementById("post");
const post = JSON.parse(localStorage.getItem("postInfo"));
const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`

const postList = document.createElement("ul");
for (const key in post) {
    const postItem = document.createElement("li");
    postItem.innerText = `${key}: ${post[key]}`;
    postList.appendChild(postItem);
}
const commentsList = document.createElement("ul");
fetch(url).then(res => res.json()).then(comments => {
    comments.forEach(comment => {
        for (const key in comment) {
            const commentItem = document.createElement("li");
            commentItem.innerText = `${key}: ${comment[key]}`;
            commentsList.appendChild(commentItem);
        }
    })
})
postContainer.append(postList, commentsList);
