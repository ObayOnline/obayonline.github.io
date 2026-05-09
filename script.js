function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}

function calcCylinder() {
    const r = parseFloat(document.getElementById('cylRadius').value);
    const h = parseFloat(document.getElementById('cylHeight').value);
    const res = document.getElementById('cylResult');
    if (r > 0 && h > 0) {
        const vol = Math.PI * r * r * h;
        res.innerHTML = `الحجم = ${vol.toFixed(2)} سم³`;
        res.style.display = 'block';
    } else {
        res.innerHTML = 'أدخل قيم صحيحة أكبر من صفر';
        res.style.display = 'block';
    }
}

function calcCircle() {
    const r = parseFloat(document.getElementById('circleRadius').value);
    const res = document.getElementById('circleResult');
    if (r > 0) {
        const area = Math.PI * r * r;
        res.innerHTML = `المساحة = ${area.toFixed(2)} سم²`;
        res.style.display = 'block';
    } else {
        res.innerHTML = 'أدخل نصف قطر صحيح';
        res.style.display = 'block';
    }
}

function solveQuadratic() {
    const a = parseFloat(document.getElementById('coefA').value);
    const b = parseFloat(document.getElementById('coefB').value);
    const c = parseFloat(document.getElementById('coefC').value);
    const res = document.getElementById('quadResult');
    if (a === 0) {
        res.innerHTML = 'المعامل أ لا يمكن أن يساوي صفر';
        res.style.display = 'block';
        return;
    }
    const d = b * b - 4 * a * c;
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        res.innerHTML = `جذران حقيقيان: س₁ = ${x1.toFixed(2)} ، س₂ = ${x2.toFixed(2)}`;
    } else if (d === 0) {
        const x = -b / (2 * a);
        res.innerHTML = `جذر واحد مكرر: س = ${x.toFixed(2)}`;
    } else {
        res.innerHTML = 'لا توجد جذور حقيقية';
    }
    res.style.display = 'block';
}

function submitForm(e) {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً');
}

window.onload = function() {
    let userName = localStorage.getItem('userName');
    if (!userName) {
        userName = prompt('مرحباً بك! اكتب اسمك:');
        if (userName) localStorage.setItem('userName', userName);
    }
    if (userName) {
        const welcomeEl = document.getElementById('welcomeText');
        if (welcomeEl) welcomeEl.innerHTML = `أهلاً ${userName}، <span>نصنع قادة المستقبل</span> اليوم`;
    }
};
