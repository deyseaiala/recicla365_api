<<<<<<< HEAD
=======
# **RECICLA 365 API**

O Recicla365 é uma plataforma que facilita o gerenciamento de resíduos e o acesso a pontos
de coleta de materiais recicláveis. Os usuários podem cadastrar novos pontos de coleta,
encontrar pontos próximos, visualizar informações sobre os materiais aceitos em cada ponto
e registrar suas próprias contribuições para a reciclagem. 

![Recicla 365 - API](https://github.com/user-attachments/assets/80ff885a-2d0e-427c-9bba-f58cb1980909)

## Tecnologias utilizadas

**Nodejs**: Plataforma para executar JavasScript no servidor back-end. <br>
**Express**: Framework web para construir API RESTful. <br>
**PostgreSQL**: Sistema de gerenciamento de banco de daos relacional, utilizado para armazenar dados do projeto.<br>
**Sequelize**: ORM utilizado para interação com o banco de dados PostgreSQL.<br>
**pg**: Cliente PostgreSQL, utilizado para conectar e interagir com o banco de dados.<br>
**pg-hstore**: Biblioteca serializar e desserializar dados JSON para o PostgreSQL.<br>
**Axios**: Biblioteca para fazer requisições HTTP, para consumir APIs externas.<br>
**dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo ".env".<br>
**bcryptjs**: Biblioteca para hashing de senhas.<br>
**jsonwebtoken**: Biblioteca para criar e verificar tokens JWT.<br>
**Swagger**: Ferramenta utilizada para criar uma interface gráfica de APIs.<br>

## Principais rotas do projeto

**Rotas de Usuários**: Onde é possível cadastrar um novo usuário e realizar login. <br>
**Rotas dos Locais de Coleta**: Após realizar login o usuário pode cadastrar um novo local, fazer alterações nos dados, excluir, 
listar todos os seus locais cadastrados, assim como listar um local específico. O usuário também tem acesso a um link do Google Maps
direcionando para o endereço do local de coleta. 

## Organização do banco de dados

O banco de dados do projeto é organizado em duas tabelas principais, a de **usuarios** e **locais_coleta**.
### Tabela usuarios
- **id**: Id único do usuário (Chave primária)
- **nome**: Nome do usuário
- **email**: Email de usuário único
- **password**: Senha salva de forma segura usando hashing
- **cpf**: CPF de usuário único
- **sexo**: Gênero do usuário (opcional)
- **data_nascimento**: Data de nascimento (opcional)
- **endereco**: Endereço do usuário (opcional)
- **createdAt**: Data de criação do registro
- **updatedAt**: Data de atualização do registro

### Tabela locais_coleta
- **id**: ID único do local (Chave primária)
- **nome**: Nome do local
- **descricao**: Descrição do local, explicando horários de funcionamento e informações relevantes
- **cep**: CEP do local, utilizado para gerar o link Google com o “nominatim.openstreetmap”
- **lat**: Latitude 
- **lon**: Longitude
- **googleMapsLink**: Link do Google Maps indicando o endereço do local
- **contato**: Telefone do local
- **tipo_residuos**: Tipos de resíduos aceitos (papel, vidro, metal, orgânico, etc)
- **usuario_id**: ID do usuário que cadastrou este local (Chave estrangeira)
- **createdAt**: Data de criação do registro
- **updatedAt**: Data de atualização do registro

### Relacionamento entre tabelas

A relação entre as tabelas é do tipo um para muitos, onde um usuário pode possuir muitos locais de coleta. 
Essa relação se dá pela chave estrangeira **usuario_id** na tabela locais_coleta, que referencia o **id** da tabela usuarios.

>>>>>>> 4e50c3985364925cc2f49a9f4331abd7f6c68925
## Rodar o repositório:

### Na primeira vez é necessário instalar as dependencias:
1. `npm install`
2. `cp .env_example .env`

### Para rodar o repositório em ambiente local
1. `npm run start:dev`

## Trabalhando com migrations:

### Criar uma migration
1. Opção nº 1: `sequelize migration:generate --name nome_da_migracao`
<<<<<<< HEAD
2. Opção nº 2: `npx sequelize-cli migration:generate --name criar_tabela_alunos`
=======
2. Opção nº 2: `npx sequelize-cli migration:generate --name criar_tabela_usuarios`
>>>>>>> 4e50c3985364925cc2f49a9f4331abd7f6c68925
### Rodar uma migration. Opções:
1. Opção nº 1: `sequelize db:migrate`
2. Opção nº 2: `npx sequelize db:migrate`

### Reverter a última migration:
1. Opção nº 1: `sequelize-cli db:migrate:undo`
2. Opção nº 2: `npx sequelize-cli db:migrate:undo`

### Reverter todas as migrations:
1. Opção nº 1: `sequelize-cli db:migrate:undo:all`
2. Opção nº 2: `npx sequelize-cli db:migrate:undo:all`

<<<<<<< HEAD

=======
>>>>>>> 4e50c3985364925cc2f49a9f4331abd7f6c68925
## Trabalhando com Seeders

### Executar o seeders para gerar valores iniciais no banco de dados:
1. Opção nº 1: `sequelize db:seed:all`
2. Opção nº 2: `npx sequelize db:seed:all`

## Documentação do Sequelize:
https://sequelize.org/docs/v6/core-concepts/model-basics/

## Trabalhando com Documentação:

### Gerar o documento do Swagger.json usando o AutoGen
<<<<<<< HEAD

`npm run swagger`

=======
`npm run swagger`

### Para visualizar a interface do Swagger
No navegador: http://localhost:3000/docs/

>>>>>>> 4e50c3985364925cc2f49a9f4331abd7f6c68925
## Bibliotecas utilizadas:

### instalar o sequelize
`npm install sequelize` 
### instalar o driver do PostgreSQL
`npm install pg` 
### instalar o CLI do sequelize
`npm install -g sequelize-cli` 
### instalar o dotenv
`npm install dotenv`
### instalar o JsonWebToken ( JWT )
`npm install jsonwebtoken`
### instalar o axios
`npm install axios`
### instalar o Swagger UI
`npm install swagger-ui-express`
### instalar o Swagger AutoGen para gerar o documento Swagger de forma automatica.
<<<<<<< HEAD
`npm install swagger-autogen`
=======
`npm install swagger-autogen`

##Desenvolvedora 
**Deyse Aiala: https://github.com/deyseaiala**


>>>>>>> 4e50c3985364925cc2f49a9f4331abd7f6c68925
