// core components/views
import IndexPage from "../views/Index";
import About from "../views/About";
import NewsContainer from "../containers/NewsContainer";
import NewsDetailContainer from "../containers/NewsDetailContainer";

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
    exact: true,
    hasDetails: true
  },
  {
    name: "Детальная Новость",
    path: "/news/:id",
    component: NewsDetailContainer,
    exact: false,
    isHeaderHidden: true
  },
  {
    name: "О компании",
    path: "/about",
    component: About,
    exact: false
  }
];

export default pagesRoutes;
