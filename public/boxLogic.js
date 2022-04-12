window.addEventListener("load", () =>  getBox());

const getBox = async () => {
    let id = document.URL.split('=').at(-1)
    let box = await (await fetch(`/api/boxes/${id}`)).json();
    let boxes = await (await fetch('/api/boxes')).json()
    try {
        renderBox(box);
    } catch {
        errorSite()
        console.error('ASD');
    }
};


const renderBox = (box) => {
    let boxContainer = document.getElementById("box-content");
    boxContainer.innerHTML = null;
    document.getElementById
  
    let boxLayout = `<div id="boxCard"> 
    <div style="font-size:2rem;">BoxID: #${box.id}</div>
    <div>Color:</div>
    <input type="text" id="colorInput" placeholder="${box.color}">
    <div>Contains:</div>
    <input type="text" id="containsInput" placeholder="${box.contains}">
    <div>Size:</div>
    <input type="text" id="sizeInput" placeholder="${box.size}">
    <div>
    <button id="cardButton">Save</button>
    <button id="cardButtonDel">Delete</button>
    </div>
    </div>`;
  boxContainer.innerHTML = boxContainer.innerHTML + boxLayout;
  }

  const errorSite = () => {
    let errorContainer = document.getElementById("box-content");
    errorContainer.innerHTML = null;

    let errorLayout = `<h1> 404 This ID does not exist</h1>`;
  errorContainer.innerHTML = errorContainer.innerHTML + errorLayout;
  
  }