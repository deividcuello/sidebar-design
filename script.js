
const submenu = document.querySelectorAll('.submenu_link'),
menuBtn = document.querySelector('.fa-bars'),
main = document.querySelector('main'),
header = document.querySelector('header')

submenu.forEach(element => {      
    element.addEventListener('click', () => {
        let absolute = document.querySelector('header .menu .absolute')
        if(absolute == element.nextElementSibling){
            absolute.classList.remove('absolute')
            return
        }
        if(submenu[0].nextElementSibling.classList.contains('absolute') || submenu[1].nextElementSibling.classList.contains('absolute')){
            absolute.classList.remove('absolute')
        }
        
        element.nextElementSibling.classList.toggle('absolute')
        if(menuBtn.classList.contains('on')){
            absolute = document.querySelector('header .menu .absolute')
            absolute.style.position = 'static'
            document.querySelectorAll('header .submenu').forEach(element => {
                element.style.paddingLeft = '3.4rem'
            });
        } else{
            absolute = document.querySelector('header .menu .absolute')
            absolute.style.position = 'absolute'
            document.querySelectorAll('header .submenu').forEach(element => {
                element.style.paddingLeft = '0'
            });
        }

    })

});

menuBtn.addEventListener('click', () => {
    const absolute = document.querySelector('header .menu .absolute')
    main.classList.toggle('show')
    header.classList.toggle('close')
    menuBtn.classList.toggle('on')
    if(absolute != null){
        absolute.classList.remove('absolute')
    }
    if(!menuBtn.classList.contains('on')){
        document.querySelectorAll('.fa-angle-down').forEach(element => {
            element.style.display = 'none'
        });
    } else{
        document.querySelectorAll('.fa-angle-down').forEach(element => {
            element.style.display = 'inline-block'
        });
    }
})