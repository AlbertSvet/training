// Промисы.(обещание предоставить результат позже) асинхроное выполнение скрипта 
// у промиса есть три состояние: Ожидание, Исполнен, Отклонить
// Для получения или отправки данных на сервер используют встроеный метод fetch 
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) // json тоже вернет промис, поэтому мы его обработаем во второй строке кода 
      .then(json => console.log(json))
      .catch(error => console.error(error))

// ===========================
// такой способ записи можно экспортировать и использовать функцию в разных файлах
const getData = (url) =>
    new Promise ((resolve, reject)=>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error)
    ))
getData('https://jsonplaceholder.typicode.com/todos/1')
      .then(data => console.log(data))
      .catch(error => console.log(error.message))
      
// async await
const url = 'https://jsonplaceholder.typicode.com/todos/1';
const getFun = async (url) =>{
    const res = await fetch(url)
    const json = await res.json()
    return json
}

try{
    const data = await getFun(url)
    console.log(data)
}catch(e){
    console.log(e.message)
}

// async await это синтаксический сахар(надстройка) 
// async всегда возвращает промис
// await возможен только внутри async функции
// async ожидает результата await. Соответственно код который идет ниже не будет блокироваться
