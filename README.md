# Setting Up Frontend (Client)

1. In the terminal run $ npm create vite@latest
2. Name it frontend
3. Use arrow keys and choose React (press enter to select)
4. Choose Javascript

# Setting Up Backend

1. Create a folder named backend
2. In terminal (make sure you're in that folder) run $ npm init -y
3. In terminal run $ npm i express nodemon
4. Create a file index.js
5. Paste this into index.js `
   const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});`
6. In the package.json, replace scripts with this`
"scripts": {
"start": "node server/index.js"
},`
