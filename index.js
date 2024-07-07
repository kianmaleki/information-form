document.addEventListener("DOMContentLoaded", function () {
  // Initialize Persian date picker
  $("#company_verification_date").persianDatepicker({
    altField: "#company_verification_date",
    altFormat: "YYYY/MM/DD",
    observer: true,
    format: "YYYY/MM/DD",
    initialValue: true,
    timePicker: {
      enabled: false,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("input[type='file']").forEach((input) => {
    input.addEventListener("change", function () {
      var fileName = this.files[0] ? this.files[0].name : "";
      var siblingElement = this.nextElementSibling;
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

var hiden = true;

function visable(id, btn) {
  if (document.getElementById(btn).value == "ندارم") {
    hiden = true;
  } else {
    hiden = false;
  }
  if (hiden == true) {
    document.getElementById(id).style.display = "none";
    document.getElementById(btn).value = "دارم";
    hiden = !hiden;
  } else {
    document.getElementById(id).style.display = "block";
    document.getElementById(btn).value = "ندارم";
    hiden = !hiden;
  }
}
