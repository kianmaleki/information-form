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

  function setRequiredFields(fields, isRequired) {
    fields.forEach((field) => {
      document.getElementById(field).required = isRequired;
    });
  }

  if (type === "direct") {
    directOptions.style.display = "flex";
    intermediaryOptions.style.display = "none";
    setRequiredFields(directFields, true);
    setRequiredFields([intermediaryField], false);
  } else if (type === "intermediary") {
    directOptions.style.display = "none";
    intermediaryOptions.style.display = "flex";
    setRequiredFields(directFields, false);
    setRequiredFields([intermediaryField], true);
  } else {
    setRequiredFields(directFields, false);
    setRequiredFields([intermediaryField], false);
  }
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
  const fields = element.querySelectorAll("input, select, textarea");

  if (button.value === "ندارم") {
    element.style.display = "none";
    button.value = "دارم";
    fields.forEach((field) => {
      field.removeAttribute("required");
    });
  } else {
    element.style.display = "flex";
    button.value = "ندارم";
    fields.forEach((field) => {
      field.setAttribute("required", "required");
    });
  }
}

function toggleProjectTypeOptions() {
  const projectType = document.getElementById("project_type").value;
  const codingOptions = document.getElementById("coding_options");
  const wordpressOptions = document.getElementById("wordpress_options");

  codingOptions.classList.toggle("hidden", projectType !== "coding");
  wordpressOptions.classList.toggle("hidden", projectType !== "wordpress");

  const codingLanguage = document.getElementById("coding_language");
  const wordpressTheme = document.getElementById("wordpress_theme");

  if (projectType === "coding") {
    codingLanguage.setAttribute("required", "required");
    wordpressTheme.removeAttribute("required");
  } else if (projectType === "wordpress") {
    wordpressTheme.setAttribute("required", "required");
    codingLanguage.removeAttribute("required");
  }
}

let allPrice = 0;

function addPrice(price, id, cat_id) {
  const checkBox = document.getElementById(id);
  const checkBoxCat = document.getElementById(cat_id);
  if (checkBox.checked) {
    allPrice += price;
    checkBox.value = "true";
    checkBoxCat.style.border = "2px solid #3AB9C0";
  } else {
    allPrice -= price;
    checkBox.value = "false";
    checkBoxCat.style.border = "1px solid #3AB9C0";
  }

  allPrice = Math.round(allPrice);
  document.getElementById("price").innerHTML = ` ${allPrice} `;
}

function dropdown(id, btn) {
  const element = document.getElementById(id);
  const button = document.getElementById(btn);

  if (button.value === "false") {
    element.classList.remove("hide");
    element.classList.add("show");
    button.value = "true";
  } else {
    element.classList.remove("show");
    element.classList.add("hide");
    button.value = "false";
  }
}
