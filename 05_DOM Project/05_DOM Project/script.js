let selector = document.querySelector(".nav-center");

// Creating an Element

let NewDiv = document.createElement("div");
NewDiv.innerHTML = `<a href="index.html" class="btn"> Pro Subscription </a>`;
selector.appendChild(NewDiv);

