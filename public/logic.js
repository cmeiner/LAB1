window.addEventListener("load", (event) => {
  document
    .getElementById("boxButton")
    .addEventListener("click", (e) => getBoxes());
});

const getBoxes = async () => {
  try {
    const res = await fetch("/api/boxes");
    const result = await res.json();
    renderBoxes(result);
  } catch (err) {
    console.error(err);
  }
};

const renderBoxes = (boxes) => {
  let boxContainer = document.getElementById("main-content");
  boxContainer.innerHTML = null;

  for (let box of boxes) {
    let boxLayout = `<div id="renderedCard"> 
      <div style="font-size:2rem;">BoxID: #${box.id}</div>
      <div>Color: ${box.color}</div>
      <div>Contains: ${box.contains}</div>
      <div>Size: ${box.size}</div>
      <a href="boxPage.html?id=${box.id}">
      <button id="goToButton">Go to box</button>
      <a/>
    </div>`;
    boxContainer.innerHTML = boxContainer.innerHTML + boxLayout;
  }
};
