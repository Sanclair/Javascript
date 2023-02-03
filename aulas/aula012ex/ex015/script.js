function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERROR] Verifique os dados digitados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src','bebeh.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','jovemh.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','homemh.png')
            } else {
                //idoso
                img.setAttribute('src','idosoh.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src','bebem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','jovemm.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','mulherm.png')
            } else {
                //idoso
                img.setAttribute('src','idosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}