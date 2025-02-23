const button = document.querySelector("#super");

const onClick = function() {
    alert("button has been clicked");
};

button.addEventListener("click", onClick);