// core components/views
import IndexPage from "../views/Index.js";
import About from "../views/About.js";
import NewsContainer from "../containers/NewsContainer.js";

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
    component: NewsContainer,
    exact: true
  },
  {
    name: "О компании",
    path: "/about",
    component: About,
    exact: false
  }
];

export default pagesRoutes;
