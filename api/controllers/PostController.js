
module.exports = { 
  posts: async function(req, res) {
    try {
      const posts = await Post.find()
      res.send(posts)
    } catch (err) {
      return res.serverError(err.toString())
    }
    
  },

  create: function(req, res){
    const title = req.body.title
    const postBody = req.body.postBody
    
    sails.log.debug('Title: '+title+' Body: '+postBody)

    Post.create({title: title, body: postBody}).exec(function(err){
      if (err) {
        return res.serverError(err.toString())
      }
      console.log("Finished creating post object")
      return res.redirect('/home')
    })

    //res.end()
  },

  findbyId : function (req, res) {
    const postId = req.param('postId')

    const filteredPosts = allPosts.filter(p => {return p.id == postId})

    if(filteredPosts.length > 0){
      res.send(filteredPosts[0])
    }else{
      res.send('Failed to find post by id: '+ postId)
    }
  },

  delete: async function(req, res){
    try {
      const postId = req.params.postId
      await Post.destroy({id: postId})
      res.send("Finished deleting post: "+ postId)
    } catch (err) {
      return res.serverError(err.toString())
    }
    
  }
}