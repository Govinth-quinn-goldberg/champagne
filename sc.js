
let con=document.querySelector(".cont");
let cont=document.querySelector(".cont1");
let cost=document.querySelector(".cont2");

gsap.to(".line",{
    width:"100%",
    duration:3,
    ease:Circ.out,
    opacity:1
})

gsap.to(".navba",{
    opacity:1,
    duration:2,
    stagger:0.5
})

gsap.to(".heading",{
    duration:2,
    opacity:0.5,
})

gsap.to([con,cont,cost],{
    opacity:1,
    duration:2.5,
    stagger:1,
})

gsap.to(".hl",{
    width:"100%",
    duration:3,
    yolo:true,
    repeat:-1,
})
gsap.to(".endl",{
    opacity:1,
    duration:4,

})
