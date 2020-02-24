window.addEventListener("load", () => {
  const el = $("#app");

  // Compile Handlebar Templates
  const firstTemplate = Handlebars.compile($("#first-template").html());
  const secondTemplate = Handlebars.compile($("#second-template").html());
  const thirdTemplate = Handlebars.compile($("#third-template").html());
  const fourthTemplate = Handlebars.compile($("#fourth-template").html());
  const homeTemplate = Handlebars.compile($("#home-template").html());

  const html = homeTemplate();
  el.html(html);
  // Router Declaration
  const router = new Router({
    mode: "history",
    page404: (path) => {
      const html = homeTemplate();
      el.html(html);
    },
  });

  router.add("/", () => {
    let html = homeTemplate();
    el.html(html);
  });

  router.add("/first", () => {
    let html = firstTemplate();
    el.html(html);
  });

  router.add("/second", () => {
    let html = secondTemplate();
    el.html(html);
  });

  router.add("/third", () => {
    let html = thirdTemplate();
    el.html(html);
  });

  // Navigate app to current url
  router.navigateTo(window.location.pathname);

  
  $("a").on("click", event => {
    // Block browser page load
    event.preventDefault();

    // Navigate to clicked url
    const href = target.attr("href");
    const path = href.substr(href.lastIndexOf("/"));
    router.navigateTo(path);
  });
});
