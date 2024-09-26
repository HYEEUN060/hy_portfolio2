$(function(){
    let pageOT = $('main').offset().top

    $(window).scroll(function(){
        let scroll = $(window).scrollTop() >= pageOT
        $('header').toggleClass('down', scroll)
    })
})