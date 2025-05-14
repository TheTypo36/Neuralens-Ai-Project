# Neuralens AI Project

This README outlines the technologies used to build the Neuralens AI Project, detailing both backend and frontend components.

## Backend

**Technologies:**

- **TypeScript:** Provides improved type safety and maintainability compared to plain JavaScript.
- **MongoDB & Mongoose:** Data is stored in a MongoDB database. Mongoose simplifies schema management and data operations.

- **xlsx Library:** Converts Excel (xlsx) files to JSON format for efficient data storage and retrieval.

  - I created a importData function in **utils/importData** which is used for importing the data in mongodb.
    [![showing the function for importing the data](image.png)]
    (![pushing in mongodb](image-1.png))
    ![screenshot of database containing the data](image-2.png)

  - if you want to put some new data in data base just put he file in **./backend/dist/data** keep the name of the file as **demo_data.xls** and then un comment the **importData()** statment in **backend/src/index.ts** folder

## Frontend

**Technologies:**

- **React & Vite:** The app is built with React and bundled using Vite, offering a faster and more optimized development experience than Create React App.
- **TypeScript:** Ensures type safety and helps catch errors during development.
- **Tailwind CSS:** Used for responsive and efficient styling of the application.

## Project Note

This project was developed without AI assistance for creating the web application, showcasing a range of modern web development skills.
