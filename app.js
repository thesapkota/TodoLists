var elements = [];
window.onload = function () {
    if (JSON.parse(localStorage.getItem("elements")) != null)
        elements = JSON.parse(localStorage.getItem("elements"));
    console.log(elements);
    display();
};
function addElement() {
    if (document.querySelector(".addTxt").value.trim() != "") {
        elements.push(document.querySelector(".addTxt").value.trim());
        if (localStorage.getItem("elements") == null) {
            localStorage.setItem("elements", JSON.stringify(elements));
        } else {
            localStorage.setItem("elements", JSON.stringify(elements));
        }
        display();
    }
}
function display() {
    document.querySelector(".list").innerHTML = "";
    for (var i = 0; i < elements.length; i++)
        document.querySelector(".list").innerHTML +=
            "<div class='element'>" +
            elements[i] +
            "<button class='tick' onclick='strike(" +
            i +
            ")'>MarkCompleted</button><button class='dustbin' onclick='del(" +
            i +
            ")'>Remove</button></div><br>";

}
function del(index) {
    elements.splice(index, 1);
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}
function strike(index) {
    if (elements[index].includes("<strike>")) {
        elements[index] = elements[index].replace("<strike>", "");
    } else {
        elements[index] = "<strike>" + elements[index] + "</strike>";
    }
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}
