"use strict";

const url = "https://jsonplaceholder.typicode.com/posts";
let posts = [];
const list = document.querySelector('.posts');
fetch(url)
    .then(response => response.json())
    .then(rawPosts => {
        posts = rawPosts;
        render();
    })
    .catch(err => posts.innerText = err.error);

function render() {
    const html = posts.map(post => {
        return `
        <li class="post">
            <span class="post-title" data-id="${post.id}">${post.title}</span>
            <div class="post-body">${post.body}</div>
            <ul class="post-comments" data-id="${post.id}">
            </ul>
        </li>`;
    }).join('');
    list.innerHTML = html;

    let comments = [];
    const clickTitle = document.querySelectorAll('.post-title');
    let prevPostId = "";
    clickTitle.forEach(element => {
        element.addEventListener('click', function (e) {
            const postId = e.target.dataset.id;
            if (postId === prevPostId) {
                const prevCommentList = document.querySelector(`ul[data-id="${prevPostId}"]`);
                collapseComment(prevCommentList);
                prevPostId = "";
                return;
            }
            if (prevPostId !== "" && postId !== prevPostId) {
                const prevCommentList = document.querySelector(`ul[data-id="${prevPostId}"]`);
                collapseComment(prevCommentList);
            }
            const commentList = document.querySelector(`ul[data-id="${postId}"]`);
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => response.json())
                .then(data => {
                    comments = data;
                    renderComment(comments, commentList);
                })
                prevPostId = postId;
        });
    });
}

function collapseComment(prevCommentList) {
    prevCommentList.innerHTML = "";
}

function renderComment(comments, commentList) {
    let html = `<span>Comments: </span>`
    html += comments.map(comment => {
        return `
        <li class="comment">
            <div class="comment-body">${comment.body}</div>
            <div>
                <span class="comment-name">Comment by: ${comment.name}</span>
            </div>
        <li>`;
    }).join('');
    commentList.innerHTML = html;
}