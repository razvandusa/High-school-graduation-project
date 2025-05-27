# High School Graduation Project: Interactive Shopping Website

This project is a simple interactive shopping website developed for a high school graduation assignment, providing essential features such as product viewing, adding items to a cart, signup functionality, and customer support.

## Project Architecture
The architecture of this project is straightforward and comprises:
- **HTML files**: Serve as the structure for different pages (index, cart, signup, support).
- **CSS files**: Manage the styling of elements and layout.
- **JavaScript files**: Handle dynamic behaviors such as adding items to the cart, user interactions, and email sending capabilities.

### Directory Structure
```
.
├── index.html
├── addtocart.html
├── signup.html
├── support.html
├── css/
│   ├── styles.css
│   ├── addtocart.css
│   ├── signup.css
│   ├── support.css
│   └── navbar.css
├── js/
│   ├── app.js
│   ├── addtocart.js
│   └── sendemail.js
├── image/
│   ├── background.png
│   └── [other images…]
└── .vscode/
    └── settings.json
```
## Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.).
- [Node.js](https://nodejs.org/) (optional, for running local server or additional JavaScript functionalities).

## Local Setup Instructions

To bootstrap this project locally:

1. Clone or download the project repository.

2. Now run a local HTTP server:

```bash
# Using Python's built-in HTTP server
cd path/to/project
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.
