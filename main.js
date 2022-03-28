
const cocktailStorage = new HashStorage({
    "Маргарита": {
        alcohol: true,
        ingredients: ["Водка Finlandia 50мл", "Кофейный ликер 25мл", "Лед в кубиках 120 г"],
        prescription: "Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.",
    },
    "Пеликан": {
        alcohol: false,
        ingredients: ["Гренадин Monin 10мл", "Клубничный сироп Monin 10мл", "Персиковый сок 150мл", "Лимонный сок 15мл", "Банан 110г", "Клубника 50г", "Дробленый лед 60г"],
        prescription: "Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налейте лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.",
    },
    "Мохито": {
        alcohol: true,
        ingredients: ["лайм 3 дольки", "мяту 10 листиков", "ахарный сироп 15 мл", "белый ром 50 мл", "лед"],
        prescription: "Положи в хайбол лайм 3 дольки и подави мадлером. Возьми мяту 10 листиков в одну руку и хлопни по ним другой рукой. Положи мяту в хайбол. Наполни бокал дробленым льдом доверху. Добавь сахарный сироп 15 мл и белый ром 50 мл. Долей содовую доверху и аккуратно размешай коктейльной ложкой. Досыпь немного дробленого льда. Укрась веточкой мяты и долькой лайма.",
    },
})

document.querySelector(".all").addEventListener("click", (event) => {
    let allCocktails = cocktailStorage.getKeys().join(', ')
    alert(allCocktails)
})

document.querySelector(".delete").addEventListener("click", (event) => {
    let value = prompt("Введите названеи коктейля с заглавной буквы!")
    if (value) {
        const allCocktails = cocktailStorage.getKeys().includes(value)
        if (allCocktails) {
            cocktailStorage.deleteValue(value)
            alert("Коктейль успешно удален!")
        } else {
            alert("Введенного Вами коктейля не существует!")
        }
    }
})

document.querySelector(".recipe").addEventListener("click", (event) => {
    let name = prompt("Введите названеи коктейля с заглавной буквы!")
    if (name) {
        const currentCocktail = cocktailStorage.getKeys().includes(name)
        if (currentCocktail) {
            alert(cocktailStorage.getValue(name).prescription)
        } else {
            alert("Введенного Вами коктейля не существует!")
        }
    }
})

document.querySelector(".enter").addEventListener("click", (event) => {
    let nameCocktail = prompt("Введите названеи коктейля с заглавной буквы!")
    let alcohol = prompt("Коктейль алкогольный? Напишите да или нет!")
    let ingredients = prompt("Перечислите через запятую необходимые ингредиенты и их пропорции!")
    let description = prompt("Напишите рецепт приготовления")

    if (nameCocktail && alcohol && ingredients && description) {
        cocktailStorage.addValue(nameCocktail, {
            alcohol: alcohol === "да" ? true : false,
            ingredients: ingredients.split(','),
            prescription: description,
        })
        alert("Коктейль успешно добавлен!")
    } else {
        alert("Вы что то не указали, попробуйте сначала!")
    }
})