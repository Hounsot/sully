$(document).ready(function(){
    var lol = function(){
        var bound = $('#box');
        // bound = div
        var video = $('#box video')
        // video = video в div #box
        var scrollVideo = function(){
            if(video.duration) {
                var distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
                var rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
                var percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

                video.currentTime = video.duration * percentScrolled
            }
        }
    }
})