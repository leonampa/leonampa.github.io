// Shared behaviour for every page: calendar-link rendering,
// image lightbox, and copy-link buttons.
(function () {
  "use strict";

  // ---- Render department calendar links from calendars.js ----
  // Any element with [data-cal-list] gets filled in from window.CALENDARS,
  // so every guide page stays in sync with that one file.
  document.querySelectorAll("[data-cal-list]").forEach(function (list) {
    var calendars = window.CALENDARS || [];
    calendars.forEach(function (cal) {
      var url = "https://calendar.google.com/calendar/u/0?cid=" + cal.cid;
      var row = document.createElement("div");
      row.className = "cal-row";
      row.innerHTML =
        '<a class="cal-name" href="' + url + '" target="_blank" rel="noopener">' +
        cal.name +
        '</a><button type="button" class="copy-btn" data-copy="' + url + '">Αντιγραφή</button>';
      list.appendChild(row);
    });
  });

  // ---- Lightbox ----
  var dialog = document.getElementById("lightbox");
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.id = "lightbox";
    dialog.innerHTML =
      '<button type="button" class="lb-close" aria-label="Κλείσιμο">✕</button><img alt="">';
    document.body.appendChild(dialog);
  }
  var lbImg = dialog.querySelector("img");
  var lbClose = dialog.querySelector(".lb-close");

  document.querySelectorAll("figure.shot img").forEach(function (img) {
    img.addEventListener("click", function () {
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || "";
      dialog.showModal();
    });
  });

  lbClose.addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });

  // ---- Copy calendar link ----
  document.querySelectorAll("button.copy-btn").forEach(function (btn) {
    var original = btn.textContent;
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy") || "";
      var done = function () {
        btn.textContent = "Αντιγράφηκε";
        btn.classList.add("copied");
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {
          fallbackCopy(text);
          done();
        });
      } else {
        fallbackCopy(text);
        done();
      }
    });
  });

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch (e) {
      /* ignore */
    }
    document.body.removeChild(ta);
  }
})();
