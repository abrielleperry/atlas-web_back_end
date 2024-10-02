-- create the index using the first letter and score
ALTER TABLE names ADD COLUMN first_letter CHAR(1) GENERATED ALWAYS AS (SUBSTRING(name, 1, 1)) STORED;

CREATE INDEX idx_name_first_score ON names (first_letter, score);
