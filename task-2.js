const listRef = document.querySelector(".js-accordion-list");
 

function handleBtnClick(event) {
    if (event.target.nodeName === "BUTTON"){
        const activeElement = event.target.closest('li');
        const panel = activeElement.querySelector('.panel');
        panel.classList.toggle('active');
    }
}

listRef.addEventListener("click", handleBtnClick);