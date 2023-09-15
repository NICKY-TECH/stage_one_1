# Persons Api

This api can used for creating new individual details and storing them in the databse, retriving this data from the database, deleting and updating. It is also flexible in terms of accepting dynamic parameters and carrying out CRUD (create, read, update and delete) operations.

## DIFFERENT ENDPOINTS

1. Get all persons (GET)
   /api
2. Get a specific person (GET)
   /api/:id
3. Add new person
   /api/:person
4. Update a specific user(PATCH)
   /api/:id
5. Delete a specific user(POST)
   /api/:id

### LINK TO UML DIAGRAM
[UML-LINK](https://drive.google.com/file/d/12-S6neQSz2Ny44Ne2d_6uwuo9fn7Nxpk/view)

#### WARNING

For some development reasons \_ID search does not work with the getAll, getSpecific and deleteSpeicific routes
