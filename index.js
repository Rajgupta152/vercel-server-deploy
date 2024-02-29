import express from "express";

const app =  express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running");
});

const port = 8081;

app.listen(port, () => {
    console.log("Server is running on port", port);
})