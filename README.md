# PDF-FX Merger

A web application that allows users to upload and merge PDF files into a single PDF document using JavaScript and Node.js.

## Features

- Upload PDF files through a web interface.
- Merge up to two PDF files into one document.
- Download the merged PDF.
- Store uploaded PDF files in the `uploads/` folder.
- Store the merged PDF in the `public/` folder.
- Simple and user-friendly interface.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- Multer
- pdf-merger-js

## Project Structure

```text
PDF-FX-Merger/
│
├── public/
│   └── .gitkeep
│
├── templates/
│   └── index.html
│
├── uploads/
│   └── .gitkeep
│
├── merge.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation and Setup

1. Clone this repository:

```bash
git clone https://github.com/Hithesh-kunder/PDF-FX-Merger.git
```

2. Navigate to the project folder:

```bash
cd PDF-FX-Merger
```

3. Install the dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open your browser and visit:

```text
http://localhost:3000
```

## How It Works

1. Open the application in your browser.
2. Select two PDF files.
3. Click the merge button.
4. The application uploads the selected files to the server.
5. The backend merges the PDFs into one document.
6. Download the resulting PDF.

## Purpose

This project was developed to practice JavaScript, Node.js, Express.js, file uploads, asynchronous operations, and backend development.

---

**Developed by Hithesh-kunder**
