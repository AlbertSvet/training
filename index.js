// cылочный тип 
const  objecA = {
    a: 10,
    b: 'abc'
}
const objecB = objecA; 
objecB.a = 25;
objecB.c = 'albert';
// console.log(objecA)

//Добавление новых свойст объекту 
const newObj = {
    name: 'abc'
}
newObj.nameTwo = 'lasf';
newObj.adasd= true;
// console.log(newObj);

//Json - формат передачи данных. С сервера мы получаем данные в виде строки. Для того чтобы работать с этими данными 
// на фронте их нужно распарсить в объект используя метод parse()
// для того чтобы отправить объект на сервер нужно его переделать в формат строки используя метод JSON.stringify()

const obj = {
    name: 'ablert',
    age: 30,
    text: 'Привет'

}
const objTwo = JSON.stringify(obj); 
// console.log(objTwo);
const objTre = JSON.parse(objTwo);
// console.log(objTre);

// Как избежать мутацию объекта. Для этого есть три способа копирвоания объекта 
// 1. Object.assign() - создаст копию объекта. В метод передается два аргумента, пустой объект и объект который надо скопировать
const objFour = {
    name: 'Альберт',
    age: 30,
    text: 'Привет'
}
const objFourCopy = Object.assign({}, objFour);
objFourCopy.name = 'Петя';
console.log(objFourCopy);
console.log(objFour);
//2.{...objFour} - спред оператор. Создаст копию объекта objFour со всеми свойства. 
const objFive = {...objFour};
objFive.name = 'Ваня';
console.log(objFive)
//3. JSON.parse(JSON.stringify()) - превращает объект в строку затем в новый объект с новыми вложенными объектами. глубокое копирование
const objSix = JSON.parse(JSON.stringify(obj));
objSix.name = 'Федя';
console.log(objSix);

// Функции. Виды  - анонимная, стрелочная, именнованая , присвоеная переменой. у функции есть параметры, тело функции и аргументы при вызове функции.
// Функция всегда что то возвращает. если нет результата функция вернет undefined
function myFn (a,b){//параметры функции
    a = a + 20;
    c = a + b;
    return c; // вернуть результат функции.
}
const res = myFn(10, 5);//аргументы при вызове функции 
console.log(res)
// Внутри функции не рекомендуеца мутировать внешний объект. Для этого нужно создать копию объекта 
//Пример мутирование объекта. 
const personOne = {
    name: 'Федя',
    age : 22
}
function newAge (person) {
    person.age += 1;
    return person
}
//Объект передается как аргумент при вызове функции. 
// console.log(newAge(personOne));

// Копируем объект в функции для точго чтобы не менять основной объект.
function newCopy(personCopy) {
    const newCopyObj = Object.assign({}, personCopy);
    newCopyObj.age +=2;
    return newCopyObj
}
const personTwo = newCopy(personOne); //Объект personOne передается как аргумент при вызове функции. 
console.log(personTwo);
//3часа 10 минут. 