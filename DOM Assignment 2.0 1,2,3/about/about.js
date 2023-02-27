let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

let acc = document.querySelector(".accordian-wrapper");
let newDiv = document.createElement("div");
newDiv.classList.add("accordian")
newDiv.innerHTML = `<h3>Skills</h3>
<p>Some of my popular hobbies are travelling and exploring the new technologies from all over the world.</p>`
acc.appendChild(newDiv);