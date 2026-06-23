async function loadHeader() {
    const container = document.getElementById("header-container");
    if (!container) {
        return;
    }
const response = await fetch("header.html");
const data = await response.text();
  container.innerHTML = data;
};
async function init(){
    await loadHeader();

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
 toast.hidden = false;
            toast.innerHTML = "Form submitted successfully ✅";
      toast.classList.add("show");
      setTimeout(() => {
    toast.classList.remove("show");
}, 5000);

            form.reset();

        })
        .catch(function (error) {

                    console.log(error);
 toast.hidden = false;
            toast.innerHTML = "Failed To Send Email ❌";
      toast.classList.add("show");
      setTimeout(() => {
    toast.classList.remove("show");
}, 5000);

        });

    });

}


// sign up form

let pass = document.getElementById("pass");
    let cpass = document.getElementById("cpass");
let signupForms = document.querySelector(".signup-form");
if(signupForms) {
signupForms.addEventListener("submit", function(e) {
    e.preventDefault();
    let inputs = signupForms.querySelectorAll(".fields-signup");
    let isValid = true;
    inputs.forEach(function(input) {
      if(input.value.trim() === "") {
        isValid = false;
        input.style.border = "2px solid red";
      }else{
        input.style.border = "2px solid gray";
      }
    });

    if(pass.value.trim() === ""){
    pass.style.border = "2px solid red";
    isValid = false;
}

if(cpass.value.trim() === ""){
    cpass.style.border = "2px solid red";
    isValid = false;
}
    const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if(pass.value.trim() !== "" && !passwordPattern.test(pass.value.trim())){
     toast.hidden = false;
    toast.innerHTML = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character ❌";
      toast.classList.add("show"); 
      isValid = false;
       setTimeout(() => {
    toast.classList.remove("show");
}, 3000);
        pass.style.border = "2px solid red";
        cpass.style.border = "2px solid red";
            return;
}

if(pass.value.trim() !== "" && cpass.value.trim() !== "" && pass.value.trim() !== cpass.value.trim()){
     toast.hidden = false;
    toast.innerHTML = "Passwords do not match ❌";
      toast.classList.add("show"); 
      isValid = false;  
        setTimeout(() => {
    toast.classList.remove("show");
}, 3000);
        pass.style.border = "2px solid red";
        cpass.style.border = "2px solid red";
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
    // toast.innerHTML = "Account Created Successfully ✅";
    // toast.classList.add("show");
    // setTimeout(() => {
    //     toast.classList.remove("show");
    // }, 3000);
    window.location.href = "./login.html";

    signupForms.reset();
}else {
     toast.hidden = false;
        toast.innerHTML = "Please fill all fields ❌";
        toast.classList.add("show");
      setTimeout(() => {
    toast.classList.remove("show");
}, 3000);
    
}
});
}
// signup passward 
const togglePass = document.getElementById("togglePassword");
if(togglePass) {
togglePass.addEventListener("click", function(){

    if(pass.type === "password"){
        pass.type = "text";
        togglePass.classList.remove("ri-eye-line");
        togglePass.classList.add("ri-eye-off-line");
    }else{
        pass.type = "password";
        togglePass.classList.remove("ri-eye-off-line");
        togglePass.classList.add("ri-eye-line");
    }

});
}
//signup Confirm passward
const toggleCPass = document.getElementById("toggleCPassword");
if(toggleCPass) {
toggleCPass.addEventListener("click", function(){

    if(cpass.type === "password"){
        cpass.type = "text";
        toggleCPass.classList.remove("ri-eye-line");
        toggleCPass.classList.add("ri-eye-off-line");
    }else{
        cpass.type = "password";
        toggleCPass.classList.remove("ri-eye-off-line");
        toggleCPass.classList.add("ri-eye-line");
    }

});
}


// login form

let Lemail = document.getElementById("Lemail");
let Lpass = document.getElementById("Lpass");
const loginForm = document.querySelector(".form");
if(loginForm) {
loginForm.addEventListener("submit", function(e){

    e.preventDefault();


 if(Lemail.value.trim() === "" || Lpass.value.trim() === ""){
    if(Lemail.value.trim() === ""){
        Lemail.style.border = "2px solid red";
    }
    if(Lpass.value.trim() === ""){
        Lpass.style.border = "2px solid red";
    }
     toast.hidden = false;
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
         localStorage.setItem("isLoggedIn", "true");
        window.location.href = "./dashboard.html";
    }
    else{
        toast.hidden = false;
        toast.innerHTML = "Invalid email or password ❌";
      toast.classList.add("show");  
        setTimeout(() => {
    toast.classList.remove("show");
}
, 3000);
     Lemail.style.border = "2px solid red";
     Lpass.style.border = "2px solid red";
    
    }

});
}
//show password login form
let toggleLPass = document.getElementById("toggleLPassword");
if(toggleLPass) {
toggleLPass.addEventListener("click", function(){
if(Lpass.type === "password"){
    Lpass.type = "text";
    toggleLPass.classList.remove("ri-eye-line");
    toggleLPass.classList.add("ri-eye-off-line");
}else{
    Lpass.type = "password";
    toggleLPass.classList.remove("ri-eye-off-line");
    toggleLPass.classList.add("ri-eye-line");
}
});
}

// nav search and profile show
const SearchProfile = document.getElementById("search-profile");
const navSearch = document.getElementById("search-container");
const navprofile = document.getElementById("nav-Profile");
const currentPage = window.location.pathname.split("/").pop();

const  joinUs = document.getElementById("join-us-btn");

