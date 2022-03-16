INSERT INTO department
    (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO roles
    (title, salary, department_id)
VALUES
('Sales Lead', 100000, ),
('Sales Representative', 80000,),
('Lead Engineer', 150000,),
('Software Engineer', 120000),
('Account Manager', 160000),
('Legal Team Lead', 250000),
('Lawyer', 190000, );

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
('Abby', 'Manuel', 1, 2),
  ('Bill', 'Smith', 3, NULL ),
  ('Charles', 'Gaveston', 4, 3 ),
  ('Danelle', 'LeRoi', 3, NULL ),
  ('Esther', 'Mansfield', 2, 5),
  ('Fink', 'Carrington', 5, 2),
  ('George', 'Bellamy', 6, NULL ),
  ('Hannah', 'Summers',4,3 ),
  ('Isabelle', 'Butler', 2, 5),
  ('Josh', 'Steven',1, 2 );