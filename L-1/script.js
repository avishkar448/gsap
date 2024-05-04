// gsap.to(".box",{
//     x:900,
//     y:300,
//     duration:2,
//     delay: 1,
//     backgroundColor:"red",
//     rotate: 360,
//     scale: 0.5
// })

// gsap.from(".box",{
//     x:900,
//     y:300,
//     duration:2,
//     delay: 1,
//     backgroundColor:"red",
//     rotate: 360,
//     scale: 0.5
// })

// gsap.to("h1",{
//     x:600,
//     color:"orange",
//     duration:2,
//     delay:1
// })

// gsap.to("h2",{
//     x:600,
//     color:"violet",
//     duration:2,
//     delay:3
// })

// gsap.to("h3",{
//     x:600,
//     color:"pink",
//     duration:2,
//     delay:5
// })

// gsap.to("h1",{
//     x:600,
//     duration:1,
//     delay:0.5,
//     // stagger:1,
//     repeat:-1,
//     yoyo:true
// })

// gsap.to("h1",{
//     x:400,
//     color:"green",
//     duration:2,
//     delay:1
// })

var t1=gsap.timeline();

t1.to("h1",{
    x:600,
    duration:1
})

t1.to("h2",{
    x:700,
    duration:1

})

t1.to("h3",{
    x:800,
    duration:1

})