
// search button

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

        if (cards.length === 0) {
            window.location.href =
                `./sevices.html?search=${encodeURIComponent(searchText)}`;
            return;
        }

        let found = false;
        let firstMatch = null;

        cards.forEach(function (card) {

            const title = card
                .querySelector("h3")
                .textContent
                .toLowerCase();

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

// sent to email

if (typeof emailjs !== "undefined") {
    emailjs.init("UJb-VdvnbrbEsOb59");
}

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("fullname").value;

        const email =
            document.getElementById("email").value;

        const phone =
            document.getElementById("phone").value;

        const message =
            document.getElementById("message").value;

        emailjs.send(
            "service_70n0uxe",
            "template_j8ajxuf",
            {
                name: name,
                email: email,
                phone: phone,
                message: message
            }
        )
        .then(function () {

            toast.innerHTML = "Form submitted successfully ✅";
      toast.classList.add("show");
      setTimeout(() => {
    toast.classList.remove("show");
}, 5000);

            form.reset();

        })
        .catch(function (error) {

                    console.log(error);

            toast.innerHTML = "Failed To Send Email ❌";
      toast.classList.add("show");
      setTimeout(() => {
    toast.classList.remove("show");
}, 5000);

        });

    });

}




let forms = document.querySelectorAll(".form");

forms.forEach(function(form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let inputs = form.querySelectorAll(".fields");
    let isValid = true;

    inputs.forEach(function(input) {
      if(input.value.trim() === "") {
        isValid = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "2px solid gray";
      }
    });

    if(isValid) {
        toast.innerHTML = "Form submitted successfully ✅";
      toast.classList.add("show");
      setTimeout(() => {
    toast.classList.remove("show");
}, 5000);

      form.reset();
    } else {
        toast.innerHTML = "Please fill all fields ❌";
        toast.classList.add("show");
      setTimeout(() => {
    toast.classList.remove("show");
}, 5000);
    }
  });
});

const btn = document.getElementById("btn");
const toast = document.getElementById("toast");

btn.addEventListener("click", () => {

    toast.classList.add("show");

    
});
