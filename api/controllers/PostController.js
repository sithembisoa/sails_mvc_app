// dummy data
const post1 = {id: 1, title: 'post 1 title', body: 'this is the body of post 1'}
const post2 = {id: 2, title: 'post 2 title', body: 'this is the body of post 2'}
const post3 = {id: 3, title: 'post 3 title', body: 'this is the body of post 3'}
const allPosts = [post1, post2, post3]

module.exports = { 
  posts: function(req, res) {
    res.send(allPosts)
  },

  create: function(req, res){
    const newPost = {id: 4, title: 'New Post', body: 'New body'}
    allPosts.push(newPost)

    res.end()
  },

  findbyId : function (req, res) {
    const postId = req.param('postId')

    const filteredPosts = allPosts.filter(p => {return p.id == postId})

    if(filteredPosts.length > 0){
      res.send(filteredPosts[0])
    }else{
      res.send('Failed to find post by id: '+ postId)
    }
  }
}