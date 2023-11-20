/*
setTimeout(()=>{
    alert("Testando se o script ta funcionando...")
    alert("Comecarei pela versão mobile ok, precisará ser acessado pelo celular para melhor experiência até eu tirar esse alerta.")
},2000)
*/

const btnMobile = document.querySelector('#btn-mobile')

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