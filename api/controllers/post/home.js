module.exports = async function (req, res) {
    console.log("This route shows the home paage")

    const allPosts = await Post.find()

    res.view('pages/home',
        {allPosts}
    )
}