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
let contador = 0;


function game(valor) {
    let ids = document.getElementById(valor);
    let lastTower = document.getElementById('stack3')
    let count = document.getElementById('movimentos')

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
        qntTorreOrigem = undefined;
        qntTorreDestino = undefined;
        lastElementOrigin = undefined;
        lastElementDestino = undefined;

        tower1.style.border = "1px dotted rgb(63, 104, 138)";
        tower2.style.border = "1px dotted rgb(63, 104, 138)";
        tower3.style.border = "1px dotted rgb(63, 104, 138)";

        if(lastTower.childElementCount == 5){
            alert('Você Venceu!');
            window.location.reload();
        }
        contador +=1
        count.innerText = contador
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