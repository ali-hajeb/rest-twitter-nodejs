# QTwitter Rest API

This project is a simple backend server for [QTwitter client](https://github.com/ali-hajeb/qtwitter-reactjs) created using Express.js. [The original version](https://github.com/mhyrzt/rest-twitter-nodejs) is made by [@mhyrzt](https://github.com/mhyrzt).

## Forked version

This forked version solves follwing issues:
- No response is received after delete request.
- Added user id in login response (user id is used in the client to check if user has liked a tweet, and etc.)

## Set up

To run this server,
1. Clone this repository.
2. create a `.env` file in the root directory  containing these lines:

`~/.env`:
```shell
ACCESS_TOKEN= # [JWT access token secret]
PORT=4000 # [Node.js server port]
MONGO_URI= # [Your MongoDB URI]
```
3. Run `npm run dev`.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the server in the development mode.

The server will reload if you make edits.
You will also see any errors in the console.

### `npm start`

Starts the server.
