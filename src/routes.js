import Home from "./Pages/Home";
import About from "./elements/About";
import Contact from "./elements/Contact";
import Services from "./elements/Service";

/**
 * Your application's routes definition.
 * @type {Array}
 *
 * Route path should be unique and MUST not start with `/`.
 * The component is the page that will be rendered.
 * For clarity and organization, puts page components in the `src/Pages` directory.
 */
export const routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "about",
    component: About,
  },
  {
    path: "contact",
    component: Contact,
  },
  {
    path: "services",
    component: Services,
  },
  // more routes here
];
