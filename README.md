This is a a base node js project templcate ,ehich anyone can use as it has been prepared,by keeping some of the most important code principles and project management recomeddetion.feel free to change anything.

`src` -> inside the src folder all the actual source code regarding the projrct will reside, this will not include any kind of test.(You might want make tests folder)

Lets take a look inside the `src` folder

`config` -> in this folder anynthuoing and everything regarding ANY CONFIGURATION setup of library or module will be done for example : setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`.  one more example can be setup you logging librarythat can help you to prepare meaningful logs, so configuration for this library shouuld also be done here.

`routes`-> in the routes folder, we register a route and the corresponding middleware and controllers to it.

`middleware`-> they are just going to intercept the incoming requests where we can write our validators,authenticatiors etc.

`controllers`->they are kind of the last middleware as post them you call you buisness layer to execute the bndiness logic. in controllers we just recieve the incoming requests and data and then pass it to the buisness layer and once business layer returns an output, we structures the API response in controllers and send the ouput.

`repositories` -> this folder contains all the logic using which we interacct the DB by writing quieres, all the raw quieries, all the raw queieries or ORM quieries will go here.

`services`-> contains the buisness logic and interacts with repositories for data from the database 

`utils`-> contains helper methods,error classes etc.

### Setup the project

-Download this template from github and open it in your favourite text editor.
-Go inside the folder path and execute the following command:
```
npm install

-In the root director create     a`.env`file and add the followings env variables
```
PORT=<port number of your choice>
```

-go inside the `src` folder and execute the followings command:
```
npx sequilize init
```

-By executing the above command you will get migrations and seeders folder aloong with a config.json inside the config folder.
-If you're setting up your development environment ,write the username of you: db ,password of your db and in dialect mention whenever db are usinf for ex:
mysql,maridb etc
-if you're setting up test or prod environment, make sure you also replace the host wth hosted db url

-Inside the `src\config` folder create a file named as `config.json` write the following code:

-to run server
```
npm run dev
```