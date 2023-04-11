$(document).ready(main);

var contador = 1;

function main() {
  $(".menu_bar").click(function () {
    if (contador == 1) {
      $("nav").animate({
        left: "0",
      });
      contador = 0;
    } else {
      contador = 1;
      $("nav").animate({
        left: "-100%",
      });
    }
  });

}

document.getElementById('search').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    // Aquí puedes agregar el código para realizar la búsqueda
    console.log('Buscar:', this.value);
  }
})
