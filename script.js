// تعريف قائمة الدورات
const courses = [
    {
        id: 1,
        title: "دورة برمجة الويب",
        description: "تعلم كيفية بناء مواقع ويب احترافية باستخدام HTML وCSS وJavaScript.",
        enrolled: false,
    },
    {
        id: 2,
        title: "دورة تطوير تطبيقات الجوال",
        description: "تطوير تطبيقات الجوال باستخدام React Native.",
        enrolled: false,
    },
    {
        id: 3,
        title: "دورة البيانات الضخمة",
        description: "فهم وتحليل البيانات باستخدام أدوات البيانات الكبيرة.",
        enrolled: false,
    },
    {
        id: 4,
        title: "دورة الذكاء الاصطناعي",
        description: "استكشف مفاهيم الذكاء الاصطناعي وتطبيقاته.",
        enrolled: false,
    }
];

// عرض الدورات على الصفحة
function displayCourses() {
    const coursesSection = document.getElementById('courses');
    coursesSection.innerHTML = ''; // مسح المحتوى الحالي

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';
        courseDiv.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button class="enroll-btn" data-id="${course.id}">${course.enrolled ? 'مُسجل' : 'سجل الآن'}</button>
        `;
        coursesSection.appendChild(courseDiv);
    });

    addEnrollButtonListeners();
}

// إضافة مستمعي الأحداث لأزرار التسجيل
function addEnrollButtonListeners() {
    const enrollButtons = document.querySelectorAll('.enroll-btn');

    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseId = button.getAttribute('data-id');
            enrollInCourse(courseId);
        });
    });
}

// تسجيل في الدورة
function enrollInCourse(courseId) {
    const course = courses.find(course => course.id == courseId);
    if (!course.enrolled) {
        course.enrolled = true;
        alert(`تم التسجيل في الدورة: ${course.title}`);
    } else {
        alert(`أنت بالفعل مسجل في الدورة: ${course.title}`);
    }
    displayCourses(); // تحديث عرض الدورات
}

// معالجة نموذج الاتصال
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`اسم: ${name}`);
    console.log(`البريد الإلكتروني: ${email}`);
    console.log(`رسالة: ${message}`);
    alert('تم إرسال رسالتك بنجاح!');

    // إعادة تعيين النموذج
    contactForm.reset();
});

// عرض الدورات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayCourses();
});

// بعض التحسينات الجمالية
function initAnimations() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.classList.add('animate');
    });

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionPosition < windowHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    });
}

// استدعاء التحسينات عند تحميل الصفحة
initAnimations();

// تحسينات إضافية
function highlightNavLink() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// استدعاء التحسينات عند تحميل الصفحة
highlightNavLink();

// إضافة تحسينات لقائمة الدورات
function filterCourses(query) {
    const filteredCourses = courses.filter(course => course.title.includes(query) || course.description.includes(query));
    displayFilteredCourses(filteredCourses);
}

function displayFilteredCourses(filteredCourses) {
    const coursesSection = document.getElementById('courses');
    coursesSection.innerHTML = '';

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';
        courseDiv.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button class="enroll-btn" data-id="${course.id}">${course.enrolled ? 'مُسجل' : 'سجل الآن'}</button>
        `;
        coursesSection.appendChild(courseDiv);
    });

    addEnrollButtonListeners();
}

// إضافة مربع بحث
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'ابحث عن دورة...';
searchInput.addEventListener('input', (event) => {
    filterCourses(event.target.value);
});
document.getElementById('courses').prepend(searchInput);
