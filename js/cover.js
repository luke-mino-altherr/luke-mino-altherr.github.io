window.onload = function() {

  //Get a reference to the link on the page
  // with an id of "toggle"
  var a = document.getElementById("toggle");

  //Set code to run when the link is clicked
  // by assigning a function to "onclick"
  a.onclick = function() {
    toggle(document.querySelectorAll('.target'));

    return false;
  }

  document.getElementById('toggle-button').addEventListener('click', function () {
    toggle(document.querySelectorAll('.target'));
  });
}

function toggle (elements, specifiedDisplay) {
  var element, index;

  elements = elements.length ? elements : [elements];
  for (index = 0; index < elements.length; index++) {
    element = elements[index];

    if (isElementHidden(element)) {
      element.style.display = '';

      // If the element is still hidden after removing the inline display
      if (isElementHidden(element)) {
        element.style.display = specifiedDisplay || 'block';
      }
    } else {
      element.style.display = 'none';
    }
  }

  function isElementHidden (element) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
  }
}
