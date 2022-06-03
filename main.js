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
