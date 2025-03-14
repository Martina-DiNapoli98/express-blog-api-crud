const express = require("express");
const app = express();
const port = 3003;
const postsRouter = require("./routers/posts")

/* listening */

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);

});

/* homepage root */
app.get('/',(req,res)=>{
    res.send(`Welcome on our server`)
});


app.use('/api/v1/posts', postsRouter);
