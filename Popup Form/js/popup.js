// Form Validation
function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

// Popup Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}