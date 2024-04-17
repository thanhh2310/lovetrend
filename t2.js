function fadeIn(){
    var text = $('.content').text().replace(/^\s+|\s+$/g,'');
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    for(;i<length;i+=sp) {
        txt = text.substring(i,i+sp);
        html.push('<span class="c animated">' + txt + '</span>');
    }
    $('.content').removeClass('c').html(html.join(''));

    for(i = 0,length = html.length;i<length;i++) {
        !function(i){
            setTimeout(function(){
                $('.content').find('.animated').eq(i).addClass('fadeIn');
            },i*400);
        }(i);
    }
};
function playFromStart() {
    var audio = document.getElementById('myAudio');
    audio.currentTime = 0;
    audio.play();
}




document.body.addEventListener('click', function() {
    // Hide the .start element
    document.querySelector(".start").style.display = "none";

    // Show the #heart element
    document.querySelector("#heart").hidden = false;

    // Change the background color
    document.querySelector("body").style.backgroundColor = "#542246";

    // Start the text fade-in animation
    fadeIn();

    // Play the audio from the start
    playFromStart();
});
