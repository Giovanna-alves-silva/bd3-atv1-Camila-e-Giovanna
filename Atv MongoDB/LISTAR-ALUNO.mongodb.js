const database = 'BD3-NoSQL-AtlasMongoDB';

use (database);


/*LISTAR TODOS OS ALUNOS
db['“bd3-nosql-atv1'].find();*/


/*LISTAR UM ALUNO PELO CPF SEM O CAMPO "cod_aluno"
db['“bd3-nosql-atv1'].find({"cpf": "234.567.890-11"}, {"codigo":0});*/


/*LISTAR UM ALUNO PELO CPF COM O CAMPO "cod_aluno" E SEM O CAMPO DE CÓDIGO*/
db['“bd3-nosql-atv1'].find({"cpf": "234.567.890-11"}, {"_id":0});