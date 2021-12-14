import pokedex from "../assets/projects/pokedex.png";
import aquarela from "../assets/projects/aquarela.png";
import globo from "../assets/projects/globo.png";
import portfolio from "../assets/projects/portfolio.png";
import montyHall from "../assets/projects/monty_hall.png";
import fontesPromotora from "../assets/projects/fontes_promotora.png";

export const ProjectData = [
  {
    id: 1,
    title: "Fontes Promotora Website",
    about:
      "New Fontes Promotora Website. Containing 10 pages with routing, animation and screen responsivity for mobile and desktop. ",
    tags: [
      "ReactJS",
      "Formik",
      "SASS",
      "MaterialUI",
      "CSS Animation",
      "React Router",
    ],
    demo: "https://fontes-promotora.netlify.app/",
    github: "",
    img: fontesPromotora,
  },
  {
    id: 2,
    title: "Monty Hall Challenge",
    about:
      "Here’s the game: Do you stick with door A (original guess) or switch to the unopened door? Does it matter?",
    tags: ["NextJS", "TypeScript", "SASS"],
    demo: "https://monty-hall-challenge.netlify.app/",
    github: "https://github.com/AlessandroBarreto/monty-hall-door-challenge",
    img: montyHall,
  },
  {
    id: 3,
    title: "My Personal Portfolio",
    about:
      "Personal portfolio created using React, TypeScript and best practices.",
    tags: ["ReactJS", "TypeScript", "SASS", "MaterialUI"],
    demo: "",
    github: "https://github.com/AlessandroBarreto/portfolio",
    img: portfolio,
  },
  {
    id: 4,
    title: "Globo Profile Page",
    about:
      "Profile page to Globo website,containing blog, search and a second page to add insights.   ",
    tags: ["ReactJS", "SASS", "MaterialUI"],
    demo: "https://globo-profile-page.netlify.app/",
    github: "https://github.com/AlessandroBarreto/globo-front",
    img: globo,
  },
  {
    id: 5,
    title: "Aquarela News Page",
    about:
      "News section page to the main Aquarela Advanced Analytics website, with grid and responsivity. ",
    tags: ["ReactJS", "Bootstrap"],
    demo: "https://aquarela-news-page.netlify.app/",
    github: "https://github.com/AlessandroBarreto/Aquarela-Challenge",
    img: aquarela,
  },
  {
    id: 6,
    title: "Pokedex",
    about:
      "My first frontend project using vanilla javascript, DOM manipulation and PokéAPI. ",
    tags: ["JavaScript", "HTML", "CSS"],
    demo: "https://vanilla-pokedex.netlify.app/",
    github: "https://github.com/AlessandroBarreto/Pokedex",
    img: pokedex,
  },
];
