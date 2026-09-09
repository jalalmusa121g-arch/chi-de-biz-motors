/* =====================================================
   CHI-DE-BIZ MOTORS
   MAIN WEBSITE JAVASCRIPT
===================================================== */


/* =========================
   WEBSITE ELEMENTS
========================= */

const carsGrid = document.getElementById("carsGrid");
const partsGrid = document.getElementById("partsGrid");

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalSmallTitle = document.getElementById("modalSmallTitle");
const modalDescription = document.getElementById("modalDescription");
const enquiryButton = document.getElementById("enquiryButton");
const closeModal = document.getElementById("closeModal");


/* =========================
   WHATSAPP NUMBER
========================= */

const whatsappNumber = "2348168514356";


/* =========================
   CREATE 23 CARS
========================= */

for (let i = 1; i <= 23; i++) {

    const card = document.createElement("div");

    card.className = "car-card";

    card.innerHTML = `
        <img
            class="car-image"
            src="images/car${i}.jpg"
            alt="Car ${i}"
            loading="lazy"
        >

        <div class="car-info">

            <div class="car-number">
                CAR ${i}
            </div>

            <h3>
                Automobile ${i}
            </h3>

            <div class="card-buttons">

                <button
                    class="view-button"
                    onclick="openCar(${i})"
                >
                    VIEW CAR
                </button>

                ${
                    i <= 8
                    ? `
                    <button
                        class="part-button"
                        onclick="openPart(${i})"
                    >
                        CAR PART
                    </button>
                    `
                    : ""
                }

            </div>

        </div>
    `;

    carsGrid.appendChild(card);
}


/* =========================
   CREATE 8 CAR PARTS
========================= */

for (let i = 1; i <= 8; i++) {

    const part = document.createElement("div");

    part.className = "part-card";

    part.innerHTML = `

        <img
            src="images/part${i}.jpg"
            alt="Car Part ${i}"
            loading="lazy"
        >

        <div class="part-info">

            <p>
                CAR PART ${i}
            </p>

            <h3>
                Part ${i}
            </h3>

        </div>

    `;

    partsGrid.appendChild(part);
}


/* =========================
   OPEN CAR
========================= */

function openCar(number) {

    modalImage.src = `images/car${number}.jpg`;

    modalImage.alt = `Car ${number}`;

    modalSmallTitle.textContent =
        `AUTOMOBILE ${number}`;

    modalTitle.textContent =
        `Car ${number}`;

    modalDescription.textContent =
        `I am interested in Car ${number}. Please provide more information about availability, pricing and purchasing details.`;

    enquiryButton.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hello CHI-DE-BIZ MOTORS, I am interested in Car ${number}. Please give me more information about availability, pricing and purchasing details.`
        )}`;

    enquiryButton.textContent =
        "MAKE ENQUIRY ABOUT THIS CAR";

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================
   OPEN CAR PART
========================= */

function openPart(number) {

    modalImage.src = `images/part${number}.jpg`;

    modalImage.alt = `Car Part ${number}`;

    modalSmallTitle.textContent =
        `CAR PART ${number}`;

    modalTitle.textContent =
        `Part ${number}`;

    modalDescription.textContent =
        `I am interested in Car Part ${number}. Please provide information about availability, pricing and compatibility.`;

    enquiryButton.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hello CHI-DE-BIZ MOTORS, I am interested in Car Part ${number}. Please give me more information about availability, pricing and compatibility.`
        )}`;

    enquiryButton.textContent =
        "MAKE ENQUIRY ABOUT THIS PART";

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE MODAL
========================= */

function closeTheModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


/* =========================
   CLOSE BUTTON
========================= */

closeModal.addEventListener(
    "click",
    closeTheModal
);


/* =========================
   CLICK OUTSIDE MODAL
========================= */

modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {
            closeTheModal();
        }

    }
);


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeTheModal();
        }

    }
);


/* =========================
   IMAGE ERROR HANDLING
========================= */

document.addEventListener(
    "error",
    function(event) {

        if (event.target.tagName === "IMG") {

            event.target.style.background = "#ddd";

            event.target.alt = "Image unavailable";

        }

    },
    true
);