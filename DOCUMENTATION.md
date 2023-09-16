# API USAGE

1. GET : To get a resource
2. POST: To create a resource
3. PATCH: To update a resource
4. DELETE: To delete a resource

## SAMPLE USAGE OF API

1. [getAll](https://stage.cyclic.cloud/api)
   {
   "success": true,
   "messgae": "All persons successfully retrieved",
   "data": {
   "persons": []
   }
   }
2. EXpected fields for the creation of a person
   {
   age: 10,
   name: faith,
   gender: femaile
   }

#### INSTRUCTION FOR SETTING UP SERVER LOCAL

1. go to your terminal and type npm install
2. creat a .env file and add a link to a database created on your mongodb atlas account
3. go to your terminal and type npm run server
4. go to postman and visit your api

##### WARNING

For some development reasons \_ID search does not work with the getAll, getSpecific and deleteSpeicific routes

###### DIFFERENT ENDPOINTS

1. Get all persons(GET)
   https://stage.cyclic.cloud/api
2. Get a specific person (GET)
   https://stage.cyclic.cloud/api/:id
3. Add new person
   https://stage.cyclic.cloud/api/:person
4. Update a specific user(PATCH)
   https://stage.cyclic.cloud/api/:id
5. Delete a specific user(POST)
   https://stage.cyclic.cloud/api/:id
