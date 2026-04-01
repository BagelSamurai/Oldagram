const posts = [
  {
    name: "Vincent van Gogh",

    username: "vincey1853",

    location: "Zundert, Netherlands",

    avatar: "images/avatar-vangogh.jpg",

    post: "images/post-vangogh.jpg",

    comment: "just took a few mushrooms lol",

    likes: 21,
  },

  {
    name: "Gustave Courbet",

    username: "gus1819",

    location: "Ornans, France",

    avatar: "images/avatar-courbet.jpg",

    post: "images/post-courbet.jpg",

    comment: "i'm feelin a bit stressed tbh",

    likes: 4,
  },

  {
    name: "Joseph Ducreux",

    username: "jd1735",

    location: "Paris, France",

    avatar: "images/avatar-ducreux.jpg",

    post: "images/post-ducreux.jpg",

    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",

    likes: 152,
  },
];

const mainEl = document.getElementById("main-content");
let listItems = "";

for (let i = 0; i < posts.length; i += 1) {
  // We are replacing ALL the hardcoded "Vincent" data with ${posts[i].propertyName}
  const postContent = `
        <article class="post-container">
            <div class="post-header">
                <img
                    src="${posts[i].avatar}"
                    class="user-avatar"
                    alt="${posts[i].name} profile picture"
                />
                <div class="post-header-text">
                    <p class="user-name">${posts[i].name}</p>
                    <p class="location">${posts[i].location}</p>
                </div>
            </div>

            <div class="post">
                <img
                    src="${posts[i].post}"
                    alt="Post by ${posts[i].name}"
                />
            </div>

            <div class="buttons-tray">
                <button class="like-button">
                    <img
                        src="./images/icon-heart.png"
                        alt="Like"
                        class="btn-img"
                    />
                </button>
                <button class="comment-button">
                    <img
                        src="./images/icon-comment.png"
                        alt="Comment"
                        class="btn-img"
                    />
                </button>
                <button class="share-button">
                    <img
                        src="./images/icon-dm.png"
                        alt="Share"
                        class="btn-img"
                    />
                </button>
            </div>

            <div class="post-caption">
                <p class="post-likes">${posts[i].likes} likes</p>
                <div class="caption-details">
                    <p class="user-id">${posts[i].username}</p>
                    <p class="caption-text">${posts[i].comment}</p>
                </div>
            </div>
        </article>
    `;

  // Add the generated HTML to our bucket string
  listItems += postContent;
}

// Render the whole bucket to the DOM
mainEl.innerHTML = listItems;

// Like button functionality
const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const currentPost = event.target.closest(".post-container");

    const postLikes = currentPost.querySelector(".post-likes");

    // 6. Do the math and update the text
    const currentLikes = parseInt(postLikes.textContent);
    postLikes.textContent = `${currentLikes + 1} likes`;
  });
});
