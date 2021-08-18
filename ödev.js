let kullanici = prompt("Lütfen İsminizi Giriniz..");
let info = document.querySelector("#name");
info.innerHTML = `Merhaba ${kullanici}, Hoş Geldin!`;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = dd + '.' + mm + '.' + yyyy;
document.getElementById("time").innerHTML = today;
var myVar = setInterval(function () { myTimer() }, 1000);



function myTimer() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
    myDay();
}
function myDay() {
    var today = new Date();
    var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    document.querySelector("#time").innerHTML += `  ${days[today.getDay()]}`;

}





