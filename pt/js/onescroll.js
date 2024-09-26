$(function(){
    $('.inner ul li').click(function(){

        let idx = $(this).index()
        
        let section = $('main section').eq(idx)

        let sectionDistance = section.offset().top - (114)

        $('html, body').animate({
            scrollTop: sectionDistance
        })
    })

})