# Exercício1
A) Ele irá matar a coluna Salary.

B) Irá alterar o nome da coluna Gender para Sex limitando a 6 caracteres.

C) Altera a coluna Gender

D) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

# Exercício2
A)
```
UPDATE Actor
SET name = "Débora Seco"
WHERE id = "003";
```
B)
```
UPDATE Actor
SET name = "Juliana Pães"
WHERE id = "008";
```

C)
```
UPDATE Actor
SET 
name = "Juliana Paes",
birth_date = "1990-02-15",
salary = 600000,
gender = "male"
WHERE id = "008";
```

D) Ele dá sucesso no comando porém não altera nenhuma linha/coluna.
```
UPDATE Actor
SET 
name = "Juliana Paes",
birth_date = "1990-02-15",
salary = 600000,
gender = "male"
WHERE id = "015";
```

# Exercicio3
A) 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

B)
```
DELETE FROM Actor 
WHERE
	gender = "male" AND
    salary > 1000000;
```

# Exercicio4
A)
```
SELECT MAX(salary) FROM Actor;
```
B)
```
SELECT MIN(salary) FROM Actor
WHERE
	gender="female";
```

C)
```
SELECT COUNT(*) FROM Actor 
WHERE gender = "female";
```

D)
```
SELECT SUM(salary) FROM Actor;
```
# Exercicio5
A) Ele retornou a quantidade de atores e atrizes através do gender.

B)
```
SELECT id, name FROM Actor
	ORDER BY name DESC;
```

C)
```
SELECT * FROM Actor 
	ORDER BY salary;
```

D)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

E) 
```
SELECT AVG(salary), gender 
FROM Actor
GROUP BY gender;
```

# Exercicio6
A)
```
SELECT * FROM Movie;

ALTER TABLE Movie 
ADD playing_limit_date DATE;
```

B)
```
ALTER TABLE Movie CHANGE rating
rating FLOAT;

```
a

