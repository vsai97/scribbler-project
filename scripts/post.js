var likesCount = 0;
function toggleEditSave() {
    var toggleSave = '<button class="postEdit">Save ' +
        '<i style="font-size: 14px;font-weight: bolder;" ' +
        'class="fa fa-save" aria-hidden="true"></i>' +
        '</button>';
    var toggleEdit = '<button class="postEdit">Edit ' +
        '<i style="font-size: 14px;font-weight: bolder;" ' +
        'class="fa fa-pencil-square-o" aria-hidden="true"></i>' +
        '</button>';

    var edtSaveBtn = document.getElementById('editPost');
    var toDo = (edtSaveBtn.innerText).toString().trim();
    if (toDo.localeCompare('Edit') === 0) {
        var bSave = document.getElementById('editPost');
        bSave.innerHTML = toggleSave;
        enableEditableText();

    }
    else {
        var bEdit = document.getElementById('editPost');
        bEdit.innerHTML = toggleEdit;
        updateEditedBlog();
    }

}

function enableEditableText() {
    var getBlogTitleElement = document.getElementById('blogTitleHeading');
    var getBlogContentElement = document.getElementById('blogBody');
    var getBlogContent = getBlogContentElement.innerText;
    var getBlogTitle = getBlogTitleElement.innerText;

    //Div element
    var getDiv = document.getElementById('blogBodyId');
    var getTitleDiv = document.getElementById('blogTitle');
    //Create a input element
    var inputElement = '<textarea class="txtBlog" id="txtEditedBlog" rows="15" cols="300">' +
        getBlogContent +
        '</textarea>'
    //Update the Div element
    getDiv.innerHTML = inputElement;
    var titleInput = '<input type="text" id="editedTitle" value="' + getBlogTitle + '"/>';
    getTitleDiv.innerHTML = titleInput;
    getTitleDiv.style.border = '1px solid #e60073';
    getDiv.style.border = '1px solid #e60073';

}
function updateEditedBlog() {
    var editedBlog = document.getElementById('txtEditedBlog');

    var textEdited = (editedBlog.innerHTML).toString();

    var pElement = '<p id="blogBody">' +
        textEdited +
        '</p>';
    var getDiv = document.getElementById('blogBodyId');
    getDiv.innerHTML = pElement;
    getDiv.style.border = 'none';

    var editedTitle = document.getElementById('editedTitle');

    var titleEdited = (editedTitle.value).toString();

    var h3Element = '<h id="blogTitleHeading">' +
        titleEdited +
        '</h>';
    var getTitleDiv = document.getElementById('blogTitle');
    getTitleDiv.style.border = 'none';
    getTitleDiv.innerHTML = h3Element;


}

function addComment() {
    var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function () {
        document.getElementById("txtCommentCommentPost").innerHTML;
    });

    var x = document.getElementById("txtCommentCommentPost").value;

    var pElement = '<p class="comment">' + x + '</p>';
    var getDiv = document.getElementById('listAllComments');
    getDiv.innerHTML = pElement + getDiv.innerHTML;
}

function incrementCounter() {
    likesCount++;
    var likesCountDiv = document.getElementById('likesCount');
    if (likesCount == 1) {
        var firstLikeDiv = document.getElementById('firstLike');
        firstLikeDiv.style.display = 'none';
        likesCountDiv.style.display = 'block';

    }


    var spanElement = '<span style="font-size: 14px; font-family: "Abel", sans-serif;padding-left: 5px">' + likesCount +
        '</span> person likes this!';
    likesCountDiv.innerHTML = spanElement;

}
