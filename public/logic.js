window.addEventListener("load", (event) => {
  document
    .getElementById("boxButton")
    .addEventListener("click", (e) => getBoxes());
});

const getBoxes = async () => {
  try {
    const res = await fetch("/boxes");
    const result = await res.json();
    renderBox(result);
  } catch (err) {
    console.error(err);
  }
};

// const goToBox = asynd () => {
//   try {
//     const res = await fetch('/boxes/:ID')
//   }
// }

const renderBox = (boxes) => {
  let boxContainer = document.getElementById("main-content");
  boxContainer.innerHTML = null;

  for (let box of boxes) {
    let boxLayout = `<div id="renderedCard"> 
      <div>BoxID: #${box.id}</div>
      <div>Color: ${box.color}</div>
      <div>Contains: ${box.contains}</div>
      <div>Size: ${box.size}</div>
      <button id="goToButton">Go to box </button>
    </div>`;
    boxContainer.innerHTML = boxContainer.innerHTML + boxLayout;
  }
};
