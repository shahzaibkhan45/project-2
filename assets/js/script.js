
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
const btn = document.getElementById("btn");
const toast = document.getElementById("toast");

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




// let forms = document.querySelectorAll(".form");
// forms.forEach(function(form) {
//   form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     let inputs = form.querySelectorAll(".fields");
//     let isValid = true;
//     inputs.forEach(function(input) {
//       if(input.value.trim() === "") {
//         isValid = false;
//         input.style.borderBottom = "2px solid red";
//       }else{
//         input.style.borderBottom = "2px solid var(--first-color)";
//       }
//     });
// let pass = document.getElementById("pass");
//     let cpass = document.getElementById("cpass");
// if(pass && cpass){
// let passValue = pass.value.trim();
// let cpassValue = cpass.value.trim();
//     if(passValue !== cpassValue){
//         pass.style.borderBottom = "2px solid red";
//         cpass.style.borderBottom = "2px solid red";

//               toast.innerHTML = "Passwords do not match ❌";
//       toast.classList.add("show"); 
//       isValid = false;

//       setTimeout(() => {
//     toast.classList.remove("show");
// }, 5000);
// return;
//     }else{
//         pass.style.borderBottom = "2px solid var(--first-color)";
//         cpass.style.borderBottom = "2px solid var(--first-color)";
        
//     }
//       };
  
//     (isValid) {
//         toast.innerHTML = "Form submitted successfully ✅";
//       toast.classList.add("show");
//       setTimeout(() => {
//     toast.classList.remove("show");
// }, 5000);

//       form.reset();
//     } else {
//         toast.innerHTML = "Please fill all fields ❌";
//         toast.classList.add("show");
//       setTimeout(() => {
//     toast.classList.reifmove("show");
// }, 5000);
//     }
//   });
// });


let signupForms = document.querySelector(".signup-form");
if(signupForms) {
signupForms.addEventListener("submit", function(e) {
    e.preventDefault();
    let inputs = signupForms.querySelectorAll(".fields-signup");
    let isValid = true;
    inputs.forEach(function(input) {
      if(input.value.trim() === "") {
        isValid = false;
        input.style.borderBottom = "2px solid red";
      }else{
        input.style.borderBottom = "2px solid var(--first-color)";
      }
    });
let pass = document.getElementById("pass");
    let cpass = document.getElementById("cpass");

    if(pass.value.trim() === ""){
    pass.style.borderBottom = "2px solid red";
    isValid = false;
}

if(cpass.value.trim() === ""){
    cpass.style.borderBottom = "2px solid red";
    isValid = false;
}

if(pass.value.trim() !== "" && cpass.value.trim() !== "" && pass.value.trim() !== cpass.value.trim()){
    toast.innerHTML = "Passwords do not match ❌";
      toast.classList.add("show"); 
      isValid = false;  
        setTimeout(() => {
    toast.classList.remove("show");
}, 3000);
        pass.style.borderBottom = "2px solid red";
        cpass.style.borderBottom = "2px solid red";
        return;
}

    if(isValid){
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value,
        confirmPassword: document.getElementById("cpass").value
    };
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    toast.innerHTML = "Account Created Successfully ✅";
    toast.classList.add("show");
     setTimeout(() => {
    toast.classList.remove("show");
}, 3000);

    signupForms.reset();
}else {
        toast.innerHTML = "Please fill all fields ❌";
        toast.classList.add("show");
      setTimeout(() => {
    toast.classList.remove("show");
}, 3000);
    
}
});
}

// login form

const loginForm = document.querySelector(".form");
if(loginForm) {
loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    let Lemail = document.getElementById("Lemail");
    let Lpass = document.getElementById("Lpass");

 if(Lemail.value.trim() === "" || Lpass.value.trim() === ""){
    if(Lemail.value.trim() === ""){
        Lemail.style.borderBottom = "2px solid red";
    }
    if(Lpass.value.trim() === ""){
        Lpass.style.borderBottom = "2px solid red";
    }
    toast.innerHTML = "Please fill all fields ❌";
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    return;
}
    const email = document.getElementById("Lemail").value;
    const password = document.getElementById("Lpass").value;

    const storedUser =
        JSON.parse(localStorage.getItem("user"));

    if(
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
    ){
        window.open("./login.html", "_blank");
    }
    else{
        toast.innerHTML = "Invalid email or password ❌";
      toast.classList.add("show");  
        setTimeout(() => {
    toast.classList.remove("show");
}
, 3000);
     Lemail.style.borderBottom = "2px solid red";
     Lpass.style.borderBottom = "2px solid red";
    
    }

});
}
// typing effect
    let typed = new Typed("#typing" ,{
        strings :["Web Design","Frontend Dev","Ui/Ux" , "React Apps", "your Career"],
        typeSpeed : 100,
        backSpeed : 50,
        loop:true
    })


    // conting 
    const studcounter = document.getElementById("studentCount");

let count = 0;
const target = 4800;

const interval = setInterval(() => {

    count += 50;

    studcounter.textContent = count.toLocaleString();

    if (count >= target) {
        studcounter.textContent = target.toLocaleString();
        clearInterval(interval);
    }

}, 20);
// competion rate
const completionCounter = document.getElementById("completionRate");
let completionCount = 0;
const completionTarget = 96;

const completionInterval = setInterval(() => {

    completionCount += 1;
    completionCounter.textContent = completionCount;
    if (completionCount >= completionTarget) {
        completionCounter.textContent = completionTarget;
        clearInterval(completionInterval);
    }
}, 20);

// intership duration
const internshipCounter = document.getElementById("internshipDuration");
let internshipCount = 0;
const internshipTarget = 12;
const internshipInterval = setInterval(() => {
    internshipCount += 0.5;
    internshipCounter.textContent = internshipCount;
    if (internshipCount >= internshipTarget) {
        internshipCounter.textContent = internshipTarget;
        clearInterval(internshipInterval);
    }
}, 20);