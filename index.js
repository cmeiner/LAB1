const express = require("express");
const fs = require("fs");
const port = 3000;
const app = express();
const boxFile = "./boxes.json";
const boxes = require(boxFile);

app.use("/", express.static("public"));
app.use(express.json());

app.get("/api/boxes", (req, res) => {
  res.json(boxes);
});

app.get("/api/boxes/:ID", (req, res) => {
  let boxID = parseInt(req.params.ID);
  let foundBox = boxes.find((box) => box.id === boxID);

  if (!foundBox)
    return res.status(404).json("The requested box could not be found!");
  return res.json(foundBox);
});

app.post("/api/boxes", (req, res) => {
  let newBox = {
    id: boxes.length + 1,
    ...req.body,
  };
  boxes.push(newBox);

  fs.writeFile(boxFile, JSON.stringify(boxes, null, 1), (err) => {
    if (err) return console.error(err);
    return res.json(newBox);
  });
});

app.put("/api/boxes/:ID", (req, res) => {
  let boxID = parseInt(req.params.ID);
  let foundBox = boxes.find((box) => box.id === boxID);

  if (!foundBox)
    return res.status(404).json("The requested box could not be found!");

  let updatedBoxes = boxes.map((box) => {
    if (box.id === boxID) {
      return req.body;
    }
    return box;
  });

  fs.writeFile(boxFile, JSON.stringify(updatedBoxes, null, 1), (err) => {
    if (err) return console.error(err);
    return res.json(req.body);
  });
});

app.delete("/api/boxes/:ID", (req, res) => {
  let boxID = parseInt(req.params.ID);
  let foundBox = boxes.find((box) => box.id === boxID);

  if (!foundBox)
    return res.status(404).json("The requested box could not be found!");

  let updatedBoxes = boxes.filter((box) => box.id !== boxID);
  fs.writeFile(boxFile, JSON.stringify(updatedBoxes, null, 1), (err) => {
    if (err) return console.error(err);
    return res.json("Box#" + boxID + " borttagen.");
  });
});

app.use((req, res) => {
  res.status(404).json("Resource not found");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
