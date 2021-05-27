
$('body').click(function() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var i = Math.random();
    $('body').css('background-color', 'rgba(' + r + ',' + g  + ',' + b +',' + i + ')');
});
