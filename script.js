function test() {
    //pobierz odwołanie do licznika
    let counter = document.getElementById('counter');
    //pobierz istniejący stan licznika
    let value = parseInt(counter.innerHTML);
    //dodaj jeden do wartości
    value += 1;
    //ustaw licznik na nową wartość
    counter.innerHTML = value.toString();
}

setInterval(test, 5000);
