document.addEventListener("DOMContentLoaded", function () {

    const wilayaCards = document.querySelectorAll(".wilaya-card");

    wilayaCards.forEach(function (card) {

        const title = card.querySelector("h2");

        title.addEventListener("click", function () {

            const isOpen = card.classList.contains("active");

            // إغلاق جميع الولايات
            wilayaCards.forEach(function (otherCard) {
                otherCard.classList.remove("active");
            });

            // إذا كانت مغلقة، افتحها
            if (!isOpen) {
                card.classList.add("active");
            }

        });

    });

});


const infoBoxes = document.querySelectorAll(".info-box");

infoBoxes.forEach(function (box) {

    const title = box.querySelector("h2");

    title.addEventListener("click", function () {

        const isOpen = box.classList.contains("active");

        infoBoxes.forEach(function (otherBox) {
            otherBox.classList.remove("active");
        });

        if (!isOpen) {
            box.classList.add("active");
        }

    });

});