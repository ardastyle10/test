document.addEventListener("DOMContentLoaded", function () {
    const heartIcons = document.querySelectorAll(".heart-icon");

    function saveLikeStatus(target, status) {
        localStorage.setItem(`liked_${target}`, status);
    }

    heartIcons.forEach(icon => {
        const target = icon.getAttribute("data-target-heart");
        if (!target) {
            console.warn("Missing data-target-heart on icon:", icon);
            return;
        }

        const isLiked = localStorage.getItem(`liked_${target}`) === "true";

        if (isLiked) {
            icon.classList.add("liked2", "bxs-heart");
            icon.classList.remove("bx-heart");
        } else {
            icon.classList.remove("liked2", "bxs-heart");
            icon.classList.add("bx-heart");
        }

        icon.addEventListener("click", function () {
            const currentTarget = this.getAttribute("data-target-heart");
            console.log("Clicked heart for:", currentTarget);

            const isNowLiked = this.classList.toggle("liked2");

            if (isNowLiked) {
                this.classList.remove("bx-heart");
                this.classList.add("bxs-heart");
            } else {
                this.classList.remove("bxs-heart");
                this.classList.add("bx-heart");
            }

            saveLikeStatus(currentTarget, isNowLiked);
        });
    });
});
