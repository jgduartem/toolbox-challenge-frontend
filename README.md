# Toolbox Challenge Frontend

This is the frontend application for the Toolbox challenge.

## Prerequisites

- Node.js v16

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd toolbox-challenge-frontend
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run serve`

Serves the built static files from the `build` directory.

## Running with Docker

You can also run the application using Docker.

1. Run container in deatached mode:
   ```sh
   docker compose up -d
   ```

The application will be available at [http://localhost:8080](http://localhost:8080).

## Built With

*   [React](https://reactjs.org/) - The web framework used
*   [Redux](https://redux.js.org/) - State management
*   [Webpack](https://webpack.js.org/) - Module bundler
*   [Babel](https://babeljs.io/) - JavaScript compiler
*   [Jest](https://jestjs.io/) - Testing framework
*   [Bootstrap](https://getbootstrap.com/) - CSS framework
