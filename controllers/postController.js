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
    const postsSlug = req.params.slug
    const post = forum.find(post => post.slug === postsSlug)
    console.log(post)
    }
    res.json(post)


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
