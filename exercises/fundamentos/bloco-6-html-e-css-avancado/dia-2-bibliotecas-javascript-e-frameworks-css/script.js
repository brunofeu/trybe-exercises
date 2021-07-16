const arrEstados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

const arrUF = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const name = document.getElementById("nome");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const endereco = document.getElementById("endereco");
const cidade = document.getElementById("cidade");
const estados = document.getElementById("estados");
const moradia = document.getElementById("moradia");
const resumo = document.getElementById("resumo");
const cargo = document.getElementById("cargo");
const descricao = document.getElementById("descricao");
const data = document.getElementById("inicio");
const btnSubmit = document.getElementById("submit");
const answer = document.getElementById("answer");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter('foo'));

function perfect() {
  while (answer.firstChild) {
    answer.removeChild(answer.lastChild);
  }
  let info = [
    name,
    email,
    cpf,
    endereco,
    cidade,
    estados,
    resumo,
    cargo,
    descricao,
    data,
  ];
  for (let index = 0; index < info.length; index += 1) {
    const parag = document.createElement("p");
    parag.innerHTML = `${capitalizeFirstLetter(info[index].id)}: ${info[index].value}`;
    answer.appendChild(parag);
  }
}

function getUserData(event) {
  // event.preventDefault();
  validation.highlight();
  // perfect();
}

btnSubmit.addEventListener("click", getUserData);

// function checkDate() {
//   if (data.value.length === 10) {
//     let check = data.value.split("/");
//     if (check.length === 3) {
//       if (
//         check[0] < 0 ||
//         check[0] > 31 ||
//         isNaN(check[0]) === true ||
//         check[0].length !== 2
//       ) {
//         alert("dia inválido");
//         data.value = "";
//       } else if (
//         check[1] < 0 ||
//         check[1] > 12 ||
//         isNaN(check[1]) === true ||
//         check[1].length !== 2
//       ) {
//         alert("mês inválido");
//         data.value = "";
//       } else if (
//         check[2] < 0 ||
//         isNaN(check[2]) === true ||
//         check[2].length !== 4
//       ) {
//         alert("ano inválido");
//         data.value = "";
//       }
//     } else {
//       alert("data inválida");
//       data.value = "";
//     }
//   }
// }

btnSubmit.addEventListener("click", getUserData);

function setEstados() {
  for (let index = 0; index < arrEstados.length; index += 1) {
    const atual = document.createElement("option");
    atual.innerHTML = arrEstados[index];
    atual.value = arrUF[index];
    estados.appendChild(atual);
  }
}

function checkNum(event) {
  let previous = "";
  if (isNaN(event.target.value) === true) {
    alert("Digite somente números");
    event.target.value = previous;
  } else {
    previous += event.target.value;
  }
}

cpf.addEventListener("keyup", checkNum);

window.onload = function begin() {
  setEstados();
};

var picker = new Pikaday({
  field: document.getElementById('datepicker')
});
validation.init();
validation.init("#myForm");
validation.init("#myForm", {
  events: ["change", "paste", "keyup"]
});
