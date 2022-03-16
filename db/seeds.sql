INSERT INTO departments
    (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO roles
    (title, salary, department_id)
VALUES
('Sales Lead', 100000, 4),
('Salesperson', 80000, 4),
('Lead Engineer', 150000, 1),
('Software Engineer', 120000, 1),
('Account Manager', 160000, 2),
('Accountant', 125000, 2),
('Legal Team Lead', 250000, 3),
('Lawyer', 190000, 3 );

INSERT INTO employees
    (first_name, last_name, role_id, manager_id)
VALUES
('Abby', 'Manuel', 1, NULL),
  ('Bill', 'Smith', 3, NULL ),
  ('Charles', 'Gaveston', 4,2 ),
  ('Danelle', 'LeRoi',7, NULL),
  ('Esther', 'Mansfield', 2, 1 ),
  ('Fink', 'Carrington', 5, NULL),
  ('George', 'Bellamy', 6,6  ),
  ('Hannah', 'Summers',4, 2 ),
  ('Isabelle', 'Butler', 2, 1 ),
  ('Josh', 'Steven', 8, 4);