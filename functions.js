function navigateToPreviousChapter() {
    navigateToChapter(calculateChapterNumber() - 1);
  }
  
  function navigateToNextChapter() {
    navigateToChapter(calculateChapterNumber() + 1);
  }
  
  function calculateChapterNumber() {
    var currentChapter = document.querySelector(".libromitir h2.cabeceras").textContent;
    var chapterNumber = parseInt(currentChapter.substring(0, 2));
    return chapterNumber;
  }
  
  
    var currentChapter = libromitirElement.textContent;
    if (!currentChapter) {
      console.error("Text content of 'libromitir' element is null or empty.");
      return 0; // Return a default value or handle the error accordingly
    }
  
    var chapterNumber = parseInt(currentChapter.substring(0, 2));
    if (isNaN(chapterNumber)) {
      console.error("Unable to parse chapter number from text content.");
      return 0; // Return a default value or handle the error accordingly
    }
  
    return chapterNumber;
  }
  
  function navigateToChapter(chapterNumber) {
    var chapterFolder = chapterNumber.toString().padStart(2, '0') + "__";
    var chapterURL = chapterFolder + "chapter.html";
    
    // Perform the navigation to the specified chapter URL
    // Replace the following line with your actual code
    console.log("Navigating to chapter: " + chapterURL);
  }
  