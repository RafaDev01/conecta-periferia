const header = document.querySelector("#header")
const btnMobile = document.querySelector('#btn-mobile')
const elementoMenu = [...document.querySelectorAll('.link-menu')]
const form = document.querySelector('form')
const formNomeInput = document.querySelector('input#nome');
const formEmailInput = document.querySelector('input#email');
const formTelefoneInput = document.querySelector('input#telefone');
const formMensagemInput = document.querySelector('textarea#mensagem');
const errorForm = [...document.querySelectorAll(".error")]
const formLoading = document.querySelector(".form-loading")
const formEnviado = document.querySelector(".form-enviado")
const btnFecharEnvioForm = document.querySelector(".fechar-janela")

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

function contemNumeros(str) {
    return /\d/.test(str);
}

const checarFormInputNome = () => {
    const valorDoInput = formNomeInput.value.trim();
    const contemNumero = contemNumeros(valorDoInput)

    if (valorDoInput !== "") {
        if(contemNumero){
            errorForm[0].style.display = "block";    
            return 1
        }else{
            errorForm[0].style.display = "none";  
            return 0
        }
    } else {
        errorForm[0].style.display = "block";  
        return 1  
    }
};

const checarFormInputEmail = () =>{
    const email = formEmailInput.value.trim()

    // Expressão regular para validar o formato do email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(regexEmail.test(email)) {
        errorForm[2].style.display = "none";  
        return 0
    } else {
        errorForm[2].style.display = "block"; 
        return 1
    }
}

const checarFormInputTelefone = () =>{
    const telefone = formTelefoneInput.value.trim();

    const regexLetra = /[a-zA-Z]/;

    if (regexLetra.test(telefone)) {
        return 1
    } else {
        if(telefone.length !== 11){
            errorForm[3].style.display = "block"; 
            return 1
        }else{
            errorForm[3].style.display = "none"; 
            return 0
        }
    }
}

const checarFormInputMensagem = () =>{
    const mensagem = formMensagemInput.value;

    // Divide a string em um array de palavras
    const palavras = mensagem.split(/\s+/);

    // Verifica o comprimento de cada palavra
    for (let i = 0; i < palavras.length; i++) {
      if (palavras[i].length > 40) {
        errorForm[4].style.display = "block";  
        return 1
      }else{
        errorForm[4].style.display = "none";  
        return 0
      }
    }
}

const fecharJanelaEnvioForm=()=>{
    btnFecharEnvioForm.addEventListener('click', ()=>{
        formEnviado.classList.remove("active")
    })
}

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let errorsForm = 0
    errorsForm += checarFormInputNome()
    errorsForm += checarFormInputEmail()
    errorsForm += checarFormInputTelefone()
    errorsForm += checarFormInputMensagem()
 
    if(errorsForm > 0){
        return
    }else{
        formLoading.classList.add("active")
        setTimeout(()=>{
            formLoading.classList.remove("active")
            formEnviado.classList.add("active")
            fecharJanelaEnvioForm();
        },3500)
    }
})
