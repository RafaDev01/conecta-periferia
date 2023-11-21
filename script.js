setTimeout(()=>{
    alert("Estou finalizando a versão de celular, a vercel de computador ainda não está pronta")
},2000)


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

elementoMenu.forEach(element => {
    element.addEventListener("click", (event) => {
        toggleMenu(event);

        const targetId = element.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            event.preventDefault();

            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }, 800);
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