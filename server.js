const express = require("express");
const app = express();
const cors = require('cors');
const port = 3003;
const postsRouter = require("./routers/posts");
const errorsHandler = require("./middlewares/serverError");
const notFound = require("./middlewares/error_404")


app.use(express.static('public'))
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}))
/* listening */

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);

});

/* homepage root */
app.get('/', (req, res) => {
    res.send(`Welcome on our server`)
});


app.use('/api/v1/posts', postsRouter);


app.post('/', (req, res) => {
    console.log(req.body)
})

app.use(errorsHandler);

app.use(notFound)