var envia=document.getElementById('js_envia');
//falta un arreglo que almacene los post y su respectiva función

//falta funcion que valide que no se incluye espacios vacios

function enviando(event){
    var imprime=document.getElementById('js_imprimir');
    var parrafo=document.createElement('p');
    var titulo=document.getElementById('js_title').value;
    var textarea=document.getElementById('js_post').value;
    var titulo_text=document.createElement("h3");
    var title_text=document.createTextNode(titulo);
    var post_cont=document.createElement("textarea");
    var post_text=document.createTextNode(textarea);
    titulo_text.appendChild(title_text);
    post_cont.appendChild(post_text);
    parrafo.appendChild(titulo_text);
    parrafo.appendChild(post_text);
    imprime.appendChild(parrafo);
  }

envia.addEventListener('click', enviando);
