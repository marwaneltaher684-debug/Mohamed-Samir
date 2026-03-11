// قائمة الهامبرغر (للجوال)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// نموذج الاتصال: رسالة تأكيد (محاكاة)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // منع إعادة تحميل الصفحة
  alert('شكراً لتواصلك! سأرد عليك في أقرب وقت.');
  this.reset(); // إعادة تعيين الحقول
});

// تأثير ظهور العناصر عند التمرير (اختياري)
window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.service-card, .testimonial-card, .about, .hero');
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;
    
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}
// يمكن إضافة كلاس active في CSS لإظهار تأثير fade-in إذا أردت (هذا مجرد مثال)
