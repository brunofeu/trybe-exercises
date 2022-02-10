SELECT * FROM sakila.customer;

SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name, last_name;
#################################
SELECT * FROM sakila.film LIMIT 100;

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title;
##########################################
SELECT * FROM sakila.customer;

SELECT COUNT(*) FROM sakila.customer
WHERE store_id = 1 AND active IS TRUE;
###################################

SELECT * FROM sakila.customer
WHERE store_id = 1 AND ACTIVE IS NOT TRUE;
#########################################
SELECT * FROM sakila.film;

SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;

SELECT * FROM sakila.film
WHERE title LIKE '%ace%';

SELECT * FROM sakila.film
WHERE description LIKE '%china';

SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%documentary%';

SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';

SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';
#####################################
SELECT * FROM sakila.payment;

SELECT * FROM sakila.payment
WHERE payment_id IN (269, 239, 126, 399, 142);

SELECT * FROM sakila.address;

SELECT * FROM sakila.address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

######################################

SELECT * FROM sakila.customer;

SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name, last_name;

SELECT email FROM sakila.customer
WHERE address_id BETWEEN(172) AND (176)
ORDER BY first_name;

SELECT * FROM sakila.payment;

SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';

SELECT * FROM sakila.film;
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration between 3 and 6
ORDER BY rental_duration DESC, title;

SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;

SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

SELECT * FROM sakila.rental;

SELECT DATE(rental_date), YEAR(rental_date), MONTH(rental_date), DAY(rental_date), HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date) FROM sakila.rental
WHERE rental_id = 10330;

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) >= 22;
