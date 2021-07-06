function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function numDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < dezDaysList.length; index +=1){
    const days = dezDaysList[index];
    const dayListItem = document.createElement('li')
    dayListItem.innerText = days;
    dayListItem.className = 'day';
    if (days === 24 | days === 25 | days === 26){
      dayListItem.className += ' holiday';
    };
    if (days === 4 | days === 11 | days === 18 | days === 25){
      dayListItem.className += ' friday';
    }
    document.querySelector('#days').appendChild(dayListItem);
  }
}

numDays();

// exercicio 2

function feriados(){

  let btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerText = 'Feriados';
  document.querySelector('.buttons-container').appendChild(btnHoliday)

}

feriados();

// exercicio 3

document.getElementById('btn-holiday').addEventListener('click', function (){
  let color = 'magenta';
  let holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1){
    if ( holidays[index].style.backgroundColor === color){
    holidays[index].style.backgroundColor = '';
    }else  holidays[index].style.backgroundColor = color;
  }
}
)

// exercicio 4

function sexta(){

  let btnSexta = document.createElement('button');
  btnSexta.id = 'btn-friday';
  btnSexta.innerText = 'Sexta-Feira';
  document.querySelector('.buttons-container').appendChild(btnSexta)
}
sexta ();

// exercicio 5

let fridayMemo = [];
document.getElementById('btn-friday').addEventListener('click', function (){
  let fridays = document.querySelectorAll('.friday');
  
  for (let index = 0; index < fridays.length; index += 1){
    if ( fridays[index].innerText === 'Sextou!'){
      fridays[index].innerText = fridayMemo[index];      
    } else {      
      fridayMemo[index] = fridays[index].innerText;
      fridays[index].innerText = 'Sextou!';
    }
  }
}
)

// exercicio 6

document.getElementById('days').addEventListener('mouseover', function(event){
  event.target.style.fontSize = '40px';
}
);

document.getElementById('days').addEventListener('mouseout', function(event){
  event.target.style.fontSize = '20px';
}
);

// exercicio 7

function tarefa(string){
  let span = document.createElement('span');
  span.innerText = string;
  document.querySelector('.my-tasks').appendChild(span)
}
tarefa('Cozinhar');

// exercicio 8

function legenda(cor){
  let color = document.createElement('div');
  color.className = 'task';
  color.style.backgroundColor = cor;
  document.querySelector('.my-tasks').appendChild(color);
}

legenda('blue');