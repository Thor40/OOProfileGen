function engCard(eng) {
    return `
    <div class="card bg-danger" style="width: 18rem;">
        <div class="card-header">
            ${eng.getName()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${eng.getRole()}</li>
            <li class="list-group-item">ID: ${eng.getID()}</li>
            <li class="list-group-item">Email: ${eng.getEmail()}</li>
            <li class="list-group-item">GitHub: ${eng.getGH()}</li>
        </ul>
    `
}

function manCard(man) {
    return `
    <div class="card bg-success" style="width: 18rem;">
        <div class="card-header">
            ${man.getName()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${man.getRole()}</li>
            <li class="list-group-item">ID: ${man.getID()}</li>
            <li class="list-group-item">Email: ${man.getEmail()}</li>
            <li class="list-group-item">GitHub: ${man.getON()}</li>
        </ul>
    `
}

function intCard(int) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            ${int.getName()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${int.getRole()}</li>
            <li class="list-group-item">ID: ${int.getID()}</li>
            <li class="list-group-item">Email: ${int.getEmail()}</li>
            <li class="list-group-item">GitHub: ${int.getSchool()}</li>
        </ul>
    `
}

module.exports = role => {

    console.log(role)
    return `
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
       <title>test</title>
   </head>
   <body>
        <div class="container">
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
        })}
       </div>
   </body>
   </html>
   `
};

// module.exports = generateHTML;