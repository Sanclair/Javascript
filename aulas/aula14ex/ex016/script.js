function contar() {
    var ini = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var pas = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if (ini.value.lenght == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0) {
            window.alert ('Passo inválido, considerando passo 1')
            p = 1
        }
    if (i < f) {
        //contagem crescente
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f449}`
        }
        
    } else {
        //Contagem Decrescente
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1f449}`
        }   
    }
    }
        res.innerHTML += `\u{1f3c1}`
}