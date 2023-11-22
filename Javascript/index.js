function displayResult() {
    // Get the value entered in the input field
    let minutesInput = document.getElementById("minutes").value;

    // Convert minutes to seconds
    let seconds = minutesInput * 60;

    // Display the result in the paragraph with id "result" : This part is generating a string that will be set as the text content of the paragraph. It concatenates the string 'Seconds: ' with the value of seconds.toFixed(2).
    document.getElementById("result").innerHTML = "Seconds: " + seconds.toFixed(2);
}

// Add an event listener to the button to trigger the conversion
document.getElementById("button").addEventListener("click", displayResult);