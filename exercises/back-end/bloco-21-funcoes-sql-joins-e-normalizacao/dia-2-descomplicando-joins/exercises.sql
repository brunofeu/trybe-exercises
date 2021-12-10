SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Theater;

SELECT Mov.title, Box.domestic_sales, Box.international_sales
FROM Pixar.Movies Mov
INNER JOIN Pixar.BoxOffice Box 
ON Mov.id=Box.movie_id;

##############################

SELECT Mov.title, Box.domestic_sales, Box.international_sales
FROM Pixar.Movies Mov
INNER JOIN Pixar.BoxOffice Box 
ON Mov.id=Box.movie_id
WHERE Box.international_sales > Box.domestic_sales;

##############################

SELECT Mov.title, Box.rating
FROM Pixar.Movies Mov
INNER JOIN Pixar.BoxOffice Box 
	ON Mov.id = Box.movie_id
    ORDER BY Box.rating DESC;
    
################################

SELECT T.*, M.title, M.year, M.length_minutes FROM Pixar.Theater as T
LEFT JOIN Pixar.Movies M
ON T.id = M.theater_id
ORDER BY T.name;

################################

SELECT M.title, T.name FROM Pixar.Theater T
RIGHT JOIN Pixar.Movies M
ON M.theater_id= T.id
ORDER BY T.name;

###################################

SELECT M.*, B.rating FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice B
ON M.id=B.movie_id
WHERE B.rating >= 8;