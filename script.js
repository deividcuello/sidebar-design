
const submenu = document.querySelectorAll('.submenu_link'),
menuBtn = document.querySelector('.fa-bars'),
main = document.querySelector('main'),
header = document.querySelector('header')

submenu.forEach(element => {      
    element.addEventListener('click', () => {
        if(document.querySelector('header .menu .absolute') == element.nextElementSibling){
            document.querySelector('header .menu .absolute').classList.remove('absolute')
            return
        }
        if(submenu[0].nextElementSibling.classList.contains('absolute') || submenu[1].nextElementSibling.classList.contains('absolute')){
            document.querySelector('header .menu .absolute').classList.remove('absolute')
        }
        
        element.nextElementSibling.classList.toggle('absolute')
        if(menuBtn.classList.contains('on')){
            document.querySelector('header .menu .absolute').style.position = 'static'
            document.querySelector('header .submenu').style.paddingLeft = '3.4rem'
        } else{
            document.querySelector('header .menu .absolute').style.position = 'absolute'
            document.querySelector('header .submenu').style.padding = 0
        }

    })

});

menuBtn.addEventListener('click', () => {
    main.classList.toggle('show')
    header.classList.toggle('close')
    menuBtn.classList.toggle('on')
    if(document.querySelector('header .menu .absolute') != null){
        document.querySelector('header .menu .absolute').classList.remove('absolute')
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