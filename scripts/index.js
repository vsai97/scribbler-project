function navigateToBlogList() {
    location.href = "html/postslist.html"
}

function showCreatePost() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "flex";
}

function hideCreatePostModal() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
}