// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res) {
  var day = "";
  var today = new Date(); //.toLocaleString( 'de-DE', { weekday: 'long' });
  var curDay = today.getDay();

  switch (curDay) {
    case 0:
      day = "Sonntag";
      break;
    case 1:
      day = "Montag";
      break;
    case 2:
      day = "Dienstag";
      break;
    case 3:
      day = "Mittwoch";
      break;
    case 4:
      day = "Donnerstag";
      break;
    case 5:
      day = "Freitag";
      break;
    case 6:
      day = "Samstag";
      break;
    default:
    console.console.log("Fehler. Der Tipp kommt aus anderer Welt! Der Tag in seiner Welt ist = " + curDay);

  }

  // curDay === 1 ? (day = "Montag")
  //       : curDay === 2 ? (day = "Dienstag")
  //       : curDay === 3 ? (day = "Mittwoch")
  //       : currentDay === 4 ? (day = "Donnerstag")
  //       : currentDay === 5 ? (day = "Freitag")
  //       : currentDay === 6 ? (day = "Samstag")
  //       : currentDay === 0 ? (day = "Sonntag")
  //       : console.log("Error: current day is equal to " + curDay),
  res.render("list", {
    kindOfDay: day
  });
});

app.listen(10);
