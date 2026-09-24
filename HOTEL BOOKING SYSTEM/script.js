let selectedPrice = 0;

function openBooking(hotel, price) {

    document.getElementById("hotelName").value = hotel;

    selectedPrice = price;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


function searchHotels() {

    let location = document.getElementById("location").value;

    if (location === "") {
        alert("Please enter a location.");
        return;
    }

    alert(
        "Searching hotels in " +
        location +
        "..."
    );

    document.getElementById("hotels").scrollIntoView({
        behavior: "smooth"
    });
}


function confirmBooking(event) {

    event.preventDefault();

    let hotel =
        document.getElementById("hotelName").value;

    let name =
        document.getElementById("guestName").value;

    let email =
        document.getElementById("email").value;

    let checkin =
        document.getElementById("bookingCheckin").value;

    let checkout =
        document.getElementById("bookingCheckout").value;

    let guests =
        document.getElementById("bookingGuests").value;

    if (hotel === "") {

        alert("Please select a hotel first.");

        return;
    }

    let confirmation =
        document.getElementById("confirmation");

    confirmation.style.display = "block";

    confirmation.innerHTML =

        "<strong>Booking Confirmed!</strong><br><br>" +

        "Guest: " + name + "<br>" +

        "Email: " + email + "<br>" +

        "Hotel: " + hotel + "<br>" +

        "Check-in: " + checkin + "<br>" +

        "Check-out: " + checkout + "<br>" +

        "Guests: " + guests + "<br><br>" +

        "Your hotel booking request has been submitted.";

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}