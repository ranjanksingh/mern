# mern

## How To Run

Create an Atlas URI connection parameter in `server/config.env` with your Atlas URI:

```
MONGO_URI=mongodb://{username}:{passsword}@localhost:27017/{databasename}?connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1
PORT=5000
```

Start server:

```
cd server
npm install
npm start
```

Start Web server

```
cd client
npm install
npm start
```
