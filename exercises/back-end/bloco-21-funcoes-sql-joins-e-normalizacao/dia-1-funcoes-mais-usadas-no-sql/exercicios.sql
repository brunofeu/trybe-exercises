SELECT * FROM hr.employees;
SELECT distinct department_id FROM hr.employees;

SELECT MAX(salary) FROM hr.employees;

SELECT MAX(salary) - MIN(salary) FROM hr.employees;

SELECT MIN(salary) FROM hr.employees;

SELECT job_id, AVG(salary), count(job_id) FROM hr.employees
GROUP BY job_id
ORDER BY AVG(salary) DESC;

SELECT SUM(salary) FROM hr.employees;

SELECT 
	MAX(salary),
    MIN(salary),
    SUM(salary),
    AVG(salary)
    FROM hr.employees;
    
SELECT COUNT(*) FROM hr.employees
	GROUP BY job_id
    having job_id = 'IT_PROG';
    
SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id;

SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

SELECT job_id, AVG(salary) FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY AVG(salary)DESC;

SELECT department_id, AVG(salary), COUNT(*) FROM hr.employees
GROUP BY department_id
HAVING COUNT(*) > 10;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '717')
WHERE phone_number LIKE '515%';

SELECT * FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 7; 

SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;

SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;

SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;

SELECT UCASE(CONCAT(first_name,' ', last_name))FROM hr.employees;

SELECT last_name, hire_date FROM hr.employees
WHERE MONTH(hire_date) = 7
AND YEAR(hire_date) =1987;

SELECT first_name, last_name, DATEDIFF(NOW(), hire_date) FROM hr.employees;
