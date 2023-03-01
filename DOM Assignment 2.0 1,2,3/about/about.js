let acc = document.querySelector(".accordian-wrapper");
let newDiv = document.createElement("div");
newDiv.className = "accordian";
newDiv.innerHTML = `<h3>Skills</h3>
<p>I posses a very good command over Full Stack Development technologies like MERN which can be seen in my work over the GitHub.</p>`;
acc.appendChild(newDiv);

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
