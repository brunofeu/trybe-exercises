SELECT * FROM sakila.actor;

SELECT * FROM sakila.film_actor;

SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

SELECT * FROM sakila.address;
SELECT * FROM sakila.staff;

SELECT S.first_name, S.last_name, A.address
FROM sakila.address A
INNER JOIN sakila.staff S ON A.address_id = S.address_id;

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address
FROM sakila.customer C
INNER JOIN sakila.address A ON C.address_id = A.address_id
ORDER BY first_name DESC
LIMIT 100;

SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;

SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer C
INNER JOIN sakila.address A ON C.address_id = A.address_id
WHERE A.district = 'California' AND C.first_name LIKE '%rene%';

SELECT C.first_name, COUNT(A.address)
FROM sakila.customer C
INNER JOIN sakila.address A ON C.address_id = A.address_id
WHERE C.active IS TRUE
GROUP BY C.customer_id
ORDER BY C.first_name DESC;


SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT S.first_name, S.last_name, AVG(P.amount)
FROM sakila.payment P
INNER JOIN sakila.staff S ON S.staff_id= P.staff_id
WHERE YEAR(P.payment_date)='2006'
GROUP BY S.staff_id;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT act.actor_id, act.first_name, FA.film_id, film.title
FROM sakila.film film
INNER JOIN sakila.film_actor FA
INNER JOIN sakila.actor act
	ON film.film_id=FA.film_id AND FA.actor_id=act.actor_id;
    

SELECT * FROM hr.employees;

SELECT E.first_name, M.FIRST_NAME
FROM hr.employees E
INNER JOIN hr.employees M ON E.MANAGER_ID = M.EMPLOYEE_ID
WHERE E.DEPARTMENT_ID<>M.DEPARTMENT_ID;

SELECT M.first_name, COUNT(*) 
FROM hr.employees AS E
INNER JOIN hr.employees AS M
	ON M.EMPLOYEE_ID=E.MANAGER_ID
    GROUP BY M.EMPLOYEE_ID;
    