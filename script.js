document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".portfolio-filter button");
    const cards = document.querySelectorAll(".portfolio-card");

    // اگر فیلترها وجود نداشتند، کد اجرا نشود
    if (!buttons.length || !cards.length) {
        return;
    }

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // تغییر دکمه فعال
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // دسته‌بندی انتخاب‌شده
            const filter = button.dataset.filter;

            // نمایش یا مخفی کردن نمونه‌کارها
            cards.forEach(card => {

                if (filter === "all" || card.dataset.category === filter) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }

            });

        });

    });

});