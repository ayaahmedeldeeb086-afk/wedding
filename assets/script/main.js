window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  let logo = document.getElementById("logo");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");

    // غير اللوجو للدارك
    logo.src = "assets/img/wedding (1).png";

  } else {
    navbar.classList.remove("scrolled");

    // رجّع اللوجو لايت
    logo.src = "assets/img/wedding-light-1.png";
  }
});
let section = document.getElementById("counter-section");
let counters = document.querySelectorAll(".goal");
let started = false; // علشان يبدأ مرة واحدة بس

// إنشاء الـ Intersection Observer
let observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !started) {
    counters.forEach(counter => startCount(counter));
    started = true; // نشغل مرة واحدة فقط
  }
});

// مراقبة ظهور القسم
observer.observe(section);

// دالة العد
function startCount(el) {
  let goal = parseInt(el.dataset.goal); // تحويل النص لرقم
  let count = 0;
  let increment = goal / 100; // 100 خطوة
  let interval = setInterval(() => {
    count += increment;
    if (count >= goal) {
      el.textContent = goal; // التأكد من الوصول للهدف
      clearInterval(interval);
    } else {
      el.textContent = Math.floor(count);
    }
  }, 30); // كل 20ms
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}