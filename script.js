const header = document.querySelector("#header")
const btnMobile = document.querySelector('#btn-mobile')
const elementoMenu = [...document.querySelectorAll('.link-menu')]
const form = document.querySelector('form')
const telefoneInput = document.getElementById('telefone');



window.addEventListener('scroll', ()=> {
    const alturaAtual = window.scrollY;
    if(alturaAtual > 100){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
});

const toggleMenu=(event)=>{
    if(event.type === 'touchstart'){
        event.preventDefault()
    }

    const nav = document.querySelector("#nav")
    nav.classList.toggle('active')
}

btnMobile.addEventListener("click",(event)=>{
    toggleMenu(event)
})

btnMobile.addEventListener("touchstart",(event)=>{
    toggleMenu(event)
})

const scrollDeAcordoComODispositivo =(targetElement)=>{
    if (window.innerWidth <= 600) {
        setTimeout(() => {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }, 800);
    } else {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }           
}

elementoMenu.forEach(element => {
    element.addEventListener("click", (event) => {
        toggleMenu(event);

        const targetId = element.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            event.preventDefault();
            scrollDeAcordoComODispositivo(targetElement)
        }
    });
});

form.addEventListener('submit',(event)=>{
    event.preventDefault()
})

if (telefoneInput) {
        telefoneInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }