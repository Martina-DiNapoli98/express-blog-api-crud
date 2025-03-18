const forum = require("../data/forum")


/* functions */
function index(req,res){
    /* let filteredForum = forum;
    if(req.query.slug){
        console.log('Filter the result');
        filteredForum = forum.filter(post => post.slug.includes(req.query.slug))
    }; */
    let filteredForum = forum;
    if(req.query.tags){
        console.log(`Filter the result`);
        filteredForum = forum.filter(post => post.tags.includes(req.query.tags))
    }

    res.json(filteredForum);


};

function show(req,res){
    const postsSlug = req.params.slug
    const post = forum.find(post => post.slug === postsSlug)
    console.log(post)
    if(!post){
        return res.status(404).json({
            error: '404',
            message: 'Post not found'
        })
    }
    res.json(post);
};
    
function store(req,res){
    let newSlug = req.body.title.toLowerCase().replace(/\s+/g, '-')
    const newPosts = {
        title : req.body.title,
        slug: newSlug,
        image : req.body.image,
        content : req.body.content,
        tags : req.body.tags
    }
    forum.push(newPosts);
    console.log(forum);
    res.status(201);
    res.json(newPosts)
};

function update(req,res){
    const postsSlug = req.params.slug
    const post = forum.find(post => post.slug === postsSlug)
    console.log(post)
    if(!post){
        return res.status(404).json({
            error: '404',
            message: 'Post not found'
        })
    }
    post.title = req.body.title
    post.slug = req.body.title.toLowerCase().replace(/\s+/g, '-')
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags

    console.log(forum)
    res.json(post)
};

function modify(req,res){
    res.send(`Modify the post with slug ${req.params.slug}`)
};

function destroy(req,res){
    const postsSlug = req.params.slug
    const post = forum.find(post => post.slug === postsSlug)

    if(!post){
        res.status(404);

        return res.json({
            status : 404,
            error :"not found",
            message:"post not found"
        })
    }
    forum.splice(forum.indexOf(post), 1)
    console.log(forum)
    res.sendStatus(204)
};

/* exports module */
module.exports = {index,show,store,update,modify,destroy};
