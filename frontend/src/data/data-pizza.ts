const dataPizza = [
  {
    name: "Черрипери: 25см",
    price: 430,
    discount: 0,
    description:
      "Если совместить слова «черри» и «пепперони», то получится Черрипери. А если к ним добавить жареную курочку, маслины, сыр моцарелла и сверху приправить орегано, то получится сытная пицца.",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/6c/74/6c74d05a932e5f88ca221e1793c8dc92.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "395",
      proteins: "11",
      carbohydrates: "19",
      fats: "14",
      calories: "246",
    },
  },
  {
    name: "Чиззи",
    price: 450,
    discount: 50,
    description:
      "Недостаточно сыра в организме, это нужно исправить! Пицца с жареным фаршем, маринованными огурчиками, сочными томатами, красным лучком, сыром моцарелла и сырным соусом. ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/17/bf/17bf9fc0627f1155661af5d229e11f54.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "420",
      proteins: "10",
      carbohydrates: "21",
      fats: "15",
      calories: "259",
    },
  },
  {
    name: "Комбо Туса",
    price: 1845,
    discount: 19,
    description:
      "Охотничья 25 см, Болоньезе 25 см, Четыре сыра 25 см, Чикен бекон 25 см, Карты ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/58/6a/586a8df73815f59fc92e2b894a4344e7.jpg",
    comments: [],
    type: "pizza combo",
    info: {
      weight: "1580",
      proteins: "15",
      carbohydrates: "22",
      fats: "22",
      calories: "346",
    },
  },
  {
    name: "Черрипери: 30см ",
    price: 595,
    discount: 0,
    description:
      "Если совместить слова «черри» и «пепперони», то получится Черрипери. А если к ним добавить жареную курочку, маслины, сыр моцарелла и сверху приправить орегано, то получится сытная пицца. ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/54/e1/54e103fa27b6daf447f5781b3b2b6ab4.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "610",
      proteins: "11",
      carbohydrates: "20",
      fats: "14",
      calories: "250",
    },
  },
  {
    name: "Цыпленок барбекю",
    price: 430,
    discount: 0,
    description:
      "Жареная курочка, ветчина, ароматные шампиньоны, красный болгарский перчик, моцарелла и зеленый лучок — прямо на вашей пицце. ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/16/d4/16d43d56009911a3ef159d1022ce2206.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "445",
      proteins: "12",
      carbohydrates: "18",
      fats: "14",
      calories: "246",
    },
  },
  {
    name: "Чезаре",
    price: 430,
    discount: 0,
    description:
      "Жареная курочка, сочные маслины, маринованные огурчики, яркие помидоры, моцарелла и ароматная петрушка наталкивают только на одну мысль: или Чезаре, или ничто! ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/a1/66/a1668056ce095930ac96474f7ec5eb6f.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "430",
      proteins: "10",
      carbohydrates: "18",
      fats: "13",
      calories: "229",
    },
  },
  {
    name: "Пепперони",
    price: 390,
    discount: 0,
    description:
      "Легендарная итальянская пицца: пикантные колбаски пепперони и таящий во рту сыр моцарелла на воздушном тесте. ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/9e/b2/9eb2c8f45d088084a78e7dc998f14e6b.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "330",
      proteins: "11",
      carbohydrates: "31",
      fats: "11",
      calories: "267",
    },
  },
  {
    name: "Домашняя",
    price: 415,
    discount: 0,
    description:
      "Легендарная итальянская пицца: пикантные колбаски пепперони и таящий во рту сыр моцарелла на воздушном тесте. ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/47/3c/473c190f1b9da9860f3072e5abf4253a.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "420",
      proteins: "11",
      carbohydrates: "18",
      fats: "16",
      calories: "260",
    },
  },
  {
    name: "Четыре сезона ",
    price: 365,
    discount: 0,
    description:
      "Колбаски пепперони или сочные помидорки с ароматной петрушкой? Копченая ветчина или шампиньоны? Солоноватая брынза или нежная моцарелла? Всё вместе и томатный соус, пожалуйста! ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/c8/6f/c86f03892d0444af0335992ce4e9274d.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "415",
      proteins: "11",
      carbohydrates: "20",
      fats: "12",
      calories: "232",
    },
  },
  {
    name: "Маргарита",
    price: 310,
    discount: 0,
    description:
      "Пицца объединила в себе сладкие помидоры, нежную моцареллу и ароматную петрушку в единое целое для вашего идеального вечера. ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/2e/fc/2efc4ce6ab15c53900377274ac3ac65d.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "385",
      proteins: "9",
      carbohydrates: "21",
      fats: "9",
      calories: "201",
    },
  },
  {
    name: "Сливочный цыпленок",
    price: 420,
    discount: 0,
    description:
      "Горячая сливочная пицца с жареная курочкой, шампиньонами, ароматным красным луком и нежной моцареллой. И томатный соус — с ним вкуснее! ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/e3/11/e3113efea227b8e22d319b308f08d049.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "390",
      proteins: "11",
      carbohydrates: "19",
      fats: "11",
      calories: "219",
    },
  },
  {
    name: "Четыре сыра",
    price: 415,
    discount: 0,
    description:
      "В составе дорблю, пармезан, гауда и моцарелла. Когда-то давно четыре вида сыра жили в мире, но все изменилось, когда из них приготовили ароматную пиццу на воздушном тесте. ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/4d/e3/4de3f8cc3846c951d502292832496f91.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "310",
      proteins: "12",
      carbohydrates: "35",
      fats: "12",
      calories: "296",
    },
  },
  {
    name: "Ветчина и грибы",
    price: 365,
    discount: 0,
    description: "Ветчина, грибы и моцарелла. Разве нужно что-то еще? ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/9f/c9/9fc98175aa9a8290ba8bdede4c23dab8.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "350",
      proteins: "12",
      carbohydrates: "21",
      fats: "12",
      calories: "240",
    },
  },
  {
    name: "Комбо Пати ",
    price: 1175,
    discount: 5,
    description:
      "Что-то классическое и вкусное: пикантная пицца «Пепперони» 25 см, сочная «Маргарита» 25 см и нежная пицца «Ветчина и грибы» 25 см. Сок и игра «Икра сов» в подарок! ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/67/27/67270a16aefc6d75cf56cad57d9b7bee.jpg",
    comments: [],
    type: "pizza combo",
    info: {
      weight: "1065",
      proteins: "8",
      carbohydrates: "15",
      fats: "9",
      calories: "173",
    },
  },
  {
    name: "Комбо 4 пиццы: 30см",
    price: 2065,
    discount: 18,
    description:
      "Для тех, кто любит сытно: пицца «Барбекю по-болгарски», «Маргарита», «Ветчина и грибы» и «Пепперони». Ммм, приятного аппетита! ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/88/ef/88ef13c18752f7b9825c28e8e8f3bda8.jpg",
    comments: [],
    type: "pizza combo",
    info: {
      weight: "2145",
      proteins: "10",
      carbohydrates: "22",
      fats: "9",
      calories: "209",
    },
  },
  {
    name: "Мясная",
    price: 415,
    discount: 0,
    description:
      "Для настоящих ценителей мяса: сочная ветчина, полукопченая колбаса, ароматный бекон под нежным сыром моцарелла. Сытно и аппетитно. ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/0e/7b/0e7b956da7c3eef40ed60bce5200a86c.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "375",
      proteins: "11",
      carbohydrates: "30",
      fats: "10",
      calories: "254",
    },
  },
  {
    name: "Чикен Чиз 25см ",
    price: 415,
    discount: 0,
    description:
      "Легендарная горячая пицца с цыпленком, сочными помидорами в сочетании с моцареллой и сырным соусом на тонком воздушном тесте. Сытно-сырно! ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/11/4d/114d3aa220ebf3e3193e749f8945288b.jpg",
    comments: [],
    type: "pizza",
    info: {
      weight: "410",
      proteins: "11",
      carbohydrates: "20",
      fats: "10",
      calories: "214",
    },
  },
  {
    name: "Комбо 8 пицц: 25см ",
    price: 3060,
    discount: 16,
    description:
      "Не зря цифра 8 похожа на знак бесконечности. Есть ощущение, будто это комбо не закончится. Маргарита 25 см, Ветчина и грибы 25 см, Пепперони 25 см, ЧикенЧиз 25 см, Четыре сезона 25 см, Гавайская с курицей 25 см, Домашняя 25 см, Терияки 25 см.  ",
    imageUrl:
      "https://cdn.farfor.ru/media/cache/51/8e/518ee82c79f3da44e2b3ccea638dface.jpg",
    comments: [],
    type: "pizza combo",
    info: {
      weight: "3075",
      proteins: "11",
      carbohydrates: "21",
      fats: "11",
      calories: "227",
    },
  },
];
