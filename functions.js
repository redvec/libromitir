// JAVASCRIPT BLOQUEA RENDERING
var enlaces = document.getElementsByTagName('a');
console.log(enlaces);
var currentChapterIndex = enlaces[0];
// Ensure the index stays within the valid range
function navigateToChapter(rumbo) {
  if (currentChapterIndex < 0) {
    currentChapterIndex = 0;
  } else if (currentChapterIndex >= enlaces.length) {
    currentChapterIndex = enlaces.length - 1;
  }
}

// acción
var nextPage = enlaces[currentChapterIndex].href;
window.location.href = nextPage;