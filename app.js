//Movimento animação componentes
const card = document.querySelector('.card');
const container =  document.querySelector('.container');

//Itens
const title = document.querySelector('.title');
const pokemon = document.querySelector('.pokemon img');
const description = document.querySelector('.info h3');
const type = document.querySelector('.type');


//Movimento animação evento
container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animação ligada
container.addEventListener('mouseenter',e=>{
    card.style.transition = 'none';
    
    //3D popout
    title.style.transform = 'translateZ(150px)';
    pokemon.style.transform = 'translateZ(200px)';
    description.style.transform = 'translateZ(150px)';
    type.style.transform = 'translateZ(150px)';
})

//Animação desligada
container.addEventListener('mouseleave',e=>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //3D popback
    title.style.transform = "translateZ(0px)";
    pokemon.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    type.style.transform = 'translateZ(0px)';

})