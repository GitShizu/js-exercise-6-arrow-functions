// Crea un elemento div. Aggiungi un evento onmouseover che cambia il colore del div. Aggiungi un evento onmouseout che cambia il colore del div indietro. Aggiungi un evento click che stampa un messaggio in console.

window.addEventListener('load', ()=>{
    const testDiv = document.getElementById('test');
    testDiv.addEventListener('mouseover', function(){
        this.classList.add('change-bcc');
    })
    testDiv.addEventListener('mouseout', function(){
        this.classList.remove('change-bcc');
    })

    testDiv.addEventListener('click',()=>{
        console.log('Ciao')
    })
})

