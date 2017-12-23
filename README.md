# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# angular-4

## running with node.js

# ng build ( ng build compiles the application into an output directory)
# add static files as app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));

# steps to run :
## clone this repo 
## ng build --watch     //watches any changes in angular app folder and build automaticaly if there are any changes
## node app.js (in new tab)


# Replication
## Replication is the process of synchronizing data across multiple servers. Replication provides redundancy and increases data availability with multiple copies of data on different database servers.

### Shutdown already running MongoDB server. (sudo service mongod stop or mongo--> use admin --> db.shutdownServer()	)
### run primary node on port 27017 and create a replica set rs0 (/var/lib/mongodb/ --> db path where your db will be stored) : #### sudo mongod --replSet rs0 --logpath s0-r0.log --dbpath /var/lib/mongodb/ --port 27017 --fork --smallfiles
### It will start a mongod instance with the name rs0, on port 27017.
### in cmd type mongo and following command's 
### rs.initiate() to initiate a new replica set.
### To check the replica set configuration, issue the command rs.conf()
### To check the status of replica set issue the command rs.status()
### before adding new member to replica set run the second node on port 37017 using cmd :  sudo mongod --replSet rs0 --logpath s1-r1.log --dbpath /var/lib/mongodb/newMongo/ --port 37017 --fork --smallfiles
### (continue on primary node to add replica set) rs.add("192.168.85.118:37017")
### To check whether you are connected to primary or not : db.isMaster()
### You have to set "slave okay" mode to let the mongo shell know that you're allowing reads from a secondary. This is to protect you and your applications from performing eventually consistent reads by accident. You can do this in the shell with: rs.slaveOk()

