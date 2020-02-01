// Сделать дом модель магазина (каталог, корзину (*)) при помощи JS

// это типа наша БД-каталог из 2-х массивов одинаковой длины
let productNames = ["Notebook","Display","Keyboard","Mouse","Phones","Router","USB-camera","Gamepad"]
let productPrices = [1000, 200, 20 ,10 ,25 ,30 ,18 ,24]
let productIds = [1, 2, 3 ,4 ,5 ,6 ,7 ,8]

let products = [] // массив объектов продуктов - каталог

// функция возвращает объект - продукт с id, названием и ценой
// вызывается из createProductDTO () для записи в массив объектов - каталог products
function createProductObj (i) {
  return {
    prod_id: productIds [i],
    prod_name: productNames [i],
    prod_price: productPrices [i],
  }
}

// стандартная функция передачи данных объекта
function createProductDTO () {
  length = productIds.length
  for (let i = 0; i <= length - 1; i++) {
    products.push (createProductObj (i))
  }
}
// ну и вызов ее 
createProductDTO ()

// функция генерации DOM по каталогу товаров (для блока section)
function createSomeDom () {
  let mySection = document.querySelector ("section") // пишем в блок section

  products.forEach(element => {
    // create
    let newDiv = document.createElement ('div')
    let newImg = document.createElement ('img')
    let newH3 = document.createElement ('h3')
    let newSpan = document.createElement ('span')
    let newButton = document.createElement ('button')
    // customize
    newDiv.className = 'shop-item-wrp'
    newImg.className = 'shop-item-pic'
    newImg.src = 'https://placehold.it/200x150'
    newImg.width = '200'
    newImg.height = '150'
    newH3.className = 'shop-item-h3'
    newH3.innerText = element.prod_name
    newSpan.className = 'shop-item-price'
    newSpan.innerText = element.prod_price + ' $'
    newButton.className = 'shop-item-button'
    newButton.innerText = 'Купить'
    //append
    //newDiv.appendChild (newPar)
    newDiv.appendChild (newImg)
    newDiv.appendChild (newH3)
    newDiv.appendChild (newSpan)
    newDiv.appendChild (newButton)
    mySection.appendChild (newDiv)
  });
}
