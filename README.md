#High School Graduation Project: Interactive Shopping Website

This project is a simple interactive shopping website developed for a high school graduation assignment, providing essential features such as product viewing, adding items to a cart, signup functionality, and customer support.

Project Architecture

The architecture of this project is straightforward and comprises:

HTML files: Serve as the structure for different pages (index, cart, signup, support).

CSS files: Manage the styling of elements and layout.

JavaScript files: Handle dynamic behaviors such as adding items to the cart, user interactions, and email sending capabilities.

Directory Structure

.
├── index.html
├── addtocart.html
├── signup.html
├── support.html
├── styles.css
├── addtocart.css
├── signup.css
├── support.css
├── navbar.css
├── app.js
├── addtocart.js
├── sendemail.js
├── image/
│   ├── background.png
│   └── [other images...]
└── .vscode/
    └── settings.json

Prerequisites

A modern web browser (Chrome, Firefox, Edge, etc.).

Node.js (optional, for running local server or additional JavaScript functionalities).

Local Setup Instructions

To bootstrap this project locally:

Clone or download the project repository.

Open the main index.html file directly in your browser or, preferably, run a local HTTP server:

# Using Python's built-in HTTP server
cd path/to/project
python3 -m http.server 8000

Then open http://localhost:8000 in your browser.

Optional Shell Script

To simplify local setup, you can use this shell script:

#!/bin/bash

# Navigate to project directory
cd $(dirname "$0")

# Start Python HTTP server
python3 -m http.server 8000

# Open the default browser
echo "Opening http://localhost:8000 in your default browser"

if which xdg-open > /dev/null; then
  xdg-open http://localhost:8000
elif which open > /dev/null; then
  open http://localhost:8000
else
  echo "Please manually open http://localhost:8000"
fi

Make this script executable and run it:

chmod +x setup.sh
./setup.sh

Features

Interactive product cart

User signup

Basic support form

Technologies Used

HTML

CSS

JavaScript

Author

Your Name - High School Graduation Project
