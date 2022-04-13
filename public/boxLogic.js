window.addEventListener("load", () => getBox());

const getBox = async () => {
  let id = document.URL.split("=").at(-1);
  let box = await (await fetch(`/api/boxes/${id}`)).json();
  let boxes = await (await fetch("/api/boxes")).json();
  try {
      renderBox(box);
    } catch {
      errorSite();
    console.error("ASD");
  }
};

const renderBox = (box) => {
  let boxContainer = document.getElementById("box-content");
  boxContainer.innerHTML = null;

  let boxLayout = `<div> 
    <form id="boxForm" onsubmit="handleSave(event);">
    <div style="font-size:2rem;">BoxID #${box.id}</div>
    <label for="colorInput">Color:</label>
    <input name="color" type="text" id="colorInput" placeholder="${box.color}">
    <label for="sizeInput">Size:</label>
    <input name="size" type="text" id="sizeInput" placeholder="${box.size}">
    <label for="containsInput">Contains:</label>
    <input name="contains" type="text" id="containsInput" placeholder="${box.contains}">
    <div>
    <button type="submit" id="saveButton">Save</button>
    <button type="button" id="deleteButton">Delete</button>
    </div>
    </form>
    </div>`;
  boxContainer.innerHTML = boxContainer.innerHTML + boxLayout;
  buttonLogic();
  // https://www.delftstack.com/howto/javascript/javascript-get-input-value/
};

const handleSave = async (event) => {
    let inputValue = document.getElementById('containsInput').value;
    console.log(inputValue)
    event.preventDefault();
    let id = document.URL.split("=").at(-1);
    let box = await (await fetch(`/api/boxes/${id}`)).json();
    let data = new FormData(event.target)
    let newBoxInfo = (Object.fromEntries(data.entries()));
    let boxes = await (await fetch("/api/boxes")).json();
    // let updatedBox = boxes.map((newBoxInfo))
    console.log(newBoxInfo)
}

const buttonLogic = () => {
  let dBut = document.getElementById("deleteButton");
  dBut.addEventListener("click", () => console.log("Delete"));
};

const errorSite = () => {
  let errorContainer = document.getElementById("box-content");
  errorContainer.innerHTML = null;

  let errorLayout = `<h1> 404 This ID does not exist</h1>`;
  errorContainer.innerHTML = errorContainer.innerHTML + errorLayout;
};
