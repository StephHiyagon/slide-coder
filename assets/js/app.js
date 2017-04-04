var envia=document.getElementById('js_envia');
//falta un arreglo que almacene los post y su respectiva función

//falta funcion que valide que no se incluye espacios vacios

function enviando(event){
    var imprime=document.getElementById('js_imprimir');
    var parrafo1=document.createElement('p');
    var parrafo2=document.createElement('p');
    var titulo=document.getElementById('js_title').value;
    var textarea=document.getElementById('js_post').value;
    var titulo_text=document.createElement("h3");
    var title_text=document.createTextNode(titulo);
    var post_cont=document.createElement("div");
    var post_text=document.createTextNode(textarea);
    parrafo1.id="css_title";
    parrafo2.id="css_post";
    titulo_text.appendChild(title_text);
    post_cont.appendChild(post_text);
    parrafo1.appendChild(titulo_text);
    parrafo2.appendChild(post_text);
    imprime.appendChild(parrafo1);
    imprime.appendChild(parrafo2);
  }

envia.addEventListener('click', enviando);
