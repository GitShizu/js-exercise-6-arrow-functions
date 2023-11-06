// Crea una lista non ordinata con tre elementi di lista. Usa JavaScript per aggiungere un nuovo elemento di lista alla fine della lista usando appendChild. Poi usa insertBefore per aggiungere un elemento di lista all'inizio della lista.

window.addEventListener('load', ()=>{
   let testUl= document.getElementById('testUl');
   liBottom = document.createElement('li');
   liBottom.innerText = 'Bottom'
   testUl.append(liBottom);
   liTop = document.createElement('li');
   liTop.innerText = 'Top' 
   let first = document.getElementById('first')
   testUl.insertBefore(liTop, first);
})