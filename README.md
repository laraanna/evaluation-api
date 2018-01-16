# Evaluation Tool for Teachers API
RESTful Express API for Evaluations on top of MongoDB. The front-end of this app can be found [here](https://github.com/laraanna/evaluation-tool)

## Authentication

Create a User with the following attributes:

| Attribute   | Type    | Description  |
| ------------|-------| ------------|
| name        | string  | Full Name    |
| email       | string  | Email Address|
| password    | string  | Password     |

Use the following endpoints to deal with initial authentication and the user:

| HTTP Verb   | Path      | Description                                              |
| ------------|---------| --------------------------------------------------------|
| POST        | /users    | Create a User Account                                    |
| POST        | /sessions | Log in with email and password, and retrieve a JWT token |
| GET         | /users/me | Retrieve own user data                                   |

To authorize further requests, use Bearer authentication with the provided JWT token:

```bash
Authorization: Bearer <token here>
```
**Note**: See db/seed.js for an example.

## Evaluation

**Note**: See models/batches.js for the Evaluation schema attributes.

| HTTP Verb   | Path      | Description                                              |
| ------------|---------| --------------------------------------------------------|
| GET       | /batches    | Retrieve all batches                                  |
| POST        | /batches| Create a batch* |
| GET         | /batches/:id/ask' | Retrieve a random student based on algorithm                                  |
| PUT       | /batches/:id    | Update a batch with a specific id*                                   |
| PATCH        | /batches/:id |Patch (partial update) a batch with a specific id* |
| DELETE         | /batches/:id_batch/:id_student | Destroy a single student of a batch by it's id*                                   |
| | 	|* Needs authentication|

**Note**: Run yarn run seed to seed some initial evaluations.



