
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

model.get("greeting").then(result => {
  console.log(result);
}).then(() => {
  return model.set({path: "greeting", value: "bye"});
}).then(result => {
  console.log(result);
});

