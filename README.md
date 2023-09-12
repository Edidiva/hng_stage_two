# hng_stage_two

This is a simple Users Resource App that allows you to perform CRUD (Create, Read, Update, Delete) operations on user data.

## API Documentation

- For detailed API documentation, please refer to the
 [Postman API Documentation](https://documenter.getpostman.com/view/24486336/2s9YC31thy).

- For tests, refer to the [PostmanTests](https://github.com/Edidiva/hng_stage_two/blob/main/test.js) file.


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

```bash
Hng_Stage_two/
├───src/
│ ├───controller.js
│ ├───model.js
│ ├───router.js
│ └───validator.js
│
├───.env
├───app.js
├───package.json
├───test.js
└───README.md
```


- `src/`: Contains the main source code files.
- `.env`: Configuration file for environment variables.
- `app.js`: The entry point of the application.
- `package.json`: Dependencies and scripts configuration.
- `README.md`: Documentation for the project.
- `test.js: postman tests for the endpoints.

## Usage
To start the application on your local environment, run the following command:
  
   ```shell
    npm start

Visit http://localhost:PORT in your web browser to access the application.

## API Endpoints

- **Create User:** 
  - URL: `/api`
  - Method: `POST`
  - Description: Create a new user.
  - Request Body:
    - Example:
      ```json
      {
        "name": "John Doe"
      }
      ```
  - Response:
    - Status Code: `201 Created`
    - Example:
      ```json
      {
        "name": "John Doe",
        "id": "user_id"
      }
      ```

- **Get User by ID:** 
  - URL: `/api/:id`
  - Method: `GET`
  - Description: Retrieve user information by their ID.
  - Response:
    - Status Code: `200 OK`
    - Example:
      ```json
      {
        "name": "John Doe",
        "id": "user_id"
      }
      ```

- **Update User by ID:** 
  - URL: `/api/:id`
  - Method: `PUT`
  - Description: Update user data by their ID.
  - Request Body:
    - Example:
      ```json
      {
        "name": "Updated Name"
      }
      ```
  - Response:
    - Status Code: `200 OK`
    - Example:
      ```json
      {
        "name": "Updated Name",
        "id": "user_id"
      }
      ```

- **Delete User by ID:** 
  - URL: `/api/:id`
  - Method: `DELETE`
  - Description: Delete a user by their ID.
  - Response:
    - Status Code: `200 OK`
    - Example:
      ```json
      "User data deleted"
 
      ```

## Error Handling

The API handles various error scenarios and returns appropriate HTTP status codes and error messages.

## Contribution

Contributions are welcome! Please fork this repository and create a pull request with your changes.

## License

License.

