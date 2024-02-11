{
  const welcome = () => {
    console.log("Cześć");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");

    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
  };

  const init = () => {
    let button = document.querySelector(".js-button");

    button.addEventListener("click", toggleBackground);

    welcome();
  };
  init();
}
