let employeeCards = [];

function employeeHTML(team) {
  let employee;
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      employee = `<div class="col-4 px-3">
            <div class="card text-white bg-primary mb-3">
              <div class="card-body">
              <div class="card-header">
              <h2 class="text-capitalize">${team[i].name}</h2>
              <h4><i class="fas fa-user-tie"></i> ${team[i].getRole()}</h4>
            </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Employee ID: <strong>${
                    team[i].id
                  }</strong></li>
                  <li class="list-group-item">Email: <a href="mailto:${
                    team[i].email
                  }">${team[i].email}</a></li>
                  <li class="list-group-item">Office Number: <strong>${
                    team[i].officeNumber
                  }</strong></li>
                </ul>
              </div>
            </div>
          </div>`;

      employeeCards.push(employee);
    } else if (team[i].getRole() === "Engineer") {
      employee = `<div class="col-4 px-3">
            <div class="card text-white bg-secondary mb-3">
              <div class="card-body">
              <div class="card-header">
              <h2 class="text-capitalize">${team[i].name}</h2>
              <h4><i class="fas fa-laptop-code"></i> ${team[i].getRole()}</h4>
            </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Employee ID: <strong>${
                    team[i].id
                  }</strong></li>
                  <li class="list-group-item">Email: <a href="mailto:${
                    team[i].email
                  }">${team[i].email}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${
                    team[i].gitHub
                  }" target="_blank">${team[i].gitHub}</a></li>
                </ul>
              </div>
            </div>
          </div>`;

      employeeCards.push(employee);
    } else {
      employee = `<div class="col-4 px-3">
            <div class="card text-white bg-success mb-3">
              <div class="card-body">
              <div class="card-header">
              <h2 class="text-capitalize">${team[i].name}</h2>
              <h4><i class="fas fa-user-graduate"></i> ${team[i].getRole()}</h4>
            </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Employee ID: <strong>${
                    team[i].id
                  }</strong></li>
                  <li class="list-group-item">Email: <a href="mailto:${
                    team[i].email
                  }">${team[i].email}</a></li>
                  <li class="list-group-item">School: ${team[i].school}</li>
                </ul>
              </div>
            </div>
          </div>`;

      employeeCards.push(employee);
    }
  }
}

function generateHTML(team) {
  employeeHTML(team);

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
    crossorigin="anonymous"
  />
    <title>Our Team</title>
  </head>
  <body>
    <div class="jumbotron-fluid bg-danger text-white">
      <div class="container pt-3 pb-5">
        <h1 class="display-2 fw-bold">Our Team</h1>
      </div>
    </div>
    <div class="row row-cols-4 g-3 pt-3 ms-5 me-5 justify-content-center">
    ${employeeCards.join("")}
  </div>
  </body>
</html>`;
}

module.exports = {
  generateHTML,
  employeeHTML,
};
