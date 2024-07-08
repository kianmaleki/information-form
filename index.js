function toggleGatewayOptions(type) {
  const directOptions = document.getElementById("direct_gateway_options");
  const intermediaryOptions = document.getElementById(
    "intermediary_gateway_options"
  );
  const directFields = [
    "direct_gateway_name",
    "direct_gateway_username",
    "direct_gateway_password",
  ];
  const intermediaryField = "intermediary_gateway_name";

  if (type === "direct") {
    directOptions.style.display = "block";
    intermediaryOptions.style.display = "none";
    setRequiredFields(directFields, true);
    setRequiredFields([intermediaryField], false);
  } else if (type === "intermediary") {
    directOptions.style.display = "none";
    intermediaryOptions.style.display = "block";
    setRequiredFields(directFields, false);
    setRequiredFields([intermediaryField], true);
  }
}

function setRequiredFields(fields, isRequired) {
  fields.forEach((field) => {
    document.getElementById(field).required = isRequired;
  });
}

document.querySelectorAll("input[type='file']").forEach((input) => {
  input.addEventListener("change", function () {
    const fileName = this.files[0]
      ? this.files[0].name
      : "فایلی انتخاب نشده است";
    const siblingElement = this.nextElementSibling;
    if (siblingElement) {
      siblingElement.textContent = fileName;
      siblingElement.style.border = "";
    }
  });
});

function validateSection(section) {
  const currentFieldset = document.getElementById(`section${section}`);
  const requiredInputs = currentFieldset.querySelectorAll(
    "input[required], textarea[required], select[required]"
  );
  let isValid = true;

  requiredInputs.forEach((input) => {
    if (input.type === "file") {
      if (!input.files[0]) {
        isValid = false;
        input.nextElementSibling.style.border = "1px solid red";
      } else {
        input.nextElementSibling.style.border = "";
      }
    } else if (input.value.trim() === "") {
      isValid = false;
      input.style.border = "1px solid red";
    } else {
      input.style.border = "";
    }
  });

  return isValid;
}

function nextSection(currentSection) {
  if (validateSection(currentSection)) {
    const nextSection = currentSection + 1;
    const currentFieldset = document.getElementById(`section${currentSection}`);
    const nextFieldset = document.getElementById(`section${nextSection}`);
    if (nextFieldset) {
      currentFieldset.classList.add("hidden");
      nextFieldset.classList.remove("hidden");
    }
  } else {
    alert("لطفاً همه فیلدهای اجباری را پر کنید.");
  }
}

function prevSection(currentSection) {
  document.getElementById(`section${currentSection}`).classList.add("hidden");
  document
    .getElementById(`section${currentSection - 1}`)
    .classList.remove("hidden");
}

function toggleVisibility(id, btn) {
  const element = document.getElementById(id);
  const button = document.getElementById(btn);

  if (button.value === "ندارم") {
    element.style.display = "none";
    button.value = "دارم";
  } else {
    element.style.display = "block";
    button.value = "ندارم";
  }
}

document
  .getElementById("project-form")
  .addEventListener("submit", function (event) {
    if (!validateSection(2)) {
      event.preventDefault();
      alert("لطفاً همه فیلدهای اجباری را پر کنید.");
    }
  });
