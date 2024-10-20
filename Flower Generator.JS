function generateFlower() {
const flower = document.getElementById('flower');
flower.innerHTML = '';
const petalCount = parseInt(document.getElementById('petalCount').value) || 6;
const petalColor = document.getElementById('petalColor').value;
for (let i = 0; i < petalCount; i++) {
const petal = document.createElement('div');
petal.className = 'petal';
petal.style.backgroundColor = petalColor;
petal.style.transform = `rotate(${(360 / petalCount) * i}deg)`;
flower.appendChild(petal);
}
const center = document.createElement('div');
center.className = 'center';
flower.appendChild(center);
}
window.onload = generateFlower;
