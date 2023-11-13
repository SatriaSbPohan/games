const satu = document.getElementsByClassName("nama-satu")[0].innerHTML;
const dua = document.getElementsByClassName("nama-dua")[0];
const hasil = document.getElementsByClassName("text-hasil")[0];
const button = document.getElementsByClassName("button")[0];

button.addEventListener("click", jodoh);

function jodoh () {
    console.log(satu);    
    hasil.innerHTML = satu;
}