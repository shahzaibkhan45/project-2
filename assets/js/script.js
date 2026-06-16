const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {
    const runSearch = function () {
        const searchText = searchInput.value.trim().toLowerCase();

        if (searchText === "") {
            alert("Please enter something to search");
            return;
        }

        const cards = document.querySelectorAll(".services-card");

        // If the current page has no service cards, open services page with search text.
        if (!cards.length) {
            window.location.href = `./sevices.html?search=${encodeURIComponent(searchText)}`;
            return;
        }

        let found = false;
        let firstMatch = null;

        cards.forEach(function (card) {
            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(searchText)) {
                card.style.border = "3px solid orange";

                if (!firstMatch) {
                    firstMatch = card;
                }

                found = true;
            } else {
                card.style.border = "";
            }
        });

        if (firstMatch) {
            firstMatch.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        if (!found) {
            alert("Not Found");
        }
    };

    searchBtn.addEventListener("click", runSearch);

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            runSearch();
        }
    });

    const params = new URLSearchParams(window.location.search);
    const incomingSearch = params.get("search");

    if (incomingSearch) {
        searchInput.value = incomingSearch;
        runSearch();
    }
}