const express = require('express');

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})