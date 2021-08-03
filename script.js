const content = document.querySelector('.conteudo');

// TOWERS
const tower1 = document.createElement('div');
tower1.id = 'stack1';
tower1.classList.add('wrapper', 'tower');
content.appendChild(tower1)
tower1.addEventListener('click', () => game('stack1'));
tower1.setAttribute('for', 'box1')


const tower2 = document.createElement('div');
tower2.id = 'stack2';
tower2.classList.add('wrapper', 'tower');
content.appendChild(tower2)
tower2.addEventListener('click', () => game('stack2'));
tower2.setAttribute('for', 'box2')

const tower3 = document.createElement('div');
tower3.id = 'stack3';
tower3.classList.add('wrapper', 'tower');
content.appendChild(tower3)
tower3.addEventListener('click', () => game('stack3'));
tower3.setAttribute('for', 'box3')


//DISCOS
const disc1 = document.createElement('div');
disc1.id = 'box-1';
disc1.tagname = '1'
disc1.classList.add('box', 'box1');
tower1.appendChild(disc1);

const disc2 = document.createElement('div');
disc2.id = 'box-2';
disc2.tagname = '2'
disc2.classList.add('box', 'box2');
tower1.appendChild(disc2);

const disc3 = document.createElement('div');
disc3.id = 'box-3';
disc3.tagname = '3'
disc3.classList.add('box', 'box3');
tower1.appendChild(disc3);

const disc4 = document.createElement('div');
disc4.id = 'box-4';
disc4.tagname = '4'
disc4.classList.add('box', 'box4');
tower1.appendChild(disc4);

const disc5 = document.createElement('div');
disc5.id = 'box-5';
disc5.tagname = '5'
disc5.classList.add('box', 'box5');
tower1.appendChild(disc5);


/* game */

let torreOrigem;
let torreDestino;
let qntTorreOrigem;
let qntTorreDestino;
let lastElementOrigin;
let lastElementDestino;


function game(valor) {
    let ids = document.getElementById(valor);
    let lastTower = document.getElementById('stack3')

    //Selecionando Clique
    if(torreOrigem == undefined){
        torreOrigem = ids; // A torre clicada
        qntTorreOrigem = torreOrigem.childElementCount; //A quantidade de discos
        lastElementOrigin = torreOrigem.lastElementChild //O Ultimo disco
        ids.style.border = "2px solid black";
    }else{
        torreDestino = ids; //A torre clicada
        lastElementDestino = torreDestino.lastElementChild; // o ultimo disco
        ids.style.border = "2px solid black";
    }

    if(lastElementDestino === null || lastElementDestino.clientWidth > lastElementOrigin.clientWidth) {
        // movendo
        torreDestino.appendChild(lastElementOrigin);

        //resetando elementos
        torreOrigem = undefined;
        torreDestino = undefined;
        tower1.style.border = "1px dotted rgb(63, 104, 138)";
        tower2.style.border = "1px dotted rgb(63, 104, 138)";
        tower3.style.border = "1px dotted rgb(63, 104, 138)";

        if(lastTower.childElementCount == 5){
            alert('Você Venceu!')
        }

    }else{
        alert('Selecione um local válido!')
        torreOrigem = undefined;
        torreDestino = undefined;
        lastElementDestino = null
        tower1.style.border = "1px dotted rgb(63, 104, 138)";
        tower2.style.border = "1px dotted rgb(63, 104, 138)";
        tower3.style.border = "1px dotted rgb(63, 104, 138)";
    }
}






















/*let primeiroClique;
let segundoClique;

function verificarIdClique(str){
    game(str)
}

function game(str){
    let selecao = document.getElementById(str);

    if(primeiroClique == undefined){
        primeiroClique = str; 
        selecao.style.border = "2px solid black"
    }else{
        segundoClique = str;
        selecao.style.border = "2px solid black"
    }
    let priClick = document.getElementById(primeiroClique);
    let secClick = document.getElementById(segundoClique);
    let largura = priClick.lastChild.clientWidth;
    let largurasec = secClick.lastChild.clientWidth;
    console.log(largura, largurasec);

    if(segundoClique !== null){
        let pai = document.getElementById(primeiroClique)
        let ultimoFilho = pai.lastChild;
       

        //verificação se ele esta clicando em um campo com elementos
        if(ultimoFilho == null){
            primeiroClique = undefined
            segundoClique = undefined
            tower1.style.border = "1px dotted rgb(63, 104, 138)"
            tower2.style.border = "1px dotted rgb(63, 104, 138)"
            tower3.style.border = "1px dotted rgb(63, 104, 138)"
            alert('você deve selecionar um campo com elementos!')
        }
            //fazendo movimentação
        twoClick = document.getElementById(segundoClique)
        twoClick.appendChild(ultimoFilho)
       
        
        
        
        //resetando as bordas e variaveis para o próximo movimento
        primeiroClique = undefined
        segundoClique = undefined
        tower1.style.border = "1px dotted rgb(63, 104, 138)"
        tower2.style.border = "1px dotted rgb(63, 104, 138)"
        tower3.style.border = "1px dotted rgb(63, 104, 138)"
    }
}*/
















/*function verificar(str){
    ultimoFilho(str)
};

function largura(x){
    let select = getElementById(x);
    
}

function ultimoFilho(x){
    let pai = document.getElementById(x)
    let ultimoFilho = pai.lastChild;
    mover(ultimoFilho)
    //console.log(ultimoFilho)
}

function mover(mov){
    console.log(mov)
}*/

