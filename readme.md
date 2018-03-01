This is a super basic MEAN stack docker-compose example. It builds three docker containers:

The stock Angular App inside a container called angular-front end. This takes an image of Node 8, copies the package.json, npm installs inside the container, mounts the files via volume, and runs via npm start. Note that the ng serve command inside the npm start had to be modified a bit. The webpack SHOULD recognize any changes and recompile when there's a file modification.

A super basic API on port 3000. Image is also a basic Node:8 with an installation of Nodemon to ensure server restarts upon file modification. Going to the docker location at port 3000 /api/test should return a message that says 'API really works!'. The API server also connects to the mongo database when loading and a confirmation message should appear in the API output.  

An instance of mongoDB. Going inside the mongo shell will require a second terminal and `docker exec -it [container_name] mongo`, or by using kitematic to exec into the container and running the mongo command.

Created by J.R. Ruggiero 