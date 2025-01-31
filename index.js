const express = require("express");
const app = express();
const PORT = 3434;
const cors = require("cors");
app.use(cors());

app.get('/api', async (req, res) => {
    const date = new Date();
    return res.status(200).json({
        "email": "mkusimo90@gmail.com",
        "current_datetime": date,
        "github_url": "https://github.com/mojeedkusimo/hng12-nodejs-task1"
    });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})