# hng_stage_two

This is a simple Users Resource App that allows you to perform CRUD (Create, Read, Update, Delete) operations on user data.

## Features

- **Create:** Add new users to the system.
- **Read:** View user details by their ID.
- **Update:** Modify user information.
- **Delete:** Remove users from the database.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi for validation
## Prerequisites
Before setting up the codebase, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (version 18 or above)
- [Git](https://git-scm.com/)


## Installation

1. Clone this repository:

   ```shell
   git clone https://github.com/edidiva/hng_stage_two.git
2. Change into the project directory:

   ```shell
   cd Hng_Stage_two
3. To install the required dependencies, run the following command:

   ```shell
   npm install

## Configuration

The codebase requires the following environment configurations:

1. Create a `.env` file in the root directory of the project.

2. Open the `.env` file and add the following configurations:

   ```shell
   DATABASE_URL=mongodb://localhost:27017/{your-database-name}
   API_KEY=your-api-key
   PORT=your-port-number

## Directory Structure

The codebase for the App follows the following directory structure:

Hng_Stage_two/
├───src/
│ ├───controller.js
│ ├───model.js
│ ├───router.js
│ └───validator.js
│
├───.env
├───index.js
├───package.json
└───README.md


- `src/`: Contains the main source code files.
- `.env`: Configuration file for environment variables.
- `index.js`: The entry point of the application.
- `package.json`: Dependencies and scripts configuration.
- `README.md`: Documentation for the project.






