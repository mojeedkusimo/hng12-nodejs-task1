const express = require("express");
const app = express();
const PORT = 3434;
app.get('/api', async (req,res) => {

res.json({
    "email": "mkusimo90@gmail.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/mojeedkusimo/hng12-nodejs-task1"
});

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})