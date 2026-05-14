document.getElementById("loginForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("loginSection")
    .classList.add("hidden");

    document.getElementById("successSection")
    .classList.remove("hidden");
});

function goToDashboard() {
    document.getElementById("successSection")
    .classList.add("hidden");

    document.getElementById("dashboardSection")
    .classList.remove("hidden");
}

function backToLogin() {
    document.getElementById("dashboardSection")
    .classList.add("hidden");

    document.getElementById("loginSection")
    .classList.remove("hidden");
}

function goToCustomerDetails() {
    document.getElementById("dashboardSection")
    .classList.add("hidden");

    document.getElementById("customerDetailsSection")
    .classList.remove("hidden");
}

function goToDashboardFromCustomer() {
    document.getElementById("customerDetailsSection")
    .classList.add("hidden");

    document.getElementById("dashboardSection")
    .classList.remove("hidden");
}

function goToVehicleDetails() {
    document.getElementById("dashboardSection")
    .classList.add("hidden");

    document.getElementById("vehicleDetailsSection")
    .classList.remove("hidden");
}

function goToDashboardFromVehicle() {
    document.getElementById("vehicleDetailsSection")
    .classList.add("hidden");

    document.getElementById("dashboardSection")
    .classList.remove("hidden");
}

function goToServicePreferences() {
    document.getElementById("dashboardSection")
    .classList.add("hidden");

    document.getElementById("servicePreferencesSection")
    .classList.remove("hidden");
}

function goToDashboardFromService() {
    document.getElementById("servicePreferencesSection")
    .classList.add("hidden");

    document.getElementById("dashboardSection")
    .classList.remove("hidden");
}

function goToServiceStatus() {
    document.getElementById("dashboardSection")
    .classList.add("hidden");

    document.getElementById("serviceStatusSection")
    .classList.remove("hidden");
}

function goToDashboardFromStatus() {
    document.getElementById("serviceStatusSection")
    .classList.add("hidden");

    document.getElementById("dashboardSection")
    .classList.remove("hidden");
}

function toggleReschedule() {
    const status =
        document.getElementById("serviceStatus").value;

    const container =
        document.getElementById("rescheduleContainer");

    if(status === "Delayed") {
        container.classList.remove("hidden");
    } else {
        container.classList.add("hidden");
    }
}

function goToPayment() {
    document.getElementById("dashboardSection")
    .classList.add("hidden");

    document.getElementById("paymentSection")
    .classList.remove("hidden");
}

function goToDashboardFromPayment() {
    document.getElementById("paymentSection")
    .classList.add("hidden");

    document.getElementById("dashboardSection")
    .classList.remove("hidden");
}

function calculateTotal() {
    const serviceCharge =
        parseFloat(document.getElementById("serviceCharge").value) || 0;

    const taxes =
        parseFloat(document.getElementById("taxes").value) || 0;

    const discounts =
        parseFloat(document.getElementById("discounts").value) || 0;

    const total =
        serviceCharge + taxes - discounts;

    document.getElementById("totalAmount").value =
        total.toFixed(2);
}

function displayPaymentDetails() {
    const mode =
        document.getElementById("paymentMode").value;

    document.getElementById("cardDetails")
    .classList.add("hidden");

    document.getElementById("upiDetails")
    .classList.add("hidden");

    if(mode === "Card") {
        document.getElementById("cardDetails")
        .classList.remove("hidden");
    }

    if(mode === "UPI") {
        document.getElementById("upiDetails")
        .classList.remove("hidden");
    }
}

function forgotPassword() {
    alert("Password recovery feature coming soon.");
}
