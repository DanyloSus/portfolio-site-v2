const useReveal = () => {
  // create custom hook for reveal (I create that because reveal function I use more than one time)
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal"); // get all elements with the reveal class
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight; // get window height
      var elementTop = reveals[i].getBoundingClientRect().top; // get a top space of the element
      var elementVisible = 0;
      if (elementTop < windowHeight - elementVisible) {
        // if element is visible or higher then screen
        reveals[i].classList.add("active"); // appear of the element
      } else {
        // if element is in bottom
        reveals[i].classList.remove("active"); // hide the element
      }
    }
  };

  reveal(); // use reveal

  return null;
};

export default useReveal; // export custom hook
