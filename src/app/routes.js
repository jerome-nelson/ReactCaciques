import { HomeComponent, AboutComponent } from "./pages";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeComponent
  },
  {
    name: "About",
    path: "/about",
    component: AboutComponent
  }
];

export default routes;
