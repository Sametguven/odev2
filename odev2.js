let ekle = document.getElementById('ekle')
let listbox = document.getElementById('listBox')
let input = document.getElementById('input')
let sil = document.getElementById('sil')

ekle.addEventListener('click', function () {
    let option = document.createElement('option')
    listbox.appendChild(option)
    option.innerHTML = input.value
    input.value = ""
    
sil.addEventListener('click', function () {
    listbox.removeChild(option)
    

})
     
})
