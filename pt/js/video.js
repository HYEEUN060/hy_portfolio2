const items = document.querySelectorAll('.swiper-slide')
const popup = document.querySelector('.popup')
const close = document.querySelector('button')

items.forEach((el, index)=>{
    el.addEventListener('mouseenter', function(){
        el.querySelector('video').play()
    })
    el.addEventListener('mouseleave',function(){
        el.querySelector('video').pause()
        el.querySelector('video').currentTime=0
    })
    el.addEventListener('click',function(){
        // let title = el.querySelector('.silde-txt').innerText
        let videosrc = el.querySelector('video').getAttribute('src')

        // popup.querySelector('.silde-txt').innerText = title
        popup.querySelector('video').setAttribute('src', videosrc)
        popup.classList.add('on')
    })
})

close.addEventListener('click',function(){
    popup.classList.remove('on')
    popup.querySelector.apply('video').pause()
})

// video.forEach((el, index)=>{
//     el.addEventListener('mouseenter', function(){
//         el.querySelector('video').play()
//     })
//     el.addEventListener('mouseleave',function(){
//         el.querySelector('video').pause()
//         el.querySelector('video').currentTime=0
//     })
// })