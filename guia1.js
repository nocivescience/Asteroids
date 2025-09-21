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
