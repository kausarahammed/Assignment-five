const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const balance = urlParams.get('balance');
document.getElementById('balance').innerText = balance;

const getBack = function(){
    window.location.href = "index.html";
}
