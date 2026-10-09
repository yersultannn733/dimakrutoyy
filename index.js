
const loginScreen =
  document.getElementById("loginScreen");

const app =
  document.getElementById("app");

const loginForm =
  document.getElementById("loginForm");


loginForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const login =
    document.getElementById("login").value.trim();

  const password =
    document.getElementById("password").value.trim();


  if (
    login === "staff" &&
    password === "1234"
  ) {

    loginScreen.style.display = "none";

    app.style.display = "block";

    localStorage.setItem(
      "restoLoggedIn",
      "true"
    );

  } else {

    alert(
      "Неверный логин или пароль."
    );

  }

});



if (
  localStorage.getItem(
    "restoLoggedIn"
  ) === "true"
) {

  loginScreen.style.display = "none";

  app.style.display = "block";

}



document
  .getElementById("logout")
  .addEventListener("click", function() {

    localStorage.removeItem(
      "restoLoggedIn"
    );

    app.style.display = "none";

    loginScreen.style.display = "flex";

  });




const navButtons =
  document.querySelectorAll(
    ".nav button"
  );

const pages =
  document.querySelectorAll(
    ".page"
  );


navButtons.forEach(function(button) {

  button.addEventListener(
    "click",
    function() {

      openPage(
        this.dataset.page
      );

      document
        .getElementById("sidebar")
        .classList.remove("open");

    }
  );

});


function openPage(pageName) {

  pages.forEach(function(page) {

    page.classList.remove(
      "active"
    );

  });


  navButtons.forEach(function(button) {

    button.classList.remove(
      "active"
    );

  });


  const page =
    document.getElementById(
      pageName
    );


  if (page) {

    page.classList.add(
      "active"
    );

  }


  const activeButton =
    document.querySelector(
      `.nav button[data-page="${pageName}"]`
    );


  if (activeButton) {

    activeButton.classList.add(
      "active"
    );

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



document
  .querySelectorAll(
    "[data-open-page]"
  )
  .forEach(function(button) {

    button.addEventListener(
      "click",
      function() {

        openPage(
          this.dataset.openPage
        );

      }
    );

  });



document
  .getElementById("mobileMenu")
  .addEventListener(
    "click",
    function() {

      document
        .getElementById("sidebar")
        .classList.toggle("open");

    }
  );



const currentDate =
  document.getElementById(
    "currentDate"
  );

const today =
  new Date();


currentDate.textContent =
  today.toLocaleDateString(
    "ru-RU",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );



document
  .querySelectorAll(
    ".task input"
  )
  .forEach(function(input) {

    input.addEventListener(
      "change",
      function() {

        const task =
          this.closest(".task");

        task.classList.toggle(
          "completed",
          this.checked
        );

      }
    );

  });




document
  .getElementById("sendRequest")
  .addEventListener(
    "click",
    function() {

      const type =
        document.getElementById(
          "requestType"
        ).value;

      const text =
        document.getElementById(
          "requestText"
        ).value.trim();


      if (!text) {

        alert(
          "Введите комментарий к заявке."
        );

        return;

      }


      alert(
        "Заявка отправлена!\n\n" +
        "Тип: " +
        type
      );


      document.getElementById(
        "requestText"
      ).value = "";

    }
  );



document
  .getElementById(
    "notificationBtn"
  )
  .addEventListener(
    "click",
    function() {

      alert(
        "🔔 Новое уведомление!\n\n" +
        "Сегодня ваша смена начинается в 18:00."
      );

    }
  );



document
  .getElementById(
    "scheduleRequest"
  )
  .addEventListener(
    "click",
    function() {

      openPage("requests");

    }
  );
