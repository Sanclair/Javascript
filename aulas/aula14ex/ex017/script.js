function tabuada() {
var num = document.querySelector('input#txtn')
var tab = document.querySelector('select#seltab')

if (num.value.length == 0) {
    window.alert('Por favor, digite um numero!')
} else {
    var n = Number(txtn.value)
}
    tab.innerHTML = ''
for (var c = 1; c <= 10; c++) {
    var item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    item.value = `tab${c}`
    tab.appendChild(item)
}

}