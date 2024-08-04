const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/templates/404.html",
    "/": "/templates/index.html",
    "/management": "/templates/monitoring.html",
    "/transactions": "/templates/transfers.html",
    "/payments": "/templates/payments.html",
    "/main_page/home.html": "/templates/index.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("myInfo").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
