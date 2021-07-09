const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./utils/generateHTML");

const team = [];
const employeeID = [];

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Enter our Team Manager's name.",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "You cannot leave this area blank.";
    },
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter our Team Manager's employee ID number",
    validate: (answer) => {
      const num = answer.match(/^[1-9]\d*$/);
      if (num) {
        return true;
      }
      return "You must enter a number greater than 0.";
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter our Team Manager's email address",
    validate: (answer) => {
      const email = answer.match(/\S+@\S+\.\S+/);
      if (email) {
        return true;
      }
      return "You must enter a valid email address";
    },
  },
  {
    type: "input",
    name: "managerOffice",
    message: "Enter our Team Manager's office number",
    validate: (answer) => {
      const num = answer.match(/^[1-9]\d*$/);
      if (num) {
        return true;
      }
      return "You must enter a number greater than 0";
    },
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "Enter our Engineer's name",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "You cannot leave this area blank.";
    },
  },
  {
    type: "input",
    name: "engineerId",
    message: "Enter our engineer's employee ID number",
    validate: (answer) => {
      const num = answer.match(/^[1-9]\d*$/);
      if (num) {
        if (employeeID.includes(answer)) {
          return "ID is already in use. Please enter a different ID number.";
        } else {
          return true;
        }
      }
      return "You must enter a number greater than 0";
    },
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter our engineer's email address",
    validate: (answer) => {
      const email = answer.match(/\S+@\S+\.\S+/);
      if (email) {
        return true;
      }
      return "You must enter a valid email address";
    },
  },
  {
    type: "input",
    name: "engineerGitHub",
    message: "Enter our engineer's GitHub username",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "You cannot leave this area blank.";
    },
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Enter our intern's name",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "You cannot leave this area blank.";
    },
  },
  {
    type: "input",
    name: "internId",
    message: "Enter our intern's employee ID number",
    validate: (answer) => {
      const num = answer.match(/^[1-9]\d*$/);
      if (num) {
        if (employeeID.includes(answer)) {
          return "ID is already in use. Please enter a different ID number.";
        } else {
          return true;
        }
      }
      return "You must enter a number greater than 0";
    },
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter our intern's email address",
    validate: (answer) => {
      const email = answer.match(/\S+@\S+\.\S+/);
      if (email) {
        return true;
      }
      return "You must enter a valid email address";
    },
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter the university our intern attended",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "You cannot leave this area blank.";
    },
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOffice
    );
    team.push(manager);
    employeeID.push(answers.managerId);
    employeeRole();
  });
}

function employeeRole() {
  const roleQuestion = [
    {
      type: "list",
      name: "role",
      message:
        "Do you want to add an additional employee to our team? Please select our new employee's role.",
      choices: ["Engineer", "Intern", "I am done editing our team"],
    },
  ];
  inquirer.prompt(roleQuestion).then((response) => {
    const role = response.role;
    switch (role) {
      case "Engineer":
        engineerCard();
        break;
      case "Intern":
        internCard();
        break;
      default:
        writeHTML();
    }
  });
}

function engineerCard() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGitHub
    );
    team.push(engineer);
    employeeID.push(answers.engineerId);
    employeeRole();
  });
}

function internCard() {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    team.push(intern);
    employeeID.push(answers.internId);
    employeeRole();
  });
}

function writeHTML() {
  fs.writeFile("index.html", render.generateHTML(team), (err) => {
    err ? console.log(err) : console.log("index.html generated");
  });
  console.log(team);
}

init();
