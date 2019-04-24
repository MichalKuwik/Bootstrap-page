//nav animation
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration:2000,
    origin: 'bottom',
    distance: '50px'
})
//first left photo anim
sr.reveal('.showcase-left', {
    duration:2000,
    origin: 'top',
    distance: '300px'
})

//showcase-right text on the right in first section
sr.reveal('.showcase-right', {
    duration:2000,
    origin: 'right',
    distance: '300px'
})

//first button on the right
sr.reveal('.showcase-btn', {
    duration:2000,
    delay: 2000,
    origin: 'bottom',
    distance: '30px'
})
//div in section with coment for owner
sr.reveal('#story div', {
    duration:2000,
    origin: 'bottom',
    distance: '60px'
})

//.info-left
sr.reveal('.info-left', {
    duration:2000,
    origin: 'left',
    distance: '60px',
    viewFactor: 0.2
})
// .info-right
sr.reveal('.info-right', {
    duration:2000,
    origin: 'right',
    distance: '60px',
    viewFactor: 0.2
})
