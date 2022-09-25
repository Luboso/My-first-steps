function addMessage( elementId, message ) {
    var list = document.getElementById(elementId),
        newItem = document.createElement('li');

    newItem.textContent = message;
    list.appendChild(newItem);
}


addMessage('browser', 'page loaded, bitch');



document.body.addEventListener('click', function(event) {
    addMessage('user', 'totally clicked it');
});


document.body.addEventListener('keypress', function(event) {

    var oldLeft = getComputedStyle(document.body).left,
        newLeft;

    oldLeft = parseInt(oldLeft, 10);

    if ( event.key == 'a') {
        newLeft = oldLeft - 10;
    }
    else if ( event.key == 'd') {
        newLeft = oldLeft + 10;
    }

    document.body.style.left = newLeft + 'px';

    var oldTop = getComputedStyle(document.body).top,
        newTop;
    
    oldTop = parseInt(oldTop, 10);

    if (event.key == 'w') {
        newTop = oldTop - 10;
    }

    else if (event.key == 's') {
        newTop = oldTop + 10;
    }

    document.body.style.top = newTop + 'px';

});

window.addEventListener('beforeunload', function (event) {
    addMessage('browser', "don't try to close me! dick!");
    event.returnValue = ':(';
    return ':(';
});
