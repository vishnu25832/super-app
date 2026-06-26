# Super App

## Overview

Super App is a personalized dashboard built with React and Vite that brings together multiple everyday utilities in one place. Instead of switching between different applications, users can register, choose their favorite entertainment categories, view live weather updates, read the latest news, manage notes, use a countdown timer, and discover movies from a single interface.

The project was developed as part of a frontend assignment with a focus on reusable components, state management, API integration, and responsive design.

---

## Features

* User registration with form validation
* Entertainment category selection (minimum of three categories)
* Personalized dashboard
* Live weather information
* Automatically rotating news updates
* Countdown timer with start, pause, resume, and reset functionality
* Notes with browser storage persistence
* Movie recommendations based on selected categories
* Movie details displayed in a modal
* Route protection for dashboard pages
* Global state management using Zustand

---

## Tech Stack

* React
* Vite
* JavaScript (ES6+)
* React Router DOM
* Zustand
* Axios
* Tailwind CSS

---

## APIs Used

* OpenWeatherMap API – Weather information
* GNews API – Latest news headlines
* OMDb API – Movie search and details

---

## Project Structure

```text
super-app/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── dashboard/
│   │   └── movies/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── store/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/super-app.git
```

Move into the project folder:

```bash
cd super-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Environment Variables

Create a `.env` file in the project root and add the following variables:

```env
VITE_WEATHER_API_KEY=YOUR_WEATHER_API_KEY
VITE_NEWS_API_KEY=YOUR_NEWS_API_KEY
VITE_MOVIE_API_KEY=YOUR_MOVIE_API_KEY
```

---

## Application Flow

1. Register with your details.
2. Select at least three entertainment categories.
3. Open the personalized dashboard.
4. View weather, news, notes, and timer.
5. Browse recommended movies.
6. Click any movie to view detailed information.

---

## Future Improvements

* Closer implementation of the provided Figma design
* Better loading and error states
* Improved animations and transitions
* Dark/light theme support
* Search and filter for movies

---

## Author

**Vishnu Vardhan B**

This project was developed as part of a frontend assessment to demonstrate React development, API integration, state management, and component-based architecture.
