const database = 'BD3-NoSQL-AtlasMongoDB';

use (database);


/*INSERÇÃO DE 10 ALUNOS*/
db['“bd3-nosql-atv1'].insertMany(
    [
    {
      codigo: 1,
      nome: "Ana Carolina Souza",
      cpf: "123.456.789-00",
      rg: "12.345.678-9",
      telefone: "(11) 98765-4321",
      telefone_responsavel: "(11) 91234-5678",
      email: "ana.souza@email.com",
      data_nascimento: "2005-03-15"
    },
    {
      codigo: 2,
      nome: "Bruno Henrique Almeida",
      cpf: "234.567.890-11",
      rg: "23.456.789-0",
      telefone: "(11) 97654-3210",
      telefone_responsavel: "(11) 92345-6789",
      email: "bruno.almeida@email.com",
      data_nascimento: "2004-07-22"
    },
    {
      codigo: 3,
      nome: "Carla Fernanda Ribeiro",
      cpf: "345.678.901-22",
      rg: "34.567.890-1",
      telefone: "(11) 96543-2109",
      telefone_responsavel: "(11) 93456-7890",
      email: "carla.ribeiro@email.com",
      data_nascimento: "2006-01-10"
    },
    {
      codigo: 4,
      nome: "Diego Martins Silva",
      cpf: "456.789.012-33",
      rg: "45.678.901-2",
      telefone: "(11) 95432-1098",
      telefone_responsavel: "(11) 94567-8901",
      email: "diego.silva@email.com",
      data_nascimento: "2005-09-18"
    },
    {
      codigo: 5,
      nome: "Eduarda Lima Castro",
      cpf: "567.890.123-44",
      rg: "56.789.012-3",
      telefone: "(11) 94321-0987",
      telefone_responsavel: "(11) 95678-9012",
      email: "eduarda.castro@email.com",
      data_nascimento: "2003-12-05"
    },
    {
      codigo: 6,
      nome: "Fernando Oliveira Santos",
      cpf: "678.901.234-55",
      rg: "67.890.123-4",
      telefone: "(11) 93210-9876",
      telefone_responsavel: "(11) 96789-0123",
      email: "fernando.santos@email.com",
      data_nascimento: "2004-06-25"
    },
    {
      codigo: 7,
      nome: "Gabriela Souza Mendes",
      cpf: "789.012.345-66",
      rg: "78.901.234-5",
      telefone: "(11) 92109-8765",
      telefone_responsavel: "(11) 97890-1234",
      email: "gabriela.mendes@email.com",
      data_nascimento: "2005-02-14"
    },
    {
      codigo: 8,
      nome: "Henrique Ferreira Lopes",
      cpf: "890.123.456-77",
      rg: "89.012.345-6",
      telefone: "(11) 91098-7654",
      telefone_responsavel: "(11) 98901-2345",
      email: "henrique.lopes@email.com",
      data_nascimento: "2006-08-30"
    },
    {
      codigo: 9,
      nome: "Isabela Rocha Nascimento",
      cpf: "901.234.567-88",
      rg: "90.123.456-7",
      telefone: "(11) 90987-6543",
      telefone_responsavel: "(11) 99812-3456",
      email: "isabela.nascimento@email.com",
      data_nascimento: "2003-11-20"
    },
    {
      codigo: 10,
      nome: "João Pedro Vasconcelos",
      cpf: "012.345.678-99",
      rg: "01.234.567-8",
      telefone: "(11) 99876-5432",
      telefone_responsavel: "(11) 98765-4321",
      email: "joao.vasconcelos@email.com",
      data_nascimento: "2005-05-07"
    }
    ]
);