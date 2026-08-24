const message = document.getElementById("message");
const postlist = document.getElementById("postlist");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log("Reponse received: ", response);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then((posts) => {
    console.log("Posts: ", posts);
    message.textContent = "";
    posts.forEach((post) => {
      const li = document.createElement("li");
      const title = document.createElement("h3");
      title.textContent = post.title;
      const body = document.createElement("p");
      body.textContent = post.body;

      li.appendChild(title);
      li.appendChild(body);
      postlist.appendChild(li);
    });
  })
  .catch((error) => {
    console.log("Error: ", error);
    message.textContent = "Failed to load data";
  });
