'use strict';

const container = document.querySelector('.container');
// const searchValue = document.querySelector('.tools__search').value;
 
let goods;//'эту переменную я добавил чтобы в нее записывать резултата запроса данных из апи
async function fetchData() {
    const response = await fetch('https://api.npoint.io/cb648043f49f676ca672');
    const json = await response.json();

    const result = json.products;
    goods=result// эту строку я добавил - результат фетча закидываю в переменную goods

    result.forEach((item) => {
        const itemContainer = document.createElement('a');
        itemContainer.href = `product.html?id=${item.id}`;
        itemContainer.classList.add('item-container');

        const img = document.createElement('img');
        img.src = item.image;
        img.classList.add('item-img');

        const title = document.createElement('h2');
        title.textContent = item.title;
        title.classList.add('item-title');

        const desc = document.createElement('h5');
        desc.textContent = item.previewDescription;
        desc.classList.add('item-desc');

        const price = document.createElement('h3');
        price.textContent = item.price;
        price.classList.add('item-price');
        
        const rating = document.createElement('h6');
        rating.textContent = item.rating;
        rating.classList.add('item-rating');
    
        const weight = document.createElement('h6');
        weight.textContent = item.weight;
        weight.classList.add('item-weight');

        const button = document.createElement('button');
        button.textContent = 'Купить';

        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            let resultFromLocalStorage = JSON.parse(localStorage.getItem('item'));
            if (!resultFromLocalStorage || !resultFromLocalStorage.length) {
                resultFromLocalStorage = [];
            }
            resultFromLocalStorage.push(item);
            const resultString = JSON.stringify(resultFromLocalStorage);
            localStorage.setItem('item', resultString);
            console.log(localStorage);

            button.textContent = 'Удалить';
        });

        itemContainer.appendChild(img);
        itemContainer.appendChild(title);
        itemContainer.appendChild(desc);
        itemContainer.appendChild(price);
        itemContainer.appendChild(rating);
        itemContainer.appendChild(weight);
        itemContainer.appendChild(button);

        container.appendChild(itemContainer);
    });
}

fetchData();

        // const buttonFind = document.querySelector('.find');
        // buttonFind.addEventListener('click', (event) => {
        //     event.preventDefault();
        //     FindOnPage();
        // })

    

        const buttonFind = document.querySelector('.find');
        const searchValue = document.querySelector('.tools__search').value;//

        buttonFind.addEventListener('click', (event) => {
            event.preventDefault();
        
            console.log(//я обернул поиск в команду лога чтобы показать что фильтр работает. результат работы - в консоли
            //вместо goods тут раньше был result но эта перменная недоступна потому что она ябляется внутреней перменной другого блока
            goods.filter((item) => {
                const productTitle = (item.title).toLowerCase();

                return (
                    productTitle.includes(searchValue.toLowerCase())
                )
            })
            )//это закрываающая скобка console.log
            FindOnPage();//сейчас ошибка вываливается на этом шаге - дальше вам надо определиться как будет выглядеть ваша функция выводящая на экран список отфильтрованных товаров
        })
        
        

//// render///

// function render(result = []) {
//     const container = document.querySelector('.container');
//     container.innerHTML = '';

//     result.forEach((item) => {
//         const itemContainer = document.createElement('a');
//         itemContainer.href = `product.html?id=${item.id}`;
//         itemContainer.classList.add('item-container');

//         const img = document.createElement('img');
//         img.src = item.image;
      
//         const title = document.createElement('h2');
//         title.textContent = item.title;

//         const desc = document.createElement('h5');
//         desc.textContent = item.previewDescription;
        
//         const price = document.createElement('h3');
//         price.textContent = item.price;

//         const rating = document.createElement('h6');
//         rating.textContent = item.rating;
        
//         const weight = document.createElement('h3');
//         weight.textContent = item.weight;

//         const button = document.createElement('button');
//         button.textContent = 'Купить';
//         button.addEventListener('click', () => {
//             let resultFromLocalStorage = JSON.parse(localStorage.getItem('result'));
//             if (!resultFromLocalStorage || !resultFromLocalStorage.length) {
//                 resultFromLocalStorage = [];
//             }
//             resultFromLocalStorage.push(item);
//             const itemString = JSON.stringify(item);
//             localStorage.setItem('result', itemString);
                        
//         });

//         itemContainer.appendChild(img);
//         itemContainer.appendChild(title);
//         itemContainer.appendChild(desc);
//         itemContainer.appendChild(price);
//         itemContainer.appendChild(rating);
//         itemContainer.appendChild(weight);
//         itemContainer.appendChild(button);

//         container.appendChild(itemContainer);
//     });
// }

// async function fetchData() {
//     const response = await fetch('https://api.npoint.io/cb648043f49f676ca672');
//     const result = await response.json();

//     render();
// }

// fetchData();

///////////// Поиск /////////////

// let lastResFind=""; 
// let copy_page=""; 
// function TrimStr(s) {
//     s = s.replace( /^\s+/g, '');
//     return s.replace( /\s+$/g, '');
// }

// function FindOnPage(search) {
//     const obj = window.document.getElementById(search);
//     let textToFind;

//     if (obj) {
//         textToFind = TrimStr(obj.value);
//       } else {
//         alert("Введенная фраза не найдена");
//         return;
//       }
//     if (textToFind == "") {
//         alert("Вы ничего не ввели");
//         return;
//       }
//     if(document.body.innerHTML.indexOf(textToFind)=="-1")
//         alert("Ничего не найдено, проверьте правильность ввода!");
 
//     if(copy_page.length>0)
//         document.body.innerHTML=copy_page;
//     else copy_page=document.body.innerHTML;
    
//     document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");
//     document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>");
//     lastResFind=textToFind; 
//     window.location = '#'+textToFind;
// }

/////////////// Рассылка //////////////////
 
let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');

form.onsubmit = function(event) {
  event.preventDefault();
  message.textContent = 'Форма отправлена!';
};