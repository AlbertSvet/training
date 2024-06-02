//Области видимости. Глобальная, локальная, блочная 
// переменные объявлены в глобальной области видимости 
let a;
let b; 

function myFun() {
    let a = 10; // переменная объявлена внутри функции, локальная область видимости 
    b = true; // переменная объявлена в глобальной области видимости. Соответственно значение переменной запишится в глобальную переменную b 
    console.log(a)
}
myFun();
console.log(a)
console.log(b)

// Операторы. Арифметические( + - * / ), операторы сравнения(== === !== <= >=), логические( ! && || ), присваивания(=) 
// a++; // унарный оператор 
// +a; // унарный оператор 

// a + b; // бинарный оператор 
// c * d // бинарынй оператор 
// v === d // бинарный оператор

//Инфиксная записи. оператор находиться между операндами 
// a + b; 
// b == a; 
// a || b;

//Префиксная запись. Оператор стоит перед операндами
// ++a;
// typeof a;

// Постфиксная запись. Оператор стоит после операнда
// a++; 
// myFun();

//======================================================
// Объединение объектов с помощью ... 

const obj = {
    name: 'Федор',
    age : '20',
    color: 'red'
}
const objTwo = {
    text: true
}

const newObj = {
    ...obj,
    ...objTwo,
    color: 'black', // если записать свойство которое уже есть в одном из объекте а именно записать после разворачивания свойств объектов, то это свойство перезапишется в новом объекте
}
// console.log(newObj)
// console.log(obj)

//===========================================
//Шаблонные строки
const myName = 'Альберт',
      city = 'Астрахань';
const total = `Меня зовут ${myName} я из города ${city}`;
// console.log(total)

//===================
// Функциональные выражения отличается от обычной функции тем что у нее нет имен функции.Всегда анонимные
// function(a, b){
//     let c;
//     d = b + a;
//     return d;
// }

const myNewFunction = function(a, b){ // функциональное выражение(анониманя функция) можно записать в переменную. 
    let c;
    d = b + a;
    return d;
}
// console.log(myNewFunction(2, 4));

//================= Стрелочная функция 
const str = (a, b) =>{
    return a * b;
}
// console.log(str(5, 10))
// Сокращеная запись стрелочной функции 
const strNew = (a, b) => a * b ;
// console.log(strNew(10,10))
const firstObj = {
    id: 1,
    author: 'Альберт'
}
const newPost = (post, addead = Date()) =>{
    return {
        ...post,// копируем свойства объекта firstObj. Он передается как аргумент при вызове функции newPost
        time: addead,// добавляем новое свойство в объект 
    
    }
}
console.log(newPost(firstObj));
