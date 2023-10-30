import express from 'express';

const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.json({message :"ok 200"})
})

app.listen(port,()=> {
    console.log(`Server runnig at http://localhost:${port}`);
})