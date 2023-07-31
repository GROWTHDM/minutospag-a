const hora = document.getElementById('hora-1');
const hora2 = document.getElementById('hora-2');
const hora3 = document.getElementById('hora-3');
const hora4 = document.getElementById('hora-4');
const hora5 = document.getElementById('hora-5');
const hora6 = document.getElementById('hora-6');
const hora7 = document.getElementById('hora-7');
const hora8 = document.getElementById('hora-8');
const hora9 = document.getElementById('hora-9');
const hora10 = document.getElementById('hora-10');
const hora11 = document.getElementById('hora-11');
const hora12 = document.getElementById('hora-12');
const hora13 = document.getElementById('hora-13');
const hora14 = document.getElementById('hora-14');
const hora15 = document.getElementById('hora-15');
const hora16 = document.getElementById('hora-16');
let divSumir = document.getElementById('divSumir');



const horas = [
    hora,
    hora2,
    hora3,
    hora4,
    hora5,
    hora6,
    hora7,
    hora8,
    hora9,
    hora10,
    hora11,
    hora12,
    hora13,
    hora14,
    hora15,
    hora16,
];

let horasAleatorias = horas
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);


function getRandomTime(min, max){
    let hora = (Math.random() * (max - min + 1) + min);
    let result = (Math.floor(hora));
    return result;
}


function updateTime(min, max) {
    let time = dayjs();
    let newHora = time.add(getRandomTime(0, 59), 'm');
    return (newHora.format("HH:mm"));
}


let waiting = document.getElementById('waiting');

waiting.addEventListener('click', (e) => {
    divSumir.style.display = 'none';

    setTimeout(() => {
        waiting.innerText = 'ANALISANDO O JOGO...';

    }, 1000)

    setTimeout(() => {
        waiting.innerText = 'MINUTOS PAGANTES';
        waiting.style.animationPlayState = 'paused';
        }, 6000)

    setTimeout(() =>{
        if (divSumir.style.display === 'none'){
            divSumir.style.display = 'grid';
        }
    }, 6000);
    waiting.disabled = true;
    e.preventDefault();
    horasAleatorias.forEach((hora) => hora.innerText = updateTime());
})