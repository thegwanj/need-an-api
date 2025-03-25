# I Need An API!

## Overview
**I Need An API!** is a React-based web application that allows users to browse and interact with various public APIs. Users can:
- View a list of top APIs based on different criteria.
- Like and unlike APIs, which adds or removes them from a personal "Liked List."
- Fetch a random API to explore something new.
- Search for an API by its ID.
- Filter APIs based on different categories and limits.

## Features
### Dynamic API Fetching
- Fetches an initial list of APIs when the page loads.
- Allows users to request a random API from the dataset.
- Enables searching for a specific API by ID.
- Provides sorting and filtering options to customize the displayed API list.

### Interactive Liked List
- Users can "like" an API, adding it to their personal liked list.
- Clicking "Unlike" removes the API from the liked list.
- The liked list is dynamically updated and displayed in a grid layout.

## How Components are Rendered Dynamically
### `App.js`
- Manages the **state** for:
  - The fetched API list (`apis`).
  - The liked APIs (`likes`).
  - User input for searching and filtering.
- Handles API fetching with `useEffect` and fetch calls.
- Renders API cards dynamically based on the fetched data.
- Uses conditional rendering to display the liked list or a message when empty.

### `Card.js`
- Receives an API object as a prop.
- Displays API details like **emoji, title, and description**.
- Includes a **like button**, which toggles the API between the main list and the liked list.
- Uses the `some()` method to check if an API is already liked, dynamically updating the button text to "Like" or "Unlike."

### CSS Styling
- The **main API list** and **liked list** use `display: grid` to maintain a structured layout.
- Buttons and inputs are styled for a smooth and responsive user experience.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/thegwanj/need-an-api.git
   ```
2. Navigate into the project folder:
   ```bash
   cd I-Need-An-API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Future Enhancements
- Implement **local storage** to save liked APIs between sessions.
- Add **pagination** for larger result sets.
- Enhance UI with animations and transitions.

Enjoy discovering new APIs! 🚀