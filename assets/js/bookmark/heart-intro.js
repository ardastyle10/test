// bookmark.js

const title = document.title;
const url = window.location.href;
const bookmark = { title, url };

function isBookmarked() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  return bookmarks.some(b => b.url === url);
}

function updateIcon() {
  const icon = document.getElementById("heartIcon");
  if (icon) {
    icon.className = isBookmarked() ? "bi bi-heart-fill" : "bi bi-heart";
  }
}

function toggleBookmark() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  if (isBookmarked()) {
    bookmarks = bookmarks.filter(b => b.url !== url);
  } else {
    if (title && url) {
      bookmarks.push(bookmark);
    }
  }

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  updateIcon();
}

document.addEventListener("DOMContentLoaded", updateIcon);