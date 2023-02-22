ymaps.ready(init);
let myMap;
let elInfo = document.getElementById('info');
let elMsg = document.getElementById('message');
let elEvnts = document.getElementById('events');

function init () {
    // Параметры карты можно задать в конструкторе.
    myMap = new ymaps.Map('map',
        {
            // Географические координаты центра отображаемой карты
            center: [55.76, 37.64],

            // Масштаб
            zoom: 10,
        }
    );
}



// изменить центр карты
const setCenter = function() {
    myMap.setCenter([57.767265, 40.925358]);

    // вывод тела функции в контейнер
    elInfo.innerHTML = setCenter;
}

// изменить видимые границы карты. Нижняя правая, верхняя левая
function setBounds() {
    myMap.setBounds([[36.767265, 39.925358], [38.967265, 42.725358]]);

    // вывод тела функции в контейнер
    elInfo.innerHTML = setBounds;
}

// меняем тип карты на hybrid
function setType(type) {
    myMap.setType(`yandex#${type}`);

    // вывод тела функции в контейнер
    elInfo.innerHTML = setType;
}

// плавное перемещение
function panTo() {
    myMap.panTo([62.915, 34.461], {
        // Задержка между перемещением
        delay: 1000,
        // Время на анимацию
        duration: 5000
    });

    // вывод тела функции в контейнер
    elInfo.innerHTML = panTo;
}

// перемещение в несколько мест
function panToMany() {
    myMap.panTo(
        [
            [62.915, 34.461],
            [45.915, 72.461],
            [37.915, 40.461]
        ], {
        // Задержка между перемещениями.
        delay: 500,
        // Время на анимацию
        duration: 5000,
        // Разрешить/запретить менять масштаб при перемещении
        flying: true,
        // Указание функции влияющей на плавность анимации
	    timingFunction: 'ease-in-out'
    });

    // вывод тела функции в контейнер
    elInfo.innerHTML = panToMany;
}

// плавное перемещение в случайное место
function panToRandom() {
    let lat = Math.floor(Math.random() * (90 - (-90))) + (-90);
    let lon = Math.floor(Math.random() * (180 - (-180))) + (-180);
    myMap.setZoom(5);
    myMap.panTo([lat, lon], {
        // Задержка между перемещениями.
        delay:500,
        duration: 5000
    });

    // вывод тела функции в контейнер
    elInfo.innerHTML = panToRandom;
}

// меняем масштаб
function setZoom(zoom) {
    myMap.setZoom(zoom);

    // вывод тела функции в контейнер
    elInfo.innerHTML = setZoom;
}

// получаем масштаб
function getZoom() {
    let result = myMap.getZoom();

    // вывод тела функции в контейнер
    elInfo.innerHTML = getZoom;
    // вывод рузультата в контейнер
    elMsg.innerHTML = result;
}

// получаем center
function getCenter() {
    let result = myMap.getCenter();

    // вывод тела функции в контейнер
    elInfo.innerHTML = getCenter;
    // вывод рузультата в контейнер
    elMsg.innerHTML = result;
}

// получаем center
function getGlobalPixelCenter() {
    let result = myMap.getGlobalPixelCenter();

    // вывод тела функции в контейнер
    elInfo.innerHTML = getGlobalPixelCenter;
    // вывод рузультата в контейнер
    elMsg.innerHTML = result;
}

// получаем тип
function getType() {
    let result = myMap.getType();

    // вывод тела функции в контейнер
    elInfo.innerHTML = getType;
    // вывод рузультата в контейнер
    elMsg.innerHTML = result;
}

// получаем видимые границы карты
function getBounds() {
    let result = myMap.getBounds();

    // вывод тела функции в контейнер
    elInfo.innerHTML = getBounds;
    // вывод рузультата в контейнер
    elMsg.innerHTML = result;
}

// запускаем прослушивание событий
function startEvents() {
    elEvnts.innerHTML = "";

    myMap.events.add(['click','actionbegin','dblclick','destroy','mouseenter','wheel'], (e) => {
        console.log(e);
        elEvnts.innerHTML += e.originalEvent.type + " ";
    });

    // вывод тела функции в контейнер
    elInfo.innerHTML = startEvents;
}

// уничтожить карту
function destroyMap() {
    myMap.destroy();

    // вывод тела функции в контейнер
    elInfo.innerHTML = destroyMap;
}




