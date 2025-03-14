function index(req,res){
    res.send(`Return all posts`)
};

function show(req,res){
    res.send(`Show the post with slug ${req.params.slug}`)
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