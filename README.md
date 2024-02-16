## Get started

### Prerequisites
- docker & docker-compose
- pnpm
- make

### Clone project
`git@github.com:MoHe99/meal-application.git`

### Install dependencies
First move into project folder: `cd meal-application`. \
Then do both of the following:
- `cd frontend && pnpm i`
- `cd api && pnpm i`

### Start application
`make app-start`

### Visit frontend
Open `http://localhost:3000`

## In cases where I applied to a company
### Get correct Auth0 Variables
I can give you the correct environment variables for Auth0, if you would like to test the login functionality and therefore the whole application beyond code reviewing.

### Log in
- Test Admin credentials: 
    - admin@test.de
    - Password1!
- Test User credentials: 
    - user@test.de
    - Password1!
It is also possible to register with an own user (only normal ones)

### Log in
- Test Admin credentials: 
    - admin@test.de
    - Password1!
- Test User credentials: 
    - user@test.de
    - Password1!

## Useful commands

### Start application
`make app-start`

### Stop application
`make app-stop`

### Restart application
`make app-restart`

### Rebuild application
`make app-rebuild`

### Destroy application
`make app-destroy`

### Show logs of container (for example "api")
`make logs-DOCKER-COMPOSE-SERVICE-NAME`

### Log into shell of container (for example "api")
`make bash-DOCKER-COMPOSE-SERVICE-NAME`

### Use linter
`make lint`

### Use formatter
`make format`

## Important Note

This project, a simple meal application, was one of my initial attempts at developing an API with Node.js, coupled with a consuming frontend built using React. It features a basic CRUD (Create, Read, Update, Delete) API for managing meals stored in a PostgreSQL database. The application includes a straightforward authentication and authorization system utilizing Auth0. The React frontend provides a basic user interface for all functionalities. However, the booking feature in the API remains incomplete, which means the corresponding frontend functionality is non-operative.

The project was primarily a learning endeavor aimed at improving my skills in React, Node.js, and Docker during the late 2022 to early 2023 timeframe. Looking back, my skills have significantly advanced since then, and there are many aspects of the project I would approach differently today.
