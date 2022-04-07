window.addEventListener("load", (event) => {
  document
    .getElementById("button")
    .addEventListener("click", (e) => getBoxes());
});

const getBoxes = async () => {
  try {
    const res = await fetch("../boxes.json");
    const result = await res.json();
    renderBox(result);
  } catch (err) {
    console.error(err);
  }
};

const renderBox = (boxes) => {
  let boxContainer = document.getElementById("main-content");
  boxContainer.innerHTML = null;

  for (let box of boxes) {
    let boxLayout = `<h1>${box.id}</h1>`;
    boxContainer.innerHTML = boxContainer.innerHTML + boxLayout;
  }
};
