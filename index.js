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

function nextSection(currentSection) {
  // Find all required input fields in the current section
  const currentFieldset = document.getElementById(`section${currentSection}`);
  const requiredInputs = currentFieldset.querySelectorAll(
    "input[required], textarea[required], select[required]"
  );

  // Check if all required fields are filled
  let isValid = true;
  requiredInputs.forEach((input) => {
    if (input.value.trim() === "") {
      isValid = false;
      // Optionally, you can add visual indication for the user that this field is required
      input.style.border = "1px solid red";
    } else {
      // Reset the border in case it was previously marked as required
      input.style.border = "";
    }
  });

  // If all required fields are filled, proceed to the next section
  if (isValid) {
    const nextSection = currentSection + 1;
    const nextFieldset = document.getElementById(`section${nextSection}`);
    if (nextFieldset) {
      currentFieldset.classList.add("hidden");
      nextFieldset.classList.remove("hidden");
    }
  } else {
    // Optionally, you can inform the user to fill out all required fields
    alert("لطفاً همه فیلدهای اجباری را پر کنید.");
  }
}
