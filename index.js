document.addEventListener("DOMContentLoaded", function () {
  // Initialize Persian date picker
  $("#company_verification_date").persianDatepicker({
    altField: "#company_verification_date",
    altFormat: "YYYY/MM/DD",
    observer: true,
    format: "YYYY/MM/DD",
    initialValue: false,
    timePicker: {
      enabled: false,
    },
  });
});

// Ensure DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("input[type='file']").forEach((input) => {
    input.addEventListener("change", function () {
      // Extract the file name
      var fileName = this.files[0] ? this.files[0].name : "";
      // Find the sibling element to update the text
      var siblingElement = this.nextElementSibling; // Adjust based on actual DOM structure

      // Update the text content of the sibling element
      if (siblingElement) {
        siblingElement.textContent = fileName
          ? fileName
          : "فایلی انتخاب نشده است";
      }
    });
  });
});

function nextSection(currentSection) {
  document.getElementById("section" + currentSection).classList.add("hidden");
  document
    .getElementById("section" + (currentSection + 1))
    .classList.remove("hidden");
}

function prevSection(currentSection) {
  document.getElementById("section" + currentSection).classList.add("hidden");
  document
    .getElementById("section" + (currentSection - 1))
    .classList.remove("hidden");
}

function visable(id, btn) {
  if (hiden == true) {
    document.getElementById(id).style.display = "block";
    document.getElementById(btn).value = "ندارم";
    hiden = !hiden;
  } else {
    document.getElementById(id).style.display = "none";
    document.getElementById(btn).value = "دارم";
    hiden = !hiden;
  }
}
