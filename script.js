function loading() {
    var t1 = gsap.timeline()

    t1.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out",
    })

    t1.from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out",
    }, "anim")

    t1.to("#loader h1", {
        delay: 0.6,
        duration: 0.7,
        color: "black"
    }, "anim")

    t1.to("#loader", {
        opacity: 0
    })
    t1.to("#loader", {
        display: "none"
    })
}
loading()

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})` 
    })
})