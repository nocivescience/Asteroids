class Ship{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 60;
        this.color = 'white';
        this.speed = 5;
        this.angle = 0; // ángulo en radianes
    }
    draw() {
        ctx.save(); // guardar contexto
        ctx.translate(this.x, this.y); // mover origen al centro de la nave
        ctx.rotate(this.angle); // rotar según ángulo
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, 0); // dibujar con origen en (0,0)
        ctx.lineTo(-this.width/2, this.height);
        ctx.lineTo(this.width/2, this.height);
        ctx.closePath();
        ctx.fill();
        ctx.restore(); // restaurar contexto
    }
}



<script>
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

class Ship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 60;
        this.color = 'white';
        this.speed = 3;   // velocidad de avance
        this.angle = 0;
        this.angleSpeed = 4;
        this.rotateLeftButton = false;
        this.rotateRightButton = false;
        this.forwardButton = false; // tecla "w"
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, -this.height / 2);
        ctx.lineTo(this.width / 2, this.height / 2);
        ctx.lineTo(-this.width / 2, this.height / 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    rotateLeft() {
        this.angle -= this.angleSpeed;
    }

    rotateRight() {
        this.angle += this.angleSpeed;
    }

    moveForward() {
        // Convertir ángulo a radianes
        const rad = this.angle * Math.PI / 180;
        this.x += Math.sin(rad) * this.speed; // desplazamiento lateral
        this.y -= Math.cos(rad) * this.speed; // desplazamiento hacia arriba
    }
}

const ship = new Ship(canvas.width / 2, canvas.height / 2);

// Detectar teclas
document.addEventListener('keydown', (event) => {
    if (event.key === 'a') ship.rotateLeftButton = true;
    if (event.key === 'd') ship.rotateRightButton = true;
    if (event.key === 'w') ship.forwardButton = true;
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'a') ship.rotateLeftButton = false;
    if (event.key === 'd') ship.rotateRightButton = false;
    if (event.key === 'w') ship.forwardButton = false;
});

// Bucle de animación
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (ship.rotateLeftButton) ship.rotateLeft();
    if (ship.rotateRightButton) ship.rotateRight();
    if (ship.forwardButton) ship.moveForward();

    ship.draw();
    requestAnimationFrame(update);
}

update();
</script>
