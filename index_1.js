document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    //find input data and save in variables
    const date = document.getElementById("date").value;
    const scale = Number(document.getElementById("scale").value);
    const note = document.getElementById("note").value;

    //create an object that holds these variables
    const entry = {date, scale, note};

    //first, check if there's anything in localStorage now
    const arr = JSON.parse(localStorage.getItem("moodHistory")) || [];

    //push current entry into array
    arr.push(entry);

    //send this object to localStorage and turn into string
    //we turn the object into string, bc localStorage can only save strings
    localStorage.setItem("moodHistory", JSON.stringify(arr));

    //when the button is pressed, move to this page
    window.location.href = "graph_2.html";
})