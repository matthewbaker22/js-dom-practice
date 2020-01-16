const article1 = document.querySelector(".article__header");
article1.textContent = "Welcome to Matthew's blog";

const article2 = document.querySelectorAll(".article__header");

for (let i = 0; i < article2.length; i++) {
    article2[i].classList.add("important");
}

const dashedRem = document.querySelector(".dashed");
dashedRem.classList.remove("dashed");

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");

const article = document.querySelector(".article");
article.classList.add("bcg");

const articleContent = document.querySelector(".article__content");
articleContent.classList.add("article");

const simpleList = document.querySelectorAll("#simple-list li");

for (let i = 0; i < simpleList.length; i++) {
    if (i === 0) {
        simpleList[0].classList.add("red-text");
    } else if (i === 1) {
        simpleList[1].classList.add("blue-text");
    } else {
        simpleList[2].classList.add("green-text");
    }
}
