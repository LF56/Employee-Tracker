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
const viewAllRoles = () => {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) {
      throw (err)
    }
    console.table(rows)
    mainMenu()
  });
}

const viewAllDepartments = () => {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) {
      throw (err)
    }
    console.table(rows)
    mainMenu()
  })
}

const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'department',
      message: 'What is the name of your department?',
    }
  ]).then(data => {
    const sql = `INSERT INTO departments (name) VALUES ('${data.department}');`;
    db.query(sql, (err, rows) => {
      if (err) {
        throw (err)
      }
      console.table(rows)
      mainMenu()
    })
  })
}
const addRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of the new role?',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary of the new role?',
    },
    // {
    //   type: 'input',
    //   name: 'department_id',
    //   message: 'What is the department ID for this role?',
    // },
  ]).then(data => {
    const sql = `SELECT name FROM departments;`;
    db.query(sql, (err, rows) => {
      let departmentChoice = [] ;
      for (i = 0; i < data.length; i++) {
        if (departmentChoice[i].name === data.department_id) {
          department_id = departmentChoice[i].department_id
        }
      }

      rows.forEach((element)=> {
        departmentChoice.push(element.name)
      })
      let departmentName = {
        type: 'list',
          name: 'choice',
            message: 'What is the new department name?',
              choices: departmentChoice
      } 
      inquirer.prompt(departmentName)
      .then(data1 => console.log(data1) )
    })
  })
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
      if (data.choice === 'View All Employees') {
        viewAllEmployees()
      }
      if (data.choice === 'View All Roles') {
        viewAllRoles()
      }
      if (data.choice === 'View All Departments') {
        viewAllDepartments()
      }
      if (data.choice === 'Add A Department') {
        addDepartment()
      }
      if (data.choice === 'Add A Role') {
        addRole()
      }
    })
}

mainMenu()