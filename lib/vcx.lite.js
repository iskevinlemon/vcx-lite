/*
 * VCX lite - vcx.lite.js
 * Version: 1.0
 * License: MIT
 */

/**
 * Selects the root element based on the given selector.
 * @param {string} selector - The CSS selector to select the root element.
 * @returns {HTMLElement} The root element.
 */
var root = document.querySelector("#root");

/**
 * Adds a route to the window's routes array.
 * @param {Object} config - The configuration object for the route.
 * @param {string} config.path - The path of the route.
 * @param {Function} config.element - The function returning the element for the route.
 */
window.routes = []; // Holds all the route paths
window.Route = function(config){
    routes.push({
        path: config.path, 
        element: config.element
    });
}

/**
 * Initializes the routing system with the given configuration and routes.
 * @param {Object} config - The configuration object.
 * @param {Array} routes - The routes array.
 */
window.VCX = function(config, routes){
    var routes = routes;
    if(routes.length !== 0){
        // Check if hash is empty and set default route
        // default route is Index
        if(window.location.hash === ""){
            window.location.hash = "#/Index";
        } 
        else{
            // If hash is not empty, render the initial route
            renderRoute();
        }
    }
}

/**
 * Renders the route based on the current hash.
 */
function renderRoute(){
    var currentRoute = window.location.hash.replace("#/", "");
    var route = routes.find(route => route.path === currentRoute);
    if(route){
        // console.log(`Route: ${route.path}`)
        root.innerHTML = route.element();
    }
}

/**
 * Event listener to handle link clicks and update hash.
 * @param {Event} event - The click event.
 */
document.addEventListener("click", function(event){
    if(event.target.tagName === "A" && 
    event.target.getAttribute("href").startsWith("#/")){
        var path = event.target.getAttribute("href").replace("#/", "");
        window.location.hash = `#/${path}`;
        event.preventDefault(); // Prevent default link behavior
    }
});

/**
 * Event listener to render route when hash changes.
 */
window.onhashchange = renderRoute;
