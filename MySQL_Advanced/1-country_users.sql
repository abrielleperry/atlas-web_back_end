-- creates table users with attrs id, email and name
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(225),
    country ENUM('US', 'CO', 'TN') NOT NULL DEFAULT 'US'
);
