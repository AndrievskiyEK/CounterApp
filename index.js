const counterText = document.querySelector('[data-find="counterValue"]'); // запишем в константу counterText элемент с атрибутом data-find равным counterValue
const addOnePoolButton = document.getElementById('addOnePoolButton'); // запишем в константу addOnePoolButton элемент с идентификатором равным addOnePoolButton
const addTwoPoolsButton = document.getElementById('addTwoPoolsButton'); 
const resetButton = document.getElementById('resetButton');

const COUNTER_INITIAL_VALUE = 0; // инициализируемые значения пишем в константы с именем через капслог

let counter = COUNTER_INITIAL_VALUE; // объявили переменную в которой будет считаться счетчик с проинициализированным значением
counterText.innerText = counter; // Записали в значение вывода счетчика значение переменной (в HTML начальное значение оставляем пустым, т.к. выведется с JS)

addOnePoolButton.addEventListener('click', function() {
    counter = counter + parseInt(addOnePoolButton.dataset.pools); // при нажатии на кнопку к текущему значению прибавится значение описанное в dataset атрибуте
    //data-pools в HTML, так же это значение преобразуем из типа строки в целое число через parseInt (изначально все значения с HTML - string)
    counterText.innerText = counter;   
});

addTwoPoolsButton.addEventListener('click', function() {
    counter = counter + parseInt(addTwoPoolsButton.dataset.pools); 
    counterText.innerText = counter;   
});

resetButton.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;
    counterText.innerText = counter; 
});

