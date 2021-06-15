const primeiraImagem = document.querySelector('#primeiraImagem');
const segundaImagem = document.querySelector('#segundaImagem');
const terceiraImagem = document.querySelector('#terceiraImagem');
const quartaImagem = document.querySelector('#quartaImagem');

const primeiroNome = document.querySelector('#primeiroNome');
const segundoNome = document.querySelector('#segundoNome');
const terceiroNome = document.querySelector('#terceiroNome');
const quartoNome = document.querySelector('#quartoNome');

const numeroMaximodePersonagens = 671;

gerandoNumeroAleatorio = () => {
    return Math.floor(Math.random() * numeroMaximodePersonagens);
}

let id = gerandoNumeroAleatorio();

fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        primeiraImagem.src = data.image;
        primeiroNome.innerHTML = data.name; 
    });


id = gerandoNumeroAleatorio();

fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        segundaImagem.src = data.image;
        segundoNome.innerHTML = data.name;
    });

id = gerandoNumeroAleatorio();

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            terceiraImagem.src = data.image;
            terceiroNome.innerHTML = data.name;   
        });

id = gerandoNumeroAleatorio();

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                quartaImagem.src = data.image;
                quartoNome.innerHTML = data.name;                   
            });
        
    