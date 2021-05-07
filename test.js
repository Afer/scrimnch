$(function() {
    $(".container")
    .on('touchstart', function(event) {
        sendLog(event);
    })
    .on('touchmove', function(event) {
        sendLog(event);
    })
    .on('touchend', function(event) {
        sendLog(event);
    });
});

function sendLog(event) {
    var coords = getCoords(event);

    console.log(coords.x, coords.y);

    $.ajax({
        url: '/' + coords.x + '/' + coords.y,
        error: function(a, b, c) {
            console.log(a, b, c);
        }
    });
}

function getCoords(event) {
    var obj = {};
    if (event.touches && event.touches[0] && event.touches[0].pageX) {
        obj.x = event.touches[0].pageX;
        obj.y = event.touches[0].pageY;
    }
    else if (event.originalEvent && event.originalEvent.touches && event.originalEvent.touches[0] && event.originalEvent.touches[0].pageX) {
        obj.x = event.originalEvent.touches[0].pageX
        obj.y = event.originalEvent.touches[0].pageY
    }
    else if (event.originalEvent && event.originalEvent.changedTouches && event.originalEvent.changedTouches[0] && event.originalEvent.changedTouches[0].pageX) {
        obj.x = event.originalEvent.changedTouches[0].pageX
        obj.y = event.originalEvent.changedTouches[0].pageY
    }
    else {
        obj.x = event.pageX;
        obj.y = event.pageY;
    }

    return obj;
}