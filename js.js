const navIcon = document.querySelector('.menu-icon'); // أيقونة فتح القائمة
const closeIcon = document.querySelector('.sidebar nav i'); // أيقونة إغلاق القائمة داخلها
const sidebar = document.querySelector('.sidebar');

// فتح وإغلاق القائمة عند النقر على أيقونة الفتح
navIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // منع إغلاق القائمة فورًا عند النقر على الأيقونة
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
});

// إغلاق القائمة عند النقر على أيقونة الإغلاق داخلها
closeIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // منع انتشار الحدث لتفادي التداخل مع كود إغلاق القائمة
    sidebar.style.left = '-250px';
});

// إغلاق القائمة عند النقر في أي مكان خارجها
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !navIcon.contains(event.target)) {
        sidebar.style.left = '-250px';
    }
});
document.addEventListener('click', function (e) {
    if (!e.target.closest('.sidebar') && !e.target.closest('.menu-icon')) {
        document.querySelector('.sidebar').classList.remove('active');
    }
});

document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
});
