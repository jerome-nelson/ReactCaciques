import { HomeComponent, AboutComponent } from "./pages";

const routes = [
  {
    name: "Home",
    schema: "CreativeWork",
    title: "Welcome to The Test Website",
    meta: {
      title: { name: "title", value: "Welcome to The Test Website" },
      description: { name: "description", value: "Welcome to Test Description" }
    },
    path: "/",
    component: HomeComponent
  },
  {
    name: "About",
    schema: "CreativeWork",
    title: "About Page | Welcome to The Test Website",
    meta: {
      title: {
        name: "title",
        value: "About Page | Welcome to The Test Website"
      },
      description: { name: "description", value: "About Webpage" }
    },
    path: "/about",
    component: AboutComponent
  }
];

export default routes;
