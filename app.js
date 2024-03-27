// Importing the pages
import Index from "./pages/Index.js";
import About from "./pages/About.js";

// Route
Route({path: "Index", element: Index});
Route({path: "About", element: About});

VCX({root: "#root"}, routes);