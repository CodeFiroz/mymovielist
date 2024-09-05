# 🎬 My Movie List App 🍿

Welcome to the **My Movie List** app! This project allows users to search for movies, add them to a personal list, and store the list locally using `localStorage`. Built with modern web technologies, this app is a fun and functional tool for movie enthusiasts.

![App Screenshot](https://raw.githubusercontent.com/CodeFiroz/mymovielist/main/preview.jpeg)

## 🚀 Features

- **Movie Search**: Search for your favorite movies by title using The Movie Database (TMDb) API.
- **Add to List**: Easily add movies to your personal list with one click.
- **Persistent Storage**: Your movie list is saved using `localStorage`, so it’s available even after closing the browser.
- **Responsive Design**: The app is fully responsive and works seamlessly on all devices.
- **Redux for State Management**: Efficiently manages the application state with Redux Toolkit.
- **Asynchronous Data Fetching**: Handles API requests asynchronously using `createAsyncThunk` from Redux Toolkit.

## 🛠️ Built With

- **React**: Frontend library for building user interfaces.
- **Redux Toolkit**: State management tool that simplifies handling complex state logic.
- **TMDb API**: External API used for fetching movie data.
- **CSS**: Custom styles for a clean and user-friendly interface.
- **localStorage**: Browser storage used to persist the movie list data.

## 🔍 How It Works
Search for Movies:
-  Enter a movie title in the search bar and click "Add to List 🎬".
-  The app will fetch movie details from the TMDb API and display them.

Add Movies to Your List:
- Once you find a movie, it will be added to your personal list displayed on the page.
- The movie list is saved in `localStorage` and will be available the next time you visit.

Remove Movies from the List:
- If you want to remove a movie from your list, simply click the delete button (🗑️).
