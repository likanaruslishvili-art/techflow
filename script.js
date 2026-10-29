document.addEventListener("DOMContentLoaded", function () {
    console.log("TechFlow App Loaded Successfully.");

    const calcButton = document.getElementById("calc-btn");
    const planSelect = document.getElementById("plan-select");
    const userCountInput = document.getElementById("user-count");
    const monthCountInput = document.getElementById("month-count");
    const resultDisplay = document.getElementById("total-price-display");

    if (!calcButton || !planSelect || !userCountInput ||
        !monthCountInput || !resultDisplay) {
        console.error("კალკულატორის საჭირო ელემენტები ვერ მოიძებნა.");
        return;
    }

    calcButton.addEventListener("click", function () {
        const planPrice = Number(planSelect.value);
        const userCount = Number(userCountInput.value);
        const monthCount = Number(monthCountInput.value);

        if (
            !Number.isInteger(userCount) ||
            userCount < 1 ||
            userCount > 100 ||
            !Number.isInteger(monthCount) ||
            monthCount < 1 ||
            monthCount > 36
        ) {
            resultDisplay.textContent =
                "შეიყვანე სწორი მონაცემები: მომხმარებელი 1–100, თვე 1–36";
            return;
        }

        if (!Number.isFinite(planPrice) || planPrice <= 0) {
            resultDisplay.textContent = "აირჩიე სწორი პაკეტი";
            return;
        }

        const totalCost = planPrice * userCount * monthCount;

        resultDisplay.textContent =
            "$" + totalCost.toLocaleString("en-US");

        console.log("პაკეტის ფასი:", planPrice);
        console.log("მომხმარებლები:", userCount);
        console.log("თვეები:", monthCount);
        console.log("საბოლოო ფასი:", totalCost);
    });
});


