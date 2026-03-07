// Stop Propagation Example

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Child clicked");
});