export const SITE = {
  name: "Good Luck Drive In",
  tagline: "Oak Cliff since the early 2000s",
  phone: "(214) 371-3348",
  phoneHref: "tel:+12143713348",
  address: "3140 E Ledbetter Dr",
  city: "Dallas, TX 75216",
  neighborhood: "Oak Cliff",
  mapsUrl:
    "https://www.google.com/maps/place/Good+Luck+Drive+In/@32.7566114,-96.7787784,17z",
  mapsEmbed:
    "https://maps.google.com/maps?q=3140+E+Ledbetter+Dr,+Dallas,+TX+75216&z=16&output=embed",
  hours: [
    { days: "Monday", open: "10:30 AM", close: "7:30 PM", closed: false },
    { days: "Tuesday", open: "10:30 AM", close: "7:30 PM", closed: false },
    { days: "Wednesday", open: "10:30 AM", close: "7:30 PM", closed: false },
    { days: "Thursday", open: "10:30 AM", close: "7:30 PM", closed: false },
    { days: "Friday", open: "10:30 AM", close: "8:30 PM", closed: false },
    { days: "Saturday", open: "10:30 AM", close: "8:30 PM", closed: false },
    { days: "Sunday", open: "", close: "", closed: true },
  ],
} as const;

export const TESTIMONIALS = [
  {
    quote:
      "This was the most delicious fish sandwich that I have ever had in my life. I wish this restaurant wasn't so far away from me, otherwise I would visit there all the time.",
    name: "Cam Mac",
    dish: "Fish sandwich",
    stars: 5,
  },
  {
    quote:
      "I've been going here for over two decades and the link baskets have always been my (and it seems like 90% of the neighborhood's) go-to meal. The prices are decent and the people that run it are nice.",
    name: "D Howard",
    dish: "Link basket",
    stars: 5,
  },
  {
    quote:
      "The half BBQ chicken and sauce is just as delicious as it's always been. The young lady who took my order at the window had excellent customer service skills and she made my shake to perfection.",
    name: "Racheal Miller",
    dish: "Half BBQ chicken",
    stars: 5,
  },
  {
    quote:
      "They legit have one of the best BLTs and the lady at the front is always super nice!!",
    name: "Donielle Hedden",
    dish: "BLT",
    stars: 5,
  },
  {
    quote:
      "Cheap hood food served up by our Chinese friends. It's a hole in the wall but everything was good. Hot link basket is on point.",
    name: "Sam H.",
    dish: "Hot link basket · Yelp, 2015",
    stars: 4,
  },
  {
    quote:
      "I found the food here to be great and always hot. Small seating area. Prices run high but occasional treats feel worthwhile. Barbecue sauce stands out.",
    name: "Atly diner",
    dish: "BBQ sauce",
    stars: 4,
  },
] as const;

export const MARQUEE = [
  "HALF BBQ CHICKEN",
  "FISH SANDWICH",
  "HOT LINK BASKET",
  "BLT",
  "CATFISH",
  "PHILLY",
  "CHILI CHEESE FRIES",
  "TEXAS TOAST",
  "SHAKES",
  "OAK CLIFF",
];
