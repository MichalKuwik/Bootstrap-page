//smoth-scroll effect

$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate(
        {
        scrollTop: $($(this).attr('href')).offset().top,
        },
        800,
        'linear'
    )
        })

//DOM buttons,modifed from nodeList to array with rest operator
const btns = [...document.querySelectorAll('.btn')];


// function add alert onClick event on buttons
btns.forEach(btn => btn.addEventListener('click',function(e){
    e.preventDefault();
    alert('Brak przekierowania, wersja testowa!');
}))

