window.addEventListener("load", () => getBox());

let box;

const getBox = async () => {
  try {
    let id = document.URL.split("=").at(-1);
    let res = await fetch(`/api/boxes/${id}`);
    if (res.status == 404) {
      throw new Error("Not found");
    }
    let collectedBox = await res.json();
    box = collectedBox;
    renderBox(collectedBox);
  } catch (err) {
    errorSite();
  }
};

const renderBox = (box) => {
  let boxContainer = document.getElementById("box-content");
  boxContainer.innerHTML = null;

  let boxLayout = `<div id="mainDiv"> 
    <form id="boxForm" onsubmit="handleSave(event);">
    <div style="font-size:2rem;">BoxID #${box.id}</div>
    <label for="colorInput">Color:</label>
    <input name="color" type="text" id="colorInput" required value="${box.color}">
    <label for="sizeInput">Size:</label>
    <input name="size" type="text" id="sizeInput" required value="${box.size}" >
    <label for="containsInput">Contains:</label>
    <input name="contains" type="text" id="containsInput" required value="${box.contains}">
    <div>
    <button type="submit" id="saveButton">Save</button>
    <button type="button" id="deleteButton">Delete</button>
    </div>
    </form>
    </div>`;
  boxContainer.innerHTML = boxContainer.innerHTML + boxLayout;
  let deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", () => deleteBox());
};

const handleSave = async (event) => {
  try {
    let containsValue = document.getElementById("containsInput").value;
    let colorValue = document.getElementById("colorInput").value;
    let sizeValue = document.getElementById("sizeInput").value;
    event.preventDefault();

    box.size = sizeValue;
    box.color = colorValue;
    box.contains = containsValue;

    let res = await fetch("/api/boxes", {
      method: "PUT",
      body: JSON.stringify(box),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status == 404) {
      throw new Error("Not found");
    }
    document.getElementById(
      "mainDiv"
    ).innerHTML = `<h3 style="text-align: center; margin-top:2rem;">Changes saved!</h3>`;
    setTimeout(() => {
      location.href = "/";
    }, 1500);
  } catch (err) {
    console.log(err);
  }
};

const deleteBox = async () => {
  try {
    let res = await fetch(`/api/boxes/${box.id}`, {
      method: "DELETE",
    });
    document.getElementById(
      "mainDiv"
    ).innerHTML = `<h3 style="text-align: center; margin-top:2rem;">Box deleted!</h3>`;
    setTimeout(() => {
      location.href = "/";
    }, 1500);
  } catch (err) {
    console.error(err);
  }
};

const errorSite = () => {
  let errorContainer = document.getElementById("box-content");
  errorContainer.innerHTML = null;

  let errorLayout = `<h1 style="text-align:center;"> 404 This ID does not exist</h1>`;
  errorContainer.innerHTML = errorContainer.innerHTML + errorLayout;
};
