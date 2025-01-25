const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays() {
  let date_ini = new Date(document.form_main.date_ini.value);
  let date_end = new Date(document.form_main.date_end.value);

  let diff = date_end.getTime() - date_ini.getTime();

  document.getElementById('days').innerText = Math.floor(diff / day);
}

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");


let idx = 0;

function carrossel() {
    const imgWidth = window.innerWidth <= 420 ? 420 : 700; // Define a largura da imagem com base na largura da tela

    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * imgWidth}px)`; // Ajusta o valor de translateX com base na largura da imagem
}

setInterval(carrossel, 4000);
