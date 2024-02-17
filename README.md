# Meal Application
This is a simple application that allows admin users to add, update and delete meals and normal users to view the menu. It features a basic CRUD (Create, Read, Update, Delete) API for managing meals stored in a PostgreSQL database. The application includes a straightforward authentication and authorization system utilizing Auth0. The React frontend provides a basic user interface for all functionalities. However, the booking feature in the API remains incomplete, which means the corresponding frontend functionality is non-operative.

## Prerequisites
Before you begin, ensure you have 
- docker & docker-compose
- pnpm
- make

installed on your system. These tools are necessary for installing dependencies and running the visualizer locally.

## Getting Started
Follow these steps to set up and launch the Meal Application on your local system:

1. **Clone the repository**

    Clone the repository to your local machine using the following command:
   
    `git@github.com:MoHe99/meal-application.git`
    
3. **Install dependencies**
   
    Navigate to the cloned repository directory and install all required dependencies:
   
        1. `cd meal-application/frontend && pnpm i`
        2. `cd ../api && pnpm i`
    
5. **Create environment variables**
   
        Create a file in the root directory named ".env" and copy the content of ".env.sample" in it. In there fill the empty variables with your custom data.
        
        > [!NOTE]
        > In cases where I applied to a company, I can give you the correct environment variables for Auth0, if you would like to test the login functionality and therefore the whole application beyond code reviewing.
        > ##### Log in
        > - Test Admin credentials: 
        >    - admin@test.de
        >    - Password1!
        > - Test User credentials: 
        >    - user@test.de
        >    - Password1!
    
6. **Start the development environment**
   
        Launch the development server using `make app-start`. This command builds all containers and starts them (including watching for file changes).
        
        After the server has started, you can visit `http://localhost:3000` and start testing the app.

## Make commands

| Action                    | Command                                   |
|---------------------------|-------------------------------------------|
| Start application         | `make app-start`                          |
| Stop application          | `make app-stop`                           |
| Restart application       | `make app-restart`                        |
| Rebuild application       | `make app-rebuild`                        |
| Destroy application       | `make app-destroy`                        |
| Show logs of container    | `make logs-DOCKER-COMPOSE-SERVICE-NAME`   |
| Log into shell of container | `make bash-DOCKER-COMPOSE-SERVICE-NAME`  |
| Show active containers    | `make ps`                                 |
| Use linter                | `make lint`                               |
| Use formatter             | `make format`                             |
| Export current state of database (will be used as init script on rebuild)   | `make export-postgres`                                 |

> [!IMPORTANT]
> This project serves as a personal training and small showcase project. It is intended for my own educational purposes and to demonstrate my skills and interests in software development and algorithms. It's not aimed at wide distribution or commercial use. Contributions, feedback, and suggestions are welcome but please note that this is an older personal development project.
> The project was primarily a learning endeavor aimed at improving my skills in React, Node.js, and Docker during the late 2022 to early 2023 timeframe. Looking back, my skills have significantly advanced since then, and there are many aspects of the project I would approach differently today.
