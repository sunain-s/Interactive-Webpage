// Javascript File for School Web Tasks 1.3.4

function setStyleSheet(url) {
    // Changes stylesheet of index.html, using id
    
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', url);
}

function countLinkClicks(count, click_id, id) {
    // gets the link and increments value when clicked

    var element = document.getElementById(click_id);
    var display = document.getElementById(id);
    element.onclick = function() {
        count++;
        display.innerHTML = count;
    }
}

function changeImages(id1, index1, id2, index2, id3, index3) {
    // swaps images every second

    if (swap) {
        document.getElementById(id1).src = images[0][index1];
        document.getElementById(id2).src = images[0][index2];
        document.getElementById(id3).src = images[0][index3];
    }
