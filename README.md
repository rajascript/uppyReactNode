# node-react-heroku-Boilerplate
Boilerplate code for getting started on a node(backend), react(frontend) and Heroku(deployment).

##Setup
1.added concurrently package to run node and client server together.
2.added heroku postbuild script to build react client side to the public directory.
3.added dev and prod keys. availaible in config directory.
5.added proxy in ./client/package.json to proxy localhost:3000 request to localhost:5000.

###downloading/cloning and installing dependencies directions.
```
download/clone repository.
cd to repo location.
cd server
cd client
npm i //install client dependencies.
cd ..
npm i //install server dependencies.

```
###running server and client concurrently

```
//inside server directory run this command on terminal.

npm run dev

//open localhost:3000 in browser.
```


###running server only

```
//inside server directory run this command on terminal.

npm run server

//open localhost:5000 in browser.
```

###running client only

```
//inside server directory run this command on terminal.

npm run client

//open localhost:3000 in browser.
```

