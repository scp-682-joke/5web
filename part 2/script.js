const message = document.getElementById("message");
const styleBox = document.getElementById("style-box");
const itemList = document.getElementById("item-list");

document.getElementById("change-text").addEventListener("click", function () {
    message.textContent = "The paragraph text has been changed with JavaScript!";
});

document.getElementById("change-background").addEventListener("click", function () {
    styleBox.style.backgroundColor = "lightblue";
});

document.getElementById("change-font-size").addEventListener("click", function () {
    styleBox.style.fontSize = "24px";
});

document.getElementById("add-item").addEventListener("click", function () {
    const item = document.createElement("li");
    item.textContent = "Item " + (itemList.children.length + 1);
    itemList.appendChild(item);
});

document.getElementById("remove-item").addEventListener("click", function () {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
    }
});

document.getElementById("reset").addEventListener("click", function () {
    message.textContent = "This is the original paragraph.";

    styleBox.style.backgroundColor = "#eeeeee";
    styleBox.style.fontSize = "16px";
});
