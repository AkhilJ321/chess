# Chess App

This is a chess application built using React and Node.js. It allows two players to join a game and play against each other. The backend uses a WebSocket server for real-time communication between the players. The chess logic is handled by the chess.js library.

## Features

- WebSocket server for real-time communication
- Move validation for chess moves
- Integration with chess.js library

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AkhilJ321/chess.git
   ```

2. Install the dependencies for the backend:

   ```bash
   cd chess/backend1
   npm install
   ```

3. Install the dependencies for the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

## Usage

1. Start the backend server:

   ```bash
   cd ../backend
   tsc -b
   node dist/index.js
   ```

2. Start the frontend development server:

   ```bash
   cd ../frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to access the chess app.

## Contributing

Contributions are welcome! This project is in the build phase and many features can be added. Feel free to open an issue or submit a pull request.
