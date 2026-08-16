function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: "Ram",
      });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["nice", "good"]);
    }, 1000);
  });
}

getUser(1)
  .then((user) => {
    console.log("User:", user);

    return getPosts(user.id);
  })

  .then((posts) => {
    console.log("Posts:", posts);

    return getComments(posts[0]);
  })

  .then((comments) => {
    console.log("Comments:", comments);
  })

  .catch((error) => {
    console.log("Error:", error);
  });
