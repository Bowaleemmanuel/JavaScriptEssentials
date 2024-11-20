let count = 0; // Initialize count to 0
function increaseCount() {
  count++; // Increment the count by 1
    displayCount(); // Display the count
      checkCountValue(); // Check count value and display messages
    }


function displayCount() {
  document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
  }

  function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }

  let reset= function(){
    count = 0;
    document.getElementById('countDisplay').innerHTML = 0;
    displayCount();
    alert("The followers count has been reset to 0."); // Display reset message
}

  let resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", function() {
    reset();
})
