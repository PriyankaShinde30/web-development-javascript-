// Event Delegation Example

document.getElementById("list").addEventListener("click", function(event) {

    if (event.target.tagName === "LI") {
        console.log("Item clicked:", event.target.textContent);
    }

});