const codeElements = document.querySelectorAll('code');
codeElements.forEach((codeElement) => {
  codeElement.innerHTML = codeElement.innerHTML.replace(/,/g, ',<br>');
});
