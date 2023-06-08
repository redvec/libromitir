function navigateToPreviousChapter() {
    navigateToChapter(calculateChapterNumber() - 1);
}

function navigateToNextChapter() {
    navigateToChapter(calculateChapterNumber() + 1);
}

function calculateChapterNumber() {
    var currentChapter = document.querySelector(".libromitir").textContent;
    var chapterNumber = parseInt(currentChapter.substring(0, 2));
    return chapterNumber;
}

function navigateToChapter(chapterNumber) {
    var chapterFolder = chapterNumber.toString().padStart(2, '0') + "__";
    var chapterURL = chapterFolder + "chapter.html";
    
    // Perform the navigation to the specified chapter URL
    // Replace the following line with your actual code
    console.log("Navigating to chapter: " + chapterURL);
}