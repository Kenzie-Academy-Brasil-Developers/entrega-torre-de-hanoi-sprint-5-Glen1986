const content = document.querySelector('.conteudo');

// TOWERS
const tower1 = document.createElement('div');
tower1.id = 'stack1';
tower1.classList.add('wrapper', 'tower');
content.appendChild(tower1)

const tower2 = document.createElement('div');
tower2.id = 'stack2';
tower2.classList.add('wrapper', 'tower');
content.appendChild(tower2)

const tower3 = document.createElement('div');
tower3.id = 'stack3';
tower3.classList.add('wrapper', 'tower');
content.appendChild(tower3)

//DISCOS
const disc1 = document.createElement('div');
disc1.id = 'box-1';
disc1.classList.add('box', 'box1');
tower1.appendChild(disc1);

const disc2 = document.createElement('div');
disc2.id = 'box-2';
disc2.classList.add('box', 'box2');
tower1.appendChild(disc2);

const disc3 = document.createElement('div');
disc3.id = 'box-3';
disc3.classList.add('box', 'box3');
tower1.appendChild(disc3);

const disc4 = document.createElement('div');
disc4.id = 'box-4';
disc4.classList.add('box', 'box4');
tower1.appendChild(disc4);

const disc5 = document.createElement('div');
disc5.id = 'box-5';
disc5.classList.add('box', 'box5');
tower1.appendChild(disc5);


//GAME
const towers = document.querySelectorAll('.tower');

let isClick = false;
let lastElm = undefined;
let storedElm = undefined;
let countMoves = 0;
let towersInOrigin = 0;
let towersInDestiny = 0;
let lastTower = document.getElementById('stack3')

const game = (e) => {
    const tow = e.currentTarget;

    if (isClick) {
        isClick = false;
        console.log('Clique 2')
        storedElm = tow.lastElementChild;
        tow.appendChild(lastElm);
        countMoves++;
        const moves = document.getElementById('moves');
        moves.innerText = "Movimentos: " + countMoves;
        towersInDestiny = tow.childElementCount
        if (storedElm != null && lastElm.clientWidth > storedElm.clientWidth) {
            alert ('Movimento errado! Nenhuma peça maior pode ser colocada sobre uma menor. Clique em OK para começar de novo.')

            location.reload();
        }
    } else {
        if (tow.childElementCount == 0) {
            alert('Você não pode clicar em um lugar vazio!!' + '\n' + 'Clique em OK para começar de novo.')
            location.reload();
        }else {
            isClick = true;
            console.log('Clique 1')
            lastElm = tow.lastElementChild;
            towersInOrigin = tow.childElementCount;
        }


        if(towersInDestiny == 5) {
            alert (`Você venceu!! acertou com ${countMoves} movimentos`)
            location.reload();
        } 
    }

}
towers.forEach(tower => tower.addEventListener('click', game));

