// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9Yo_cX9oKwnu3hqkCKMyQveKsjft6FuI",
  authDomain: "noordup-179be.firebaseapp.com",
  databaseURL: "https://noordup-179be-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "noordup-179be",
  storageBucket: "noordup-179be.appspot.com",
  messagingSenderId: "25031006249",
  appId: "1:25031006249:web:64e899aa7ab781c4eae438"
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

// Ambil data dari Realtime Database
const blogContainer = document.getElementById("blog-container");

database.ref("blogs").on("value", (snapshot) => {
    blogContainer.innerHTML = ""; // Clear content
    const blogs = snapshot.val();

    if (blogs) {
        for (const id in blogs) {
            const blog = blogs[id];
            const blogElement = document.createElement("div");

            blogElement.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
                <small>By: ${blog.author} | ${blog.date}</small>
                <hr>
            `;
            blogContainer.appendChild(blogElement);
        }
    } else {
        blogContainer.innerHTML = "<p>No articles found.</p>";
    }
});

database.ref("blogs").on("value", (snapshot) => {
    blogContainer.innerHTML = ""; // Clear content
    const blogs = snapshot.val();

    if (blogs) {
        for (const id in blogs) {
            const blog = blogs[id];
            const blogElement = document.createElement("div");

            blogElement.innerHTML = `
                <h2><a href="article.html?id=${id}" class="blog-link">${blog.title}</a></h2>
                <p>${blog.content.substring(0, 100)}...</p>
                <small>By: ${blog.author} | ${blog.date}</small>
                <hr>
            `;
            blogContainer.appendChild(blogElement);
        }
    } else {
        blogContainer.innerHTML = "<p>No articles found.</p>";
    }
});
