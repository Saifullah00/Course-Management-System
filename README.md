# Course Management System

Welcome to the Course Management System repository! This project is a fullstack web application designed for managing courses, built with Spring Boot for the backend and React.js for the frontend. The application supports CRUD (Create, Read, Update, Delete) operations for course management.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new courses
- View all courses
- Update course details
- Delete courses
- User-friendly interface

## Technologies

- **Backend:** Spring Boot, Spring Data JPA, REST API
- **Frontend:** React.js, Axios, React Router
- **Database:** H2 (In-memory database for development and testing)
- **Build Tools:** Maven (for backend), npm (for frontend)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Java Development Kit (JDK) 11 or later
- Node.js and npm (Node Package Manager)
- Maven

## Installation

### Backend

1. Clone the repository:

   ```sh
   git clone https://github.com/Saifullah00/Course-Management-System.git
   cd course-management-system/backend
   ```

2. Build the backend application:

   ```sh
   mvn clean install
   ```

3. Run the backend application:

   ```sh
   mvn spring-boot:run
   ```

   The backend server will start at `http://localhost:9080`.

### Frontend

1. Navigate to the frontend directory:

   ```sh
   cd ../frontend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the frontend application:

   ```sh
   npm start
   ```

   The frontend server will start at `http://localhost:3000`.

## Running the Application

Once both the backend and frontend servers are running, open your browser and go to `http://localhost:3000`. You should see the homepage of the Course Management System.

## API Endpoints

### Course Endpoints

- **GET /api/courses**: Retrieve a list of all courses
- **GET /api/courses/{id}**: Retrieve a single course by ID
- **POST /api/courses**: Create a new course
- **PUT /api/courses/{id}**: Update an existing course by ID
- **DELETE /api/courses/{id}**: Delete a course by ID

### Example Request and Response

#### GET /api/courses

Request:
```sh
curl -X GET http://localhost:9080/api/courses
```

Response:
```json
[
  {
    "id": 1,
    "title": "Spring Boot for Beginners",
    "description": "Learn Spring Boot from scratch",
  },
  {
    "id": 2,
    "title": "React.js Essentials",
    "description": "Master the basics of React.js",
  }
]
```

## Screenshots

![Home Page](screenshots/home.png)
*Home page showing list of courses*

![Add Course](screenshots/add-course.png)
*Form to add a new course*

![View Course](screenshots/edit-course.png)
*Form to edit an existing course*

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for checking out the Course Management System! If you have any questions or feedback, feel free to open an issue or contact the repository owner. Happy coding!
