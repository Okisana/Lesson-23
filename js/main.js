function changeColor(){
    const h2Element = document.getElementById('important-h2-element');
    if(h2Element.style.color === 'red'){
        h2Element.style.color = 'black';
    h2Element.style.fontSize = '24px';
    h2Element.innerHTML = 'some h2 element';
    } else {
        h2Element.style.color = 'red';
    h2Element.style.fontSize = '40px';
    h2Element.innerHTML = 'Hello world';
    }
    
}

