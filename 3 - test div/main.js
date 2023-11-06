// Crea una semplice pagina HTML con un elemento div. Usa JavaScript per cambiare l'innerHTML e l'innerText del div.

window.addEventListener('load', ()=>{
    let testDiv = document.getElementById('test');
    testDiv.innerHTML+= `<p>this paragraph was added via JS</p>`;
    testDiv.innerText+= `
    This text was added via JS`;
})