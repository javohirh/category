const menu = [
  {
    id: 0,
    title: "Grab-N-Go Egg Breakfast Box",
    category: "breakfast",
    img: "./images/keleo-breakfast.jpg",
    info: `Get some veg in at breakfast by cooking kale into your scrambled
              eggs. Combine it in a wrap with hummus and tomatoes, and you have
              yourself a delicious, portable breakfast. Pro tip: Choose a whole
              grain wrap for a higher fibre option!`,
  },
  {
    id: 1,
    title: "Kale and Egg Wrap",
    category: "breakfast",
    img: "./images/breakfast.jpg",
    info: `This on-the-go power breakfast can be made right at home and will keep you fuelled until lunchtime. Prep it the night before to save time in the morning!`,
  },
  {
    id: 3,
    title: "Muffin Tin Frittatas with Salsa",
    category: "breakfast",
    img: "./images/muffin-tin.jpg",
    info: `Whip this recipe up on a Sunday, and you’ve got tasty breakfasts ready for the whole week! Enjoy the pop of protein on-the-go for those rushed mornings.`,
  },
  {
    id: 4,
    title: "Egg and Cottage Cheese Breakfast Bowl",
    category: "breakfast",
    img: "./images/egg-chinese.jpg",
    info: `This recipe fits in so many tasty and filling ingredients like eggs, cottage cheese and avocado, all in one bowl! It can be assembled the night before (slice the avocado in the morning) and can be enjoyed on-the-go or when you get to work or school.`,
  },
  {
    id: 4,
    title: "MINI EGG CHEESECAKE",
    category: "desert",
    img: "./images/chiscake.jpg",
    info: `Gluten-free mini egg cheesecake recipe – no oven, flour or baking required. This has been one of my most popular Easter recipes for many years now, so I think it’s about time you gave it a try!`,
  },
  {
    id: 5,
    title: "MINI EGG SWISS ROLL",
    category: "desert",
    img: "./images/swees-rolls.jpg",
    info: `Gluten-free Mini Egg swiss roll recipe? You wouldn’t believe how easy it is to get the super chocolatey swirl in the middle and impress anyone who’s lucky enough to get a slice. How egg-citing!`,
  },
  {
    id: 6,
    title: "MINI EGG PANCAKE",
    category: "desert",
    img: "./images/mini-egg.jpg",
    info: `Mini Egg pancakes recipe, anyone? All you need are 7 simple ingredients for the ultimate Pancake Day goals and yes, one of those ingredients is Mini Eggs! Say hello to a quick and easy recipe that absolutely anyone can pull off.`,
  },
  {
    id: 7,
    title: "CHOCOLATE LOAF",
    category: "desert",
    img: "./images/gluter.jpg",
    info: `Gluten-free Mini Egg chocolate loaf cake recipe - an easy Easter baking project that nobody would know is Coeliac-friendly and wheat-free`,
  },
  {
    id: 8,
    title: "Cumin-crusted chicken with kale salad",
    category: "dinner",
    img: "./images/cumin-chicken.webp",
    info: `A clever way to make chicken more exciting is to coat in cumin and paprika before frying. There's 38.5g of lean protein per serving, plus plenty of nutrients and fibre. It's light, flavour-packed and ready in 40 minutes.`,
  },
  {
    id: 9,
    title: "Homemade veggie burgers",
    category: "dinner",
    img: "./images/homemade.webp",
    info: `The idea behind these genius allotment vegetarian burgers is that you can grow many of the ingredients yourself, so adapt and add what you’ve got in your garden.`,
  },
  {
    id: 10,
    title: "Salmon traybake",

    category: "dinner",
    img: "./images/salmon-traybake.webp",
    info: `Traybakes, the midweek saviour. This vibrant, curried salmon dish is full of healthy omega-3 fats and antioxidants – great for healthy skin and mind. Serve as is or add a nutritious grain like brown rice or spelt when you're extra hungry.`,
  },
];

const sectionEl = document.querySelector(".row");

const btns = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const target = e.currentTarget.dataset.id;

    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === target) {
        return menuItem;
      }
    });
    if (target === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    let info = item.info;
    if (info.length > 170) {
      info = info.substr(0, 170) + "...";
    }

    return ` <div
              class="col text-center text-lg-start d-flex flex-column flex-sm-column flex-lg-row gap-2"
            >
              <img
                class="card-img-left m-auto m-lg-0"
                src=${item.img}
                alt=${item.title}
              />
              <div class="card-body p-2">
                <h4 class="card-title">${item.title}</h4>
                <p
                  class="card-text text m-auto text-sm-center text-lg-start m-lg-0"
                >
                  ${info}
                </p>
              </div>
            </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionEl.innerHTML = displayMenu;
}
