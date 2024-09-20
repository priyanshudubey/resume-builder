# Resume Builder

Resume Builder is a full-stack web application designed to help users create professional, ATS-friendly resumes effortlessly. The app allows users to input personal details, education, work experience, projects, skills, and download a PDF version of their resume. It is built using React.js, Node.js, Express, and Tailwind CSS.

## Table of Contents

- [Features](#features)

- [Demo](#demo)

- [Technologies](#technologies)

- [Installation](#installation)

- [Usage](#usage)

- [API Endpoints](#api-endpoints)

- [Contributing](#contributing)

- [License](#license)

## Features

- **Google Authentication**: Users can log in and sign up using their Google accounts for quick access.

- **Personalized Resume Sections**:

- Personal Details

- Education History

- Work Experience

- Projects

- Skills

- **Dynamic Resume Preview**: Users can view their resume in real-time while filling in their details.

- **ATS-Friendly Resumes**: The resumes generated follow industry-standard formatting to pass Applicant Tracking Systems (ATS).

- **PDF Export**: Users can easily download their resume as a PDF.

- **Responsive Design**: Fully responsive layout optimized for both desktop and mobile users.

## Demo

[Insert a link to a live demo or hosted version of the application]

## Technologies

The Resume Builder is built using the following technologies:

### Frontend:

- **React.js**: For creating the interactive user interface.

- **Tailwind CSS**: For responsive and modern styling.

### Backend:

- **Node.js & Express.js**: To handle API requests and user authentication.

- **MySQL**: For storing user data and resume information (if applicable).

### Authentication:

- **Google OAuth**: For secure user login and signup.

## Installation

### Prerequisites:

- **Node.js** (v14+)

- **MySQL** (if using MySQL as a database)

### Steps to Install Locally:

1.  **Clone the repository**:

```bash

git clone https://github.com/yourusername/resume-builder.git
```

2. **Navigate into the project directory**:

```bash
cd resume-builder
```

3. **Install server dependencies**:

```bash
npm install
```

4. **Navigate to the `frontend` folder** and install frontend dependencies:

```bash
cd resume-builder-frontend
npm install
```

5. **Set up environment variables**: Create a `.env` file in the root of the project and add your environment variables:

```makefile
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGO_URI=your_mongo_db_connection_string
SESSION_SECRET=your_session_secret
```

6. **Run the application**: In the root of the project, run the following command to start both the backend and frontend concurrently:

```bash
npm run dev
```

7.  **Open the app**: Go to http://localhost:3000 to start using the Resume Builder.

## Usage

1.  Sign in using your Google account.
2.  Fill in each section: Personal Details, Education, Experience, Projects, and Skills.
3.  Preview your resume in real-time.
4.  Click on the "Generate Resume" button to download your PDF file.

## API Endpoints

### Auth

- **POST /auth/google**: Authenticates user via Google OAuth.

### Resume

- **GET /api/resume**: Retrieves user resume data.
- **POST /api/resume**: Saves or updates user resume data.

### PDF Generation

- **POST /api/pdf**: Generates and returns a downloadable PDF of the resume.

## Contributing

We welcome contributions to improve the Resume Builder. To contribute:

1.  Fork the repository.
2.  Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3.  Make your changes.
4.  Push your changes:
    ```bash
    git push origin feature-name
    ```
5.  Open a pull request.

Please ensure your pull request adheres to the following guidelines:

- Clearly describe the changes and the motivation behind them.
- Ensure the code follows the project's code style.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
