function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.jpg'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = 'orange'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = 'darkblue'
    }
}