// Crea un elemento div con class 'blu'. Usa JavaScript per controllare al click se il div ha la classe 'blu' usando classList.includes(). Poi usa classList.add() per aggiungere una classe 'rosso' e classList.remove() per rimuovere la classe 'blu'.

window.addEventListener('load', ()=>{
    const testDiv = document.getElementById('test');
    testDiv.addEventListener('click', function(){
        let cl = this.classList;
        console.log(cl)
        if(cl.contains('blu')){
            cl.remove('blu')
            cl.add('rosso')
        }
        console.log(cl)
    })
})

