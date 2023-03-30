gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollTrigger.normalizeScroll(true)

if (ScrollTrigger.isTouch !== 1){
    let smoother = ScrollSmoother.create({
        wrapper: '.page',
        content: '.content',
        smooth: 1.5,
        effects: true,
    })
}


/* SCROOLTRIGGER */
let tl = gsap.timeline({duration: 0});
tl.fromTo('.hero-left .hero-left__img', {x: -100, opacity: 0}, {
    opacity: 1, x: 0,
   ScrollTrigger: {
    trigger: '.hero-left__img',
    scrub: true,
   }
}, '+=0.2')

tl.fromTo('.hero-right .hero-right-wrapper .hero-right-title', {x: 100, opacity: 0}, {
    opacity: 1, x: 0,
   ScrollTrigger: {
    trigger: '.hero-right-title',
    scrub: true,
   }
}, '+=0.2')
tl.fromTo('.hero-right .hero-right-wrapper .hero-right-text', {x: 100, opacity: 0}, {
    opacity: 1, x: 0,
   ScrollTrigger: {
    trigger: '.hero-right-text',
    scrub: true,
   }
}, '+=0.15')
tl.fromTo('.hero-right .hero-right-inner .hero-right-inner-search', {x: 100, opacity: 0}, {
    opacity: 1, x: 0,
   ScrollTrigger: {
    trigger: '.hero-right-inner-search',
    scrub: true,
   }
}, '+=0.1')
tl.fromTo('.hero-right .hero-right-recognition', {x: 100, opacity: 0}, {
    opacity: 1, x: 0,
   ScrollTrigger: {
    trigger: '.hero-right-recognition',
    scrub: true,
   }
})


let tween = gsap.fromTo(".second", {y: -100, opacity: 0}, {opacity: 1, y: 0}),
    st = ScrollTrigger.create({
        trigger: ".second",
        start: "top center",
        end: "+=500",
        ease: "power1.out",
        animation: tween
      });

let serv_img = gsap.fromTo(".services-left .services-left-img", {x: -100, opacity: 0}, {opacity: 1, x: 0}),
    sv_img = ScrollTrigger.create({
        trigger: ".services-left-img",
        start: "top center",
        end: "+=500",
        ease: "power1.out",
        animation: serv_img 
      });

      
let serv_title = gsap.fromTo(".services-right .section .section-inner.section_services .section-inner-title", {x: 50, opacity: 0}, {opacity: 1, x: 0}),
    sv_t = ScrollTrigger.create({
        trigger: ".section-inner.section_services .section-inner-title",
        start: "top center",
        end: "+=500",
        ease: "power1.out",
        animation: serv_title
    });
let serv_text = gsap.fromTo(".section-inner.section_services .section-inner-text", {x: 50, opacity: 0}, {opacity: 1, x: 0}),
    sv_text = ScrollTrigger.create({
        trigger: ".section-inner-text",
        start: "top center",
        end: "+=520",
        ease: "power1.out",
        animation: serv_text
    });
    
    
let serv_section = gsap.fromTo(".services-right", {x: 100, opacity: 0}, {opacity: 1, x: 0}),
    sv_section = ScrollTrigger.create({
        trigger: ".services-right",
        start: "top center",
        end: "+=400",
        ease: "power1.out",
        animation: serv_section
    }); 

/* BENEFITS */
let serv = gsap.fromTo(".benefits-right .benefits-right-img", {x: 100, opacity: 0}, {opacity: 1, x: 0}),
    st1 = ScrollTrigger.create({
        trigger: ".benefits-right-img",
        start: "top center",
        end: "+=500",
        ease: "power1.out",
        animation: serv
      });

      
let serv2 = gsap.fromTo(".section-inner.benefits_section .section-inner-title", {x: 50, opacity: 0}, {opacity: 1, x: 0}),
    str2 = ScrollTrigger.create({
        trigger: ".section-inner.benefits_section .section-inner-title",
        start: "top center",
        end: "+=500",
        ease: "power1.out",
        animation: serv2
    });
let serv4 = gsap.fromTo(".section-inner.benefits_section .section-inner-text", {x: 50, opacity: 0}, {opacity: 1, x: 0}),
    str4 = ScrollTrigger.create({
        trigger: ".section-inner-text",
        start: "top center",
        end: "+=520",
        ease: "power1.out",
        animation: serv4
    });
    
    
let serv3 = gsap.fromTo(".benefits-left", {x: -100, opacity: 0}, {opacity: 1, x: 0}),
    str3 = ScrollTrigger.create({
        trigger: ".benefits-left",
        start: "top center",
        end: "+=400",
        ease: "power1.out",
        animation: serv3
    }); 

/* NEW */
let new_sec = gsap.fromTo(".section-inner.new_section", {y: 100, opacity: 0}, {opacity: 1, y: 0}),
    new_Str = ScrollTrigger.create({
        trigger: ".section-inner.new_section",
        start: "top center",
        end: "+=600",
        ease: "power1.out",
        animation: new_sec
      });

let new_wrapper = gsap.fromTo(".new-wrapper", {y: 100, opacity: 0}, {opacity: 1, y: 0}),
    new_wp = ScrollTrigger.create({
        trigger: ".new-wrapper",
        start: "top center",
        end: "+=600",
        ease: "power1.out",
        animation: new_wrapper
      });
/* FAQ */
let faq_section = gsap.fromTo(".faq .section.section-faq", {y: 100, opacity: 0}, {opacity: 1, y: 0}),
    faq_title = ScrollTrigger.create({
        trigger: ".section.section-faq",
        start: "top center",
        end: "-=200",
        ease: "power1.out",
        animation: faq_section
      });

let faq_item = gsap.utils.toArray(".faq-wrapper .faq-wrapper__item");
    faq_item.forEach(item => {
        gsap.fromTo(item, {y: 100, opacity: 0}, {opacity: 1, y: 0,
        scrollTrigger: {
            trigger: item,
            start: "top center",
            end: "-=200",
            ease: "power1.out",
            animation: faq_section
        }
    })
})

/* FOOTER */
let social_first = gsap.fromTo(".footer", {y: 100, opacity: 0}, {opacity: 1, y: 0}),
    social = ScrollTrigger.create({
        trigger: ".footer",
        start: "top center",
        end: "520",
        ease: "power1.out",
        animation: social_first
    });