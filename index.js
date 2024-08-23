let express = require("express");

//initialize express server
let app = express();
let fs = require("fs");
let path = require("path");
let dirName = path.join(__dirname, "timeStamps");

app.get("/", (req, res) => {
  res.send("Hi This is my web server");
});
app.get("/date-time", (req, res) => {
  let date = new Date();
  let currentTime = date.toUTCString().slice(0, -3);

  //splitting the time to get a file name
  let filename = String(currentTime).split(" ");
  let file = filename.join("");
  let content = `The Current Timestamp is : ${currentTime}`;

  fs.writeFile(`${dirName}/${file}.txt`, content, (err) => {
    if (err) {
      console.log(err);
      res.send("Error in Writing the file");
      return;
    }
    res.sendFile(path.join(dirName, `${file}.txt`));
  });
});

//Retrive text files in particular folder
app.get("/retrive-files", (req, res) => {
  fs.readdir(dirName, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
//listen to server
app.listen(9000, () => console.log(`Server Started in localhost:9000`));
