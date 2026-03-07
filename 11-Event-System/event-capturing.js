// Event Capturing Example

document.getElementById("parent").addEventListener(
    "click",
    () => {
        console.log("Parent clicked (capturing)");
    },
    true
);

document.getElementById("child").addEventListener(
    "click",
    () => {
        console.log("Child clicked");
    },
    true
);