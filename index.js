/*
1- Aumenta a altura da div
2- O icone de + por -
3- Texto apareça junto com a altura da div (texto = overflow:hidden)
*/


const matrizAberta = [false, false];
const matrizes = [];
const linhas = [];


matrizes[0] = document.getElementById("matriz1");
linhas[0] = document.getElementById("linha1");

matrizes[1] = document.getElementById("matriz2");
linhas[1] = document.getElementById("linha2");



function controlarMatriz(id) {

    if (matrizAberta[id]) {
        linhas[id].style.width = "22px";
        matrizes[id].style.height = "90px";
    } else {
        linhas[id].style.width = "0px";
        matrizes[id].style.height = "382px";
    }
    matrizAberta[id] = !matrizAberta[id];
}