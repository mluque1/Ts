var tit = document.getElementById("titulo");
tit.onclick = function () {
  titulo();
};

var aut = document.getElementById("autores");
aut.onclick = function () {
  autores();
};

var mat = document.getElementById("materia");
mat.onclick = function () {
  materia();
};

var pro = document.getElementById("programa");
pro.onclick = function () {
  programa();
};

function titulo() {
  tit.classList.add("active");
  aut.classList.remove("active");
  mat.classList.remove("active");
  pro.classList.remove("active");
}
function autores() {
  tit.classList.remove("active");
  aut.classList.add("active");
  mat.classList.remove("active");
  pro.classList.remove("active");
}

function materia() {
  tit.classList.remove("active");
  aut.classList.remove("active");
  mat.classList.add("active");
  pro.classList.remove("active");
}

function programa() {
  tit.classList.remove("active");
  aut.classList.remove("active");
  mat.classList.remove("active");
  pro.classList.add("active");
}
