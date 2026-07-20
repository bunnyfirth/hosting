function openStock() {

    const modal = document.getElementById("stockModal");

    if(modal) {

        modal.style.display = "flex";

    }

}



function closeStock() {

    const modal = document.getElementById("stockModal");

    if(modal) {

        modal.style.display = "none";

    }

}





function toggleMenu() {

    const nav = document.querySelector("nav");

    if(nav) {

        nav.classList.toggle("open");

    }

}







function toggleFAQ(button) {

    const item = button.parentElement;

    item.classList.toggle("active");

}







window.onclick = function(event) {

    const modal = document.getElementById("stockModal");

    if(event.target === modal) {

        modal.style.display = "none";

    }

}







// Smooth scrolling for internal links

document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function(e) {


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});







// Animated counters

function animateCounters() {


    const counters =
    document.querySelectorAll(".stat h2");


    counters.forEach(counter => {


        const text = counter.innerText;


        const number =
        parseInt(text.replace(/\D/g,""));


        if(!number) return;


        let current = 0;


        const increment =
        Math.ceil(number / 80);


        const timer = setInterval(()=>{


            current += increment;


            if(current >= number) {

                current = number;

                clearInterval(timer);

            }


            counter.innerText =
            current +
            text.replace(/[0-9]/g,"");


        },20);



    });


}







// Start counters when visible

let counterStarted = false;


window.addEventListener("scroll",()=>{


    const stats =
    document.querySelector(".stats");


    if(!stats) return;


    const position =
    stats.getBoundingClientRect().top;


    if(position < window.innerHeight - 100 &&
       !counterStarted) {


        animateCounters();

        counterStarted=true;


    }


});







// Close mobile menu after clicking link

document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",()=>{


        const nav =
        document.querySelector("nav");


        if(nav) {

            nav.classList.remove("open");

        }


    });


});







// Future custom server calculator support

function calculatePrice() {


    let price = 2.99;


    const ram =
    document.getElementById("ram");


    const storage =
    document.getElementById("storage");


    const cpu =
    document.getElementById("cpu");



    if(ram) {


        price +=
        Number(ram.value);


    }


    if(storage) {


        price +=
        Number(storage.value);


    }


    if(cpu) {


        price +=
        Number(cpu.value);


    }



    const output =
    document.getElementById("price");


    if(output) {


        output.innerHTML =
        "$" + price.toFixed(2) + "/mo";


    }


}