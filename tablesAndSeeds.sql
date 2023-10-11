DROP TABLE IF EXISTS users; 

-- Table Definition
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    username VARCHAR(255),
    dob DATE
);

TRUNCATE TABLE users RESTART IDENTITY CASCADE;

INSERT INTO users ("name", "email", "username", "dob") VALUES
('Pablo', 'pablo@example.com', 'pabs', '1979-11-01'),
('May', 'may@example.com', 'may', '1978-11-01'),
('Sabina', 'sabina@example.com', 'sabby', '1983-11-01')
('Ciara', 'ciara@example.com', 'kiki', '1982-09-29')
;