const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log("isLoggedIn:", isLoggedIn);

if (SearchProfile && joinUs) {

    if (isLoggedIn === "true") {

       if (SearchProfile ) {
        if(currentPage === "sevices.html"){
        SearchProfile.classList.add("show-search-profile");
        }else{
        SearchProfile.classList.add("show-search-profile");
         navSearch.style.display = "none";
        }
    }
    

    } else {

         if (joinUs) {
        joinUs.classList.add("join-us-show");
    }
    }

}

// dashborad user name
let userName = document.querySelectorAll(".userName");
let dashboardUser = document.getElementById("tittle-dash");
// if(dashboardUser) {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if(storedUser && storedUser.name){
//         dashboardUser.innerHTML = "Welcome, " + storedUser.name;
//     }
// }

if(userName) {
const storedUser = JSON.parse(localStorage.getItem("user"));
const isLoggedIn = localStorage.getItem("isLoggedIn");
if(isLoggedIn === "true") {
if(storedUser && storedUser.name){
    userName.forEach(function(nameElement) {
        nameElement.textContent = storedUser.name;
    });
}else{
    userName.forEach(function(nameElement) {
        nameElement.textContent = "No User Logged In";
    });
}
    // userName.textContent = storedUser.name;
}
}


//home change with dashboard
const navHomeLinks = document.getElementById("navHome");
const navlogo = document.getElementById("logo");

if (navHomeLinks) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        navHomeLinks.textContent = "Dashboard";
        navHomeLinks.href = "./dashboard.html";
        // navlogo.href = "./dashboard.html";
        // navHomeLinks.classList.add("active");
    } else {
        navHomeLinks.textContent = "Home";
        navHomeLinks.href = "./index.html";
        // navlogo.href = "./index.html";
    }
}

// function setActiveLink() {
//     const currentPage = window.location.pathname.split("/").pop();

//     document.querySelectorAll(".nav-list li a").forEach((link) => {

//         let linkPage = link.getAttribute("href");
//         linkPage = linkPage.replace("./", "");

//         if (linkPage === currentPage) {
//             link.classList.add("active");
//         } else {
//             link.classList.remove("active");
//         }
//     });
// }

const navAboutLinks = document.getElementById("navAbout");

if (navAboutLinks) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        navAboutLinks.classList.add("show-about");
    } else {
        navAboutLinks.classList.add("hide-about");
    }
}


    // profile button
let profile = document.getElementById("profile");
let logoutbtn = document.getElementById("logoutBtn");

if(profile && logoutbtn){

    profile.addEventListener("click", function(){
        logoutbtn.classList.toggle("show-profile");
        
    });

    logoutbtn.addEventListener("click", function(){
         localStorage.removeItem("isLoggedIn");
         window.location.href = "./index.html";
    
    });

}






// search button

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {

    const runSearch = function () {

        const searchText = searchInput.value.trim().toLowerCase();

        if (searchText === "") {
            toast.hidden = false;
            toast.innerHTML = "Please enter a search term ❌";
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
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
card.style.display = "block";
                // card.style.border = "3px solid orange";

                if (!firstMatch) {
                    firstMatch = card;
                }

                found = true;
            } else {
                 card.style.display = "none";
                 document.getElementById("services-h2").style.display = "none";
                 document.querySelectorAll(".services-p").forEach(function(cards) {
                    cards.style.display = "none";
                 });
                // card.style.border = "";

            }

        });

        if (firstMatch) {

            firstMatch.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

        if (!found) {
            toast.hidden = false;
            toast.innerHTML = "No matching services found ❌";
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        
            
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

    
    const services = [
    "Web Development",
    "Mobile App Development",
    "Custom Software Development",
    "UI/UX Design",
    "E-Commerce Solutions",
    "Frontend Development",
    "Backend Development",
    "API Integration",
    "Database Management",
    "Website Maintenance",
    "Digital Consulting",
    "Cloud Hosting Solutions"
];
// const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    suggestions.innerHTML = "";

    if (value === "") return;

    const filtered = services.filter(function(service) {
        return service.toLowerCase().includes(value);
    });

    filtered.forEach(function(service) {

        const item = document.createElement("div");

        item.textContent = service;

        item.addEventListener("click", function () {
            searchInput.value = service;
            suggestions.innerHTML = "";
             runSearch();
        });

        suggestions.appendChild(item);

    });

});

}

// active link highlight
    //  const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-list li a").forEach((link) => {

        let linkPage = link.getAttribute("href");

        linkPage = linkPage.replace("./", "");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
        // console.log("Active link:", linkPage);
        console.log(currentPage);
    });
};
init();


// typing effect
const typingElement = document.querySelector("#typing");
if (typingElement) {
    let typed = new Typed("#typing" ,{
        strings :["Web Design","Frontend Dev","Ui/Ux" , "React Apps", "your Career"],
        typeSpeed : 100,
        backSpeed : 50,
        loop:true
    })


};

    // conting 
    const studcounter = document.getElementById("studentCount");
    if(studcounter) {

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
    }
// competion rate
const completionCounter = document.getElementById("completionRate");
if(completionCounter) {
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
}

// intership duration
const internshipCounter = document.getElementById("internshipDuration");
if(internshipCounter) {
let internshipCount = 0;
const internshipTarget = 12;
const internshipInterval = setInterval(() => {
    internshipCount += 1;
    internshipCounter.textContent = internshipCount;
    if (internshipCount >= internshipTarget) {
        internshipCounter.textContent = internshipTarget;
        clearInterval(internshipInterval);
    }
}, 200);
}


