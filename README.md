#Backend

Route

1. create router file for handler user request

2. create each of route middleware you think should have i you route

3. define logic to each of route middleware and specify expression what you want to send to client

4. export Route module to other file 

Controller 

1. create controller file for handler request It was sended from Routing 

2. create each of controller middleware you think should have i you controller
	
	**Another middleware have different logic or expression for each of part 

	- getAll  
	- addRes 
	- updateRes 
	- deleteRes 
	- getOne

3. define logic for each of controller middleware...

4. export Route module to other..

#Frontend

Context 

1. create context file to storage data , method for share to other component

2. create reducer and action file and combine them with in.

3. export reducer module for implement in context file.

Component 

1. create each component and export them 

2. import all component in to index.js file for easily importing them

	That below is component list each of component have different expression

```bash
├── Dashboard
│   ├── AddFormModal.js 
│   └── Menu.js
│   └── Table.js
├── Alert.js 
├── ConfirmPopup.js
├── index.js
├── Logo.js

```

#Database

Database used : MySQL 
**but we implement ORM with our database for easily management

sequelize 

1. create connection by sequelize with database 

2. create Schema for each of table you have 

3. export them and implement with other file
