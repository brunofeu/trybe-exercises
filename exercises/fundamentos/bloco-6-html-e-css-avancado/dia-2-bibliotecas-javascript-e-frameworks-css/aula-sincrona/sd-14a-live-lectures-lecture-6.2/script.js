var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
})
var botao = document.getElementById('btnModal')


botao.addEventListener('click', function(event){
  alert('teste');
  event.preventDefault();
  myModal.show()
})
