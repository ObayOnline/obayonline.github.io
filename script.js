function toggleMenu() { 
    document.getElementById('navLinks').classList.toggle('show'); 
}
window.onload = () => {
    const savedName = localStorage.getItem('visitorName');
    const welcomeEl = document.getElementById('welcomeText');
    if(savedName && welcomeEl) {
        welcomeEl.innerHTML = `أهلاً <span>${savedName}</span> في النخبة`;
    } else if (!savedName && welcomeEl) {
        let name = prompt("مرحباً بك! اكتب اسمك:");
        if(name) {
            localStorage.setItem('visitorName', name);
            welcomeEl.innerHTML = `أهلاً <span>${name}</span> في النخبة`;
        }
    }
}
function calcCylinder() {
    const r = parseFloat(document.getElementById('cylRadius').value);
    const h = parseFloat(document.getElementById('cylHeight').value);
    const res = document.getElementById('cylResult');
    if(r > 0 && h > 0) {
        res.textContent = `الحجم = ${(Math.PI * r * r * h).toFixed(2)} سم³`;
        res.style.display = 'block';
    } else { alert('أدخل قيم موجبة'); }
}
function calcCircle() {
    const r = parseFloat(document.getElementById('circleRadius').value);
    const res = document.getElementById('circleResult');
    if(r > 0) {
        res.textContent = `المساحة = ${(Math.PI * r * r).toFixed(2)} سم²`;
        res.style.display = 'block';
    } else { alert('أدخل قيمة موجبة'); }
}
function solveQuadratic() {
    const a = parseFloat(document.getElementById('coefA').value);
    const b = parseFloat(document.getElementById('coefB').value);
    const c = parseFloat(document.getElementById('coefC').value);
    const res = document.getElementById('quadResult');
    if(isNaN(a) || isNaN(b) || isNaN(c)) return alert('املأ كل الحقول');
    const d = b * b - 4 * a * c;
    if(d > 0) {
        const x1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2);
        const x2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2);
        res.textContent = `س₁ = ${x1} ، س₂ = ${x2}`;
    } else if(d === 0) {
        res.textContent = `حل وحيد: س = ${(-b / (2 * a)).toFixed(2)}`;
    } else {
        res.textContent = 'لا يوجد حلول حقيقية';
    }
    res.style.display = 'block';
}
function submitForm(e) {
    e.preventDefault();
    alert('تم استلام رسالتك بنجاح! ✅');
    e.target.reset();
    }
