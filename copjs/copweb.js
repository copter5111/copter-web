const but2 = document.querySelector("#but-2");
if (but2) {
  but2.addEventListener("click", () => {
    console.log("awdwad");
    window.location.href = "nextpage-2.html";
  });
  but2.addEventListener("mouseenter", () => {
    but2.classList.add("hot");
  });
  but2.addEventListener("mouseleave", () => {
    but2.classList.remove("hot");
  });
}

const but1 = document.querySelector("#but-1");
if (but1) {
  but1.addEventListener("click", () => {
    console.log("awdwad");
    window.location.href = "index.html";
  });
  but1.addEventListener("mouseenter", () => {
    but1.classList.add("hot");
  });
  but1.addEventListener("mouseleave", () => {
    but1.classList.remove("hot");
  });
}
  
const but3 = document.querySelector("#but-3");
if (but3) {
  but3.addEventListener("click", () => {
    console.log("awdwad");
    window.location.href = "nextpage-3.html";
  });

  
  but3.addEventListener("mouseenter", () => {
    but3.classList.add("hot");
  });
  but3.addEventListener("mouseleave", () => {
    but3.classList.remove("hot");
  });

}
