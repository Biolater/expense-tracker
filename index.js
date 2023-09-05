let itemCount = 0;
const defaultText = $(".default-text");
const itemName = $("#item-name");
const itemDate = $("#item-date");
const itemAmount = $("#item-amount");
const button = $("button");
const newList = $(".item-list");

button.click(function () {
    itemCount++;
    defaultText.hide();

    const count = itemCount; // Store the current count to avoid closure issues

    newList.append(`<div class="item-lista item-${count}">
        <p>${itemName.val()}</p><p>${itemDate.val()}</p><p>${itemAmount.val()}</p><p class="delete"><span class="item-${count}">X</span></p>
    </div>`);

    itemName.val("");
    itemAmount.val("");
    itemDate.val("");
});

newList.on("click", ".delete span", function () {
    itemCount--;
    if(itemCount <=0){
        defaultText.show();
    }
    const className = $(this).attr("class");
    $(`.item-list .${className}`).hide();
});
