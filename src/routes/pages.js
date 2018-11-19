// core components/views
import IndexPage from "../views/Index.js";
import About from "../views/About.js";
import News from "../views/News.js";

const pagesRoutes = [
  {
    name: "Главная",
    path: "/",
    component: IndexPage,
    exact: true
  },
  {
    name: "Новости",
    path: "/news",
    component: News,
    exact: false
  },
  {
    name: "О компании",
    path: "/about",
    component: About,
    exact: false
  }
];

export default pagesRoutes;
