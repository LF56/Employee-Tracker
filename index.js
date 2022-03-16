const table = require('console.table');
const inquirer = require('inquirer');
const db = require('./db/connection');




// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
});

const viewAllEmployees = () => {
  const sql = `SELECT * FROM employees`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw (err)
    }
    console.table(rows)
    mainMenu()
  });
}

const mainMenu = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to view?',
      choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update Employee Role']
    }
  ])
  .then(data => {
    if (data.choice === 'View All Employees'){
      viewAllEmployees()
    }
  })
}

mainMenu()