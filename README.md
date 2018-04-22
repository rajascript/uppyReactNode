# node-react-heroku-Boilerplate

Boilerplate code for getting started on a node(backend), react(frontend) and Heroku(deployment).

# Node-react+sass-heroku is available on sass branch.

# Node-react+sass+redux-heroku is available on redux branch.

## Setup

* concurrently package to run node and client server together.
* heroku postbuild script to build react client side to the public directory.
* dev and prod keys. availaible in config directory.
* proxy in ./client/package.json to proxy localhost:3000 requests to localhost:5000.

## Downloading/cloning and installing dependencies directions.

* download/clone repository.
* open terminal.
* go to repo location, inside terminal window.
* start typing.

```
cd client
npm i //install client dependencies.
cd ..
npm i //install server dependencies.
```

## Running server and client concurrently

```
//inside repo directory run this command on terminal.

npm run dev

//open localhost:3000 in browser.
```

## Running server only

```
//inside repo directory run this command on terminal.

npm run server

//open localhost:5000 in browser.
```

## Running client only

```
//inside repo directory run this command on terminal.

npm run client

//open localhost:3000 in browser.
```
