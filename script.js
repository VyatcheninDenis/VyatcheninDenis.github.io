window.addEventListener("DOMContentLoaded", function () {
    let answer = document.getElementById("answer");
    let price = document.getElementById("price");
    let count = document.getElementById("count");
    let b = document.getElementById("calculate");
    let k = 0;
    b.addEventListener("click", function () {
        let r = new RegExp(/^\d+$/);
        if (r.test(price.value) && r.test(count.value)) {
            answer.innerHTML = "Стоимость: " + price.value * count.value;
            k = 0;
        } else {
            answer.innerHTML = "<div class='bg-danger'> Неправильный ввод;</div>";
        }
    });
});