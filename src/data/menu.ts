export type MenuItem = {
  name: string;
  price: string;
  note?: string;
  featured?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  blurb: string;
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    id: "mix",
    title: "Mix Baskets",
    blurb: "The combo plates — fish, shrimp, and a full plate of luck.",
    items: [
      { name: "Cod Mix", price: "17.95", note: "1 cod + 4 shrimp" },
      { name: "Fillet Mix", price: "18.95", note: "1 catfish + 4 shrimp" },
    ],
  },
  {
    id: "baskets",
    title: "Baskets",
    blurb: "The neighborhood order. Sauce on the side if you ask.",
    items: [
      { name: "Half BBQ Chicken", price: "18.95", featured: true },
      { name: "Hot Link", price: "17.50", featured: true },
      { name: "Catfish or Cajun", price: "18.95", featured: true },
      { name: "Cod Fish", price: "20.95" },
      { name: "7 Shrimp", price: "17.95" },
      { name: "Chicken Strip", price: "15.95" },
      { name: "3 Chicken Wings", price: "15.95" },
      { name: "5 Wings", price: "15.95", note: "Buffalo / BBQ / lemon pepper / Cajun" },
      { name: "Hamburger", price: "14.75" },
      { name: "Cheeseburger", price: "15.25" },
      { name: "Double Meat Hamburger", price: "17.25" },
      { name: "Double Meat Cheeseburger", price: "17.75" },
      { name: "Fried or Grilled Pork Chop", price: "19.95" },
      { name: "Grilled Chicken Salad", price: "16.95" },
      { name: "Chicken Strip Salad", price: "16.95" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    blurb: "Window food. Built to eat in the car.",
    items: [
      { name: "Cod Fish Sandwich", price: "11.00", featured: true },
      { name: "Catfish Sandwich", price: "11.50", featured: true },
      { name: "BLT Sandwich", price: "9.95", featured: true },
      { name: "Hot Link Sandwich", price: "11.50" },
      { name: "Chicken Sandwich", price: "9.50" },
      { name: "Chicken Strip Sandwich", price: "9.95" },
      { name: "Grilled Chicken Sandwich", price: "11.25" },
      { name: "Pork Chop Sandwich", price: "12.00" },
      { name: "Hamburger", price: "10.50" },
      { name: "Cheeseburger", price: "11.25" },
      { name: "Double Meat Hamburger", price: "13.50" },
      { name: "Double Meat Cheeseburger", price: "13.75" },
      { name: "Ham Sandwich", price: "10.50" },
      { name: "Grilled Cheese", price: "5.25" },
    ],
  },
  {
    id: "philly",
    title: "Philly Cheeses",
    blurb: "Griddled, melted, wrapped.",
    items: [
      { name: "Chicken Philly", price: "12.00" },
      { name: "Beef Philly", price: "13.00" },
    ],
  },
  {
    id: "sides",
    title: "Sides & extras",
    blurb: "Fries, toast, sauce cups, the rest of the ritual.",
    items: [
      { name: "French Fries", price: "6.25" },
      { name: "Chili Cheese Fries", price: "9.25" },
      { name: "Onion Rings", price: "6.25" },
      { name: "Fried Okra", price: "6.25" },
      { name: "Hush Puppies", price: "4.50" },
      { name: "2 Egg Rolls", price: "6.25" },
      { name: "6 Chicken Nuggets", price: "6.00" },
      { name: "Corny Dog", price: "4.75" },
      { name: "Foot Long Chili Dog", price: "9.75" },
      { name: "Texas Toast", price: "0.75" },
      { name: "BBQ / Ranch / Tartar / Honey Mustard / Cocktail", price: "2.75" },
      { name: "Extra Link", price: "4.00" },
      { name: "Can Drink", price: "2.50" },
      { name: "Bottle Water", price: "2.50" },
      { name: "Bottle Drink", price: "3.95" },
    ],
  },
];

export const SIGNATURES = [
  {
    name: "Half BBQ Chicken",
    price: "18.95",
    image: "/food/chicken.jpg",
    copy: "Fall-off-the-bone, swimming in a zesty hickory sauce that regulars have been chasing for twenty years.",
  },
  {
    name: "Fish Sandwich",
    price: "11.00",
    image: "/food/fish.jpg",
    copy: "Crispy, flaky, and the sandwich people drive across Dallas for. Cod or catfish — both get the same respect.",
  },
  {
    name: "Hot Link Basket",
    price: "17.50",
    image: "/food/links.jpg",
    copy: "The neighborhood go-to. Links, fries, Texas toast, peppers, and lots of sauce.",
  },
  {
    name: "The BLT",
    price: "9.95",
    image: "/food/blt.jpg",
    copy: "Thick bacon, real tomato, toasted bread. Regulars will fight you on this one.",
  },
] as const;
