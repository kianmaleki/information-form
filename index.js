function toggleGatewayOptions(type) {
  var directOptions = document.getElementById("direct_gateway_options");
  var intermediaryOptions = document.getElementById(
    "intermediary_gateway_options"
  );

  if (type === "direct") {
    directOptions.style.display = "block";
    intermediaryOptions.style.display = "none";
    document.getElementById("intermediary_gateway_name").required = false;
    document.getElementById("direct_gateway_name").required = true;
    document.getElementById("direct_gateway_username").required = true;
    document.getElementById("direct_gateway_password").required = true;
  } else if (type === "intermediary") {
    directOptions.style.display = "none";
    intermediaryOptions.style.display = "block";
    document.getElementById("direct_gateway_name").required = false;
    document.getElementById("direct_gateway_username").required = false;
    document.getElementById("direct_gateway_password").required = false;
    document.getElementById("intermediary_gateway_name").required = true;
  }
}

// Initialize Persian date picker
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
