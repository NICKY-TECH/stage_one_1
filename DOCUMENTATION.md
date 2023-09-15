# API USAGE
1. GET : To get a resource
2. POST: To create a resource
3. PATCH: To update a resource 
4. DELETE: To delete a resource

## SAMPLE USAGE OF API
1. getAll 
/api
{
	"success": true,
	"messgae": "All persons successfully retrieved",
	"data": {
		"persons": []
	}
}


#### INSTRUCTION FOR SETTING UP SERVER LOCALLY

1. go to your terminal and type npm install
2. creat a .env file and add a link to a database created on your mongodb atlas account
3. go to your terminal and type npm run server
4. go to postman and visit your api

##### WARNING

For some development reasons \_ID search does not work with the getAll, getSpecific and deleteSpeicific routes

