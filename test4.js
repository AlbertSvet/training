//циклы

// const myArr = ['test', 1, 2, 'text'];
// for(let i = 0; i < myArr.length; i++){ // перебор массива цыклом for. Массивы лучше перебирать функциями высшего порядка такими как forEach, map
//     //  console.log(myArr[i]);
// }
// методом forEach/ получаем доступ к значениям массива и к ключам(индекс)
// myArr.forEach((item,index) =>{
//     console.log(item, index)
// })

// While
// let i = 0;
// while(i < 5 ){// может ни разу не выполниться если изначально условие ложное наприме i > 5. А вот цикл do while выполниться один раз в любом случае
//     // console.log(i)
//     // i++;
// }

// do {
//     console.log(i)
//     i++;// выполниться цикл один раз 
// }while(i > 5)

// for in // можно так же использовать и для перебора массива
// const newObj = {
//     myname: 'Альберт',
//     age: 20,
//     text: 'Привет'
// }
// for(const item in newObj) {
//     console.log(item)// item это каждое свойство(ключ) объекта 
//     console.log(newObj[item])// такой записью мы получим каждое значение объекта 
// }
// Объект можно перебрать методом forEach для это используют Object.keys он переделает объект в массив

// Object.keys(newObj).forEach(key =>{
//     console.log(key, newObj[key])
// })
//можно перебирать сразу значение объекта 
// Object.values(newObj).forEach(i =>{
//     console.log(i)
// })
//for of . можно перебирать строки / так же можно перебирать и массив
// const hey = 'Привет';

// for(const el of hey){ // el будет каждый символ в строке а hey будет перебираться 
//     console.log(el)
// }

//=============================
// Класс

class Comment {
    constructor(text) {
        this.text = text
        this.count = 0
    }
    upvote() {
        return this.count += 1
       
    }
}

// У каждого экземпляра будут свои собственые свойтва и методы за счет контекста this
const cop = new Comment('comment');
const copFirst = new Comment('first comment');
const copSecond = new Comment('second comment');
console.log(cop.upvote())
cop.upvote();
copFirst.upvote();
copSecond.upvote();
console.log(cop)
console.log(copFirst)
console.log(copSecond)
