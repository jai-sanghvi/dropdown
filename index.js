createHiddenClass();

const dropdownContainers = document.querySelectorAll(".dd-container");

for (let container of dropdownContainers) {
  const dropdownToggle = container.querySelector(".dd-toggle");
  const dropdownContent = container.querySelector(".dd-content");

  dropdownContent.classList.add("dd-hidden");

  const mode = dropdownToggle.classList.contains("dd-click")
    ? "click"
    : "mouseover";

  const clickListener = (e) => {
    if (e.target !== dropdownToggle && !dropdownContent.contains(e.target)) {
      toggleDropdown(dropdownContent);
      document.removeEventListener("click", clickListener);
    }
  };

  dropdownToggle.addEventListener(mode, () => {
    if (mode === "click") {
      if (dropdownContent.classList.contains("dd-hidden")) {
        toggleDropdown(dropdownContent);
        document.addEventListener("click", clickListener);
      } else {
        toggleDropdown(dropdownContent);
        document.removeEventListener("click", clickListener);
      }
    } else {
      showDropdown(dropdownContent);
      container.addEventListener("mouseleave", () =>
        hideDropdown(dropdownContent),
      );
    }
  });
}

function createHiddenClass() {
  const styleSheet = document.createElement("style");
  document.head.appendChild(styleSheet);
  styleSheet.sheet.insertRule(".dd-hidden {display:none;}", 0);
}

function hideDropdown(dropdownContent) {
  dropdownContent.classList.add("dd-hidden");
}

function showDropdown(dropdownContent) {
  dropdownContent.classList.remove("dd-hidden");
}

function toggleDropdown(dropdownContent) {
  dropdownContent.classList.toggle("dd-hidden");
}
