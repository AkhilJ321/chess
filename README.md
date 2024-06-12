# Chess App

This is a chess application built using React and Node.js. It allows two players to join a game and play against each other. The backend uses a WebSocket server for real-time communication between the players. The chess logic is handled by the chess.js library.

## Features

- WebSocket server for real-time communication
- Move validation for chess moves
- Integration with chess.js library

## Progress

- Currently the game is playable with two players
- The game is not yet complete, the game does not end when a player wins
- The game does not have a timer
- Currently the backend is not resilient if anything fails whole game will be lost
- Plan to make it Resileint
  ![Screenshot from 2024-06-12 10-39-33](https://github.com/AkhilJ321/chess/assets/98508374/80372edd-654a-4f3b-8ad0-035db2c59ba3)


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
