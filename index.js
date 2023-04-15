const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12502
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15137
    }
]


/*
let name = posts[0].name
let username = posts[0].username
let location = posts[0].location
let avatar = posts[0].avatar
let post = posts[0].post
let comment = posts[0].comment
let likes = posts[0].likes
*/

/* HTML elements */

const avatarImg = document.getElementById("avatar-img")
const avatarName = document.getElementById("avatar-name")
const avatarLocation = document.getElementById("avatar-location")
const postImg = document.getElementById("post-img")
const likesCount = document.getElementById("likes-count")

const username = document.getElementById("username")
const commentText = document.getElementById("comment-text")

function setPost(postNumber){
    avatarImg.src = posts[postNumber].avatar
    avatarName.innerHTML = posts[postNumber].name
    avatarLocation.innerHTML = posts[postNumber].location
    postImg.src = posts[postNumber].post
    likesCount.innerHTML = posts[postNumber].likes + " likes"
    username.innerHTML = posts[postNumber].username + " "
    commentText.innerHTML = posts[postNumber].comment
}

let currentPostNumber = Math.floor(Math.random() * posts.length)

setPost(currentPostNumber)

avatarImg.addEventListener("click", function(){
    if(currentPostNumber === posts.length -1){
        currentPostNumber = 0
    }else{
        currentPostNumber++
    }
    setPost(currentPostNumber)
})