/* Code for Trash Modal */
var trashFunctions = function (numberOfPosts) {

    for (var i = 0; i < numberOfPosts; i++) {
        // Get the trash modal
        var modal = document.getElementsByClassName('trash-modal')[i];

        // Get the div that opens the modal
        var div = document.getElementsByClassName("post-trash")[i];

        // Get the button to delete the post
        var yesBtn = document.getElementsByClassName("trash-modal-button-yes")[i];

        // Get the <span> element that closes the modal
        var close = document.getElementsByClassName("trash-modal-button-no")[i];

        //Get the post to be deleted
        var post = document.getElementsByClassName("post")[i];

        // When the user clicks on the trash icon, open the modal 
        div.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on `No` button, close the modal
        close.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks on `Yes` button, delete the post
        yesBtn.onclick = function () {
            post.style.display = "none";
        }
    }
}

trashFunctions(5);

function navigateToPost() {
    location.href = "post.html";
}