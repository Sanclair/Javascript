function enviar() {
    var pais = document.querySelector('input#itxtpais')
    var res = document.querySelector('div#res')
    var digt = (pais.value)
    if (digt == 'Brasil' || digt == 'brasil') {
    res.innerHTML = ('Que legal, você é <strong>brasileiro!</strong>')
    res.style.background = 'green'
    res.style.color = 'darkblue'
    } else {
        res.innerHTML = ('Opa, parece que você é <strong>estrangeiro!</strong>')
        res.style.background = 'darkred'
        res.style.color = 'white'

    }
}