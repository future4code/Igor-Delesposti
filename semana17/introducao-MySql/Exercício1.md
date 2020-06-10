# Exercício1
a)VARCHAR - string de no máximo 255 caracteres
DATE - representa uma data (YYYY-MM-DD)
b)SHOW DATABASES- retorna o banco de dados conectado.
SHOW TABLES - retorna as linhas e colunas da tabela.
c)Retorna todos os dados da tabela.
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);

DESCRIBE Actor;
```
# Exercício2
B)Código de erro: 1062. Entrada duplicada '001' para a chave 'PRIMARY' - Não podemos adicionar um novo elemento com uma Primary Key já existente no nosso banco de dados.
C)Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
D)Código de erro: 1364. O campo 'name' não tem um valor padrão.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Cássia Kiss",
  400000,
  "1949-04-18", 
  "male"
);
```
E)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Isis Valverde",
  1500000,
  "1980-04-20", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Marina Ruy Barbosa",
  2380000,
  "1990-01-10", 
  "female"
);
```
# Exercício3
a)
```
SELECT * FROM Actor WHERE gender = "female";
```

b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c)Ele retorna todas linhas/colunas com o valor Null
```
SELECT * from Actor WHERE gender = "invalid";
```
d) 
```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```

e)Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
```
SELECT id, name from Actor WHERE id = "002";
```

# Exercício4
a)A query serve para encontrar atores e atrizes que o nome começa com a letra "A" ou "J" e que recebem salários acima de R$300.000

b)
```
SELECT * FROM Actor WHERE name NOT LIKE "T%" AND salary > 350000;
```

c)
```
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
```

d)
```
SELECT * FROM Actor WHERE (name LIKE "%A%"or "%a%" or "%g%" or "%G%") AND salary BETWEEN 350000 AND 900000;
```

# Exercicio5
a) Ela cria uma tabela de Filmes com ID, Title não podendo ser vazio e único, synopsis do tipo texto não podendo ser vazio, data de entrega do tipo DATE não podendo ser vazio e nota de avaliação do tipo INTEIRO.
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

SHOW TABLES;
```
b)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```
c) 
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12/27", 
  10
);
```
d)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Sinopse: Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```
e)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004", 
  "Os Farofeiros",
  "Quatro colegas que trabalham numa mesma empresa, sem querer alugam a pior casa de praia para passar o Réveillon. Eles viajam com suas famílias e namoradas e terão que se acomodar em dois cômodos sem ar-condicionado, onde passarão o feriado mais infernal de suas vidas.",
  "2017-08-05", 
  9
);
```
# Exercicio6
a)
```
SELECT id, title, rating from Movie WHERE id = "003";
```

b)
```
SELECT * from Movie WHERE title = "Os Farofeiros";
```

c)
```
SELECT id, title, synopsis from Movie WHERE rating > 7
```

# Exercício7

a)
```
SELECT * FROM Movie WHERE title LIKE "%vida%";
```
b)
```
SELECT * FROM Movie WHERE (title LIKE "%empresa%") OR synopsis LIKE "%empresa%";
```
c)
```
SELECT * FROM Movie WHERE release_Date < CURDATE();
```

d)
```
SELECT * FROM Movie
WHERE release_date < CURDATE() AND 
      (title LIKE "%alugam%" OR
      synopsis LIKE "%alugam%") AND rating >= 7;
```