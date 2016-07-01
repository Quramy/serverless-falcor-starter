
import { Model } from "falcor";
import HttpDataSource from "falcor-http-datasource";

const url = require("../config.json").endpoint;

const source = new HttpDataSource(url, {
  crossDomain: true,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

const model = new Model({
  source,
});

const getBtn = document.getElementById("modelGet");
getBtn.addEventListener("click", () => {
  model.get("greeting").then(({json}) => {
    alert(JSON.stringify(json));
  });
});

const setBtn = document.getElementById("modelSet");
setBtn.addEventListener("click", () => {
  model.set({path: "greeting", value: "bye"}).then(() => {
    alert("Done. Click the Get button again!");
  });
});

