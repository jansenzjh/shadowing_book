# Shadowing Textbook

This project provides an interactive shadowing textbook experience, specifically designed to aid in learning Japanese through shadowing, especially during commutes. The purpose is to digitalize textbook content, which often has small text and unfamiliar kanji, to be viewed in a web browser. This setup allows for easier reading and the addition of furigana to assist with kanji pronunciation and understanding.

## Project Structure

- `index.html`: The main HTML file that structures the web application.
- `style.css`: Contains the styling for the web application.
- `script.js`: Contains the JavaScript logic for loading units and handling audio playback.
- `audio/`: This directory contains all the MP3 audio files used in the units.
- `unitX.md`: Markdown files for each unit (e.g., `unit2.md`, `unit3.md`), containing the text content.

## How to Use

This project requires a web server to function correctly, as it fetches Markdown files dynamically. Simply opening `index.html` directly from your file system will not work due to browser security restrictions (CORS).

1.  **Start a local web server:**
    The simplest way is to use Python's built-in HTTP server. Navigate to the project's root directory in your terminal and run:
    ```bash
    python3 -m http.server
    ```
    If you are using Python 2, use:
    ```bash
    python -m SimpleHTTPServer
    ```
2.  Open your web browser and navigate to `http://localhost:8000` (or the address shown in your terminal).
3.  Select a unit from the navigation menu.
4.  The content of the selected unit will be displayed, along with embedded audio players for shadowing practice.

## Development

### Prerequisites

- Python (for running a local web server)
