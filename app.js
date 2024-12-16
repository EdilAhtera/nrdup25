// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9Yo_cX9oKwnu3hqkCKMyQveKsjft6FuI",
  authDomain: "noordup-179be.firebaseapp.com",
  databaseURL: "https://noordup-179be.firebaseio.com",
  projectId: "noordup-179be",
  storageBucket: "noordup-179be.firebasestorage.app",
  messagingSenderId: "25031006249",
  appId: "APP_ID"
};

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Ambil data dari Realtime Database
const blogContainer = document.getElementById("blog-container");

database.ref("blogs").on("value", (snapshot) => {
  blogContainer.innerHTML = ""; // Clear content
  const blogs = snapshot.val();

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
});
