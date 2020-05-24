function engCard(eng) {
    return `
    <div class="col-md-4">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title bg-primary">${eng.getName()}</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${eng.getRole()}</li>
            <li class="list-group-item">ID: ${eng.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></a></li>
            <li class="list-group-item">GitHub: <a href="github.com/${eng.getGH()}/">${eng.getGH()}</a></li>
        </ul>
    </div>
    </div>
    </div>
    `
}

function manCard(man) {
    return `
    <div class="col-md-4">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title bg-secondary">${man.getName()}</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${man.getRole()}</li>
            <li class="list-group-item">ID: ${man.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${man.getEmail()}">${man.getEmail()}</a></li>
            <li class="list-group-item">Office Number: <a href="tel:${man.getON()}">${man.getON()}</a></li>
        </ul>
    </div>
    </div>
    </div>
    `
}

function intCard(int) {
    return `
    <div class="col-md-4">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title bg-success">${int.getName()}</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${int.getRole()}</li>
            <li class="list-group-item">ID: ${int.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${int.getEmail()}">${int.getEmail()}</a></li>
            <li class="list-group-item">School: ${int.getSchool()}</li>
        </ul>
    </div>
    </div>
    </div>
    `
}

module.exports = role => {

    console.log(role)
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>My Team</title>
        <link rel="stylesheet" href="stylesheet.css" type="text/css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      </head>
      <body>
        <header class="d-flex bg-danger">
            <div class="d-flex container justify-content-center p-5">
                <h1 class="display-4 justify-content-center">Title</h1>
            </div>
        </header>
        <div class="container">
        <div class="row">
            ${role.map(emp => {
                switch (emp.getRole()) {
                    case "Manager":
                        return manCard(emp);
                        break;
                    case "Engineer":
                        return engCard(emp);
                        break;
                    case "Intern":
                        return intCard(emp);
                        break;
                    default:
                        break;
                }
            }).join('')}
        </div>
       </div>
   </body>
   </html>
   `
};

// module.exports = generateHTML;