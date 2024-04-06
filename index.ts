#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [
  "tahajud",
  "sehri time",
  "iftari time",
  "Ramadan coding Assignments",
];
let condition = true;

console.log("Welcome to todos! Created by Muhammad Umer");
while (condition) {
  let choiceTodo = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Please select,What do you need to do in todos?",
    choices: ["add in todo", "read todo", "update todo", "delete todo", "exit"],
  });
  if (choiceTodo.select === "read todo") {
    console.log(todos);
  } else if (choiceTodo.select === "add in todo") {
    console.log("Your current todo list:", todos);
    let todosQuestions = await inquirer.prompt([
      {
        name: "firstQuestion",
        type: "input",
        message: "What would you like to add in your todos?",
      },
      {
        name: "secondQuestion",
        type: "confirm",
        message: "Would you like to add more in your todos?",
        default: "true",
      },
    ]);
    if (todosQuestions.firstQuestion != "") {
      todos.push(todosQuestions.firstQuestion);
      console.log(todos);
    } else {
      console.log("Please add something in todos!");
    }
    condition = todosQuestions.secondQuestion;
  } else if (choiceTodo.select === "update todo") {
    console.log(todos);
    let upItem = await inquirer.prompt({
      name: "item",
      type: "number",
      message: "Select number of item you want to update in todo: ",
    });
    let updated = await inquirer.prompt({
      name: "append",
      type: "input",
      message: "Update: ",
    });
    if (upItem.item > 0 && upItem.item <= todos.length) {
      todos[upItem.item - 1] = `${updated.append}`;
      console.log(todos);
    } else {
      console.log("Please select invalid item number!");
    }
  } else if (choiceTodo.select === "delete todo") {
    console.log(todos);
    let delkey = await inquirer.prompt({
      name: "key",
      type: "number",
      message: "Select number of item you want to delete in todo: ",
    });
    if (delkey.key > 0 && delkey.key <= todos.length) {
      todos = todos.filter((ele, ind) => ind !== delkey.key - 1);
      console.log("", todos);
    } else {
      console.log("Please Select valid item number");
    }
  } else if (choiceTodo.select === "exit") {
    console.log(todos);
    condition = false;
  }
}
