/**
 * Toggle Sidebar Menu
 */
(function () {
  const menuBodyWrap = document.querySelector(".menuBodyWrap");
  const smtNavResBtn = document.querySelector(".smtSidebarResNavBtn");
  const smtNavBtn = document.querySelector(".smtSidebarNavBtn");
  const smtMainContainer = document.querySelector("#smtDashMainContainer");

  if (smtNavBtn && smtMainContainer) {
    smtNavBtn.addEventListener("click", () => {
      smtMainContainer.classList.toggle("sidebarOpen");
    });
  }

  if (smtNavResBtn && smtMainContainer) {
    smtNavResBtn.addEventListener("click", () => {
      smtMainContainer.classList.toggle("sidebarOpen");
    });
  }

  if (menuBodyWrap && smtMainContainer) {
    menuBodyWrap.addEventListener("click", () => {
      smtMainContainer.classList.toggle("sidebarOpen");
    });
  }
      
})();

/**
 * Sidebar Dropdown Menu
 */
(function () {
  var headers = document.querySelectorAll(".smtDropdown .smtDropdownItem");

  for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", openCurrAccordion);
  }

  function openAccordion(e) {
    var parent = this.parentElement;
    var article = this.nextElementSibling;

    if (!parent.classList.contains("open")) {
      parent.classList.add("open");
      article.style.maxHeight = article.scrollHeight + "px";
    } else {
      parent.classList.remove("open");
      article.style.maxHeight = "0px";
    }
  }

  function openCurrAccordion(e) {
    for (var i = 0; i < headers.length; i++) {
      var parent = headers[i].parentElement;
      var article = headers[i].nextElementSibling;

      if (this === headers[i] && !parent.classList.contains("open")) {
        parent.classList.add("open");
        article.style.maxHeight = article.scrollHeight + "px";
      } else {
        parent.classList.remove("open");
        article.style.maxHeight = "0px";
      }
    }
  }
})();



