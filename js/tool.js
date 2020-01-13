$(function(){
    $(window).resize(function(e){
        var w = $(window).width();
        var h = $(window).height();
        $('.pageWidth').text(w);
        $('.pageHeight').text(h);
    })

})