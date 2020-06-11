#Exercicio1
A) Chave estrangeira (foreign key) é o campo que estabelece o relacionamento entre duas tabelas
B)
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

SELECT * FROM Rating;
SELECT * FROM Movie;

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"001",
"Filme muito interessante",
9,
"004"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"002",
"Amazing movie!",
8,
"003"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"003",
"Mais ou menos",
6,
"001"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"004",
"Ótimo filme",
10,
"002"
);
```

C) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails Foreing key está falha.

D) ALTER TABLE Movie DROP COLUMN rating;

E)
```
ALTER TABLE Movie DROP COLUMN rating;
    
DELETE 
FROM Movie 
WHERE id="002";    
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.

#Exercicio2
A) Cria uma tabela que relaciona uma lista de atores de determinado filme.

B)
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);


INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"004",
"002"
);
```
C)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hamilton_igor_delesposti`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

D)
```
DELETE 
FROM Actor 
WHERE id="002";
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hamilton_igor_delesposti`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

#Exercicio3
A) ON é a condição que as tabelas serão juntadas.
B)
```
SELECT Movie.id AS 'Movie', Movie.title AS 'Title', Rating.rate AS 'Rating' 
FROM Movie
JOIN Rating 
ON Movie.id = Rating.movie_id;
```

#Exercicio4
A)
```
SELECT Movie.id AS 'ID Movie', Movie.title AS 'Título', Rating.rate AS 'Nota', Rating.comment AS 'Comentario' 
FROM Movie
LEFT JOIN Rating 
ON Movie.id = Rating.movie_id;
```
B)
```
SELECT Movie.id, Movie.title, MovieCast.actor_id 
FROM Movie 
RIGHT JOIN MovieCast 
ON Movie.id = MovieCast.movie_id;
```

C)
```
SELECT AVG(Rating.rate), Movie.title
FROM Movie
LEFT JOIN Rating
ON Movie.id = Rating.movie_id
GROUP BY (Movie.id);
```

#Exercicio5
A) Ele usa dois JOIN para juntas as informações de três tabelas de uma vez só.

B)
```
SELECT Movie.id AS 'Movie_ID', Movie.title AS 'TITLE', Actor.id AS 'Actor_ID', Actor.name AS 'NAME_ACTOR'
FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

D)
```
SELECT
	Movie.id AS 'Movie_ID',
    Movie.title AS 'Título',
    Actor.id AS 'Actor_ID',
    Actor.name AS 'Name_Actor',
    Rating.rate AS 'NOTA',
    Rating.comment AS 'COMENTÁRIO'
FROM Movie
LEFT JOIN Rating ON Rating.movie_id = Movie_id
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

#Exercicio6
A) Relação M:N
B) É uma query com dois foreign key referenciando à tabela Movie
C)
```
INSERT INTO Oscars (oscar_id, oscar_name, movie_id)
VALUES(
"111",
"Óscar de melhor filme audiovisual",
"001"
);

INSERT INTO Oscars (oscar_id, oscar_name, movie_id)
VALUES(
"222",
"Óscar de melhor ator coadjuvante",
"004"
);
```
D)
```
SELECT Movie.title AS 'Movies', Oscars.oscar_name AS 'Oscars'
FROM Movie
LEFT JOIN Oscars 
ON Movie.id = Oscars.movie_id;
```



