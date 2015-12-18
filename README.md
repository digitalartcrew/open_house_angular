Open House Angular

Open House Angular allows a user to create a list of homes they are interested in visiting. Users having the capability of adding, editing, showing and deleting a home. The application is created using the MEAN stack. MongoDB, AngularJS, Express and NodeJS using MVC(model, view, controller) architecture.

File structure consists of a client > server > package.json > .gitignore

1. The client directory contains an index.html which render templates through the "ng-view" directive which is given access to the data requested in the service through the controller.

2. The server directory contains an app.js which configures the entire application with NodeJS middleware, routes, running server and using express static to render files from a specific directory.

3. The package.json saves all the dependencies to be used within the application. After cloning directory, run "npm install" to install dependencies.


Note: The ".gitignore" file should be created to hide any files you wish not to be stored in git.

