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


