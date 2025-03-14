const forum = require("../data/forum")

function index(req,res){
    let filteredForum = forum;
    if(req.query.slug){
        console.log('Filter the result');
        filteredForum = forum.filter(post => post.slug.includes(req.query.slug))
    }
    res.json(filteredForum)
};

function show(req,res){
    const postsSlug = Number(req.params.slug)
    const post = posts.find(post => post.slug === postsSlug)
    console.log(post)
    if(!post){
        return res.Status(404).json({
            error: "404 not Found",
            message: "post not found"
        })
    }
    res.json(pizza)
};

function store(req,res){
    res.send(`Store new post`)
};

function update(req,res){
    res.send(`Update the post with slug ${req.params.slug}`)
};

function modify(req,res){
    res.send(`Modify the post with slug ${req.params.slug}`)
};

function destroy(req,res){
    res.send(`Delete the post with slug ${req.params.slug}`)
};

module.exports = {index,show,store,update,modify,destroy}
