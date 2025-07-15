# Movie Review App

A full-stack web application for browsing movies and posting reviews.

## Project Structure

```
movie_review_app/
  backend/      # Node.js/Express backend API
    api/        # Controllers and routes for reviews
    dao/        # Data access objects
    index.js    # Entry point
    server.js   # Server setup
  frontend/     # Static frontend files
    images/     # Movie and avatar images
    index.html  # Main page
    movie.html  # Movie details page
    movie.js    # Frontend JS for movie page
    script.js   # General frontend JS
    style.css   # Styles
```

## Backend

- **Tech:** Node.js, Express
- **Location:**`backend`
- **check:** `localhost:8000/api/v1/reviews`
  ```bash
  cd backend
  npm install
  node index.js
  ```
- **API:** Provides endpoints for movie reviews

## Frontend

- **Tech:** HTML, CSS, JavaScript
- **Location:** `frontend/`
- **Usage:** Open `frontend/index.html` in your browser

## Features
- Browse movies
- View, post, edit, and delete reviews
- Simple, clean UI

## Setup
1. Clone the repo
2. Install backend dependencies (`cd backend && npm install`)
3. Start backend server (`node index.js`)
4. Open `frontend/index.html` in your browser

## License
MIT 