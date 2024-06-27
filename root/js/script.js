document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var particles = [];

    function Particle(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        };

        this.update = function() {
            this.draw();
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.radius -= 0.1;
        };
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(function(particle, index) {
            if (particle.radius > 0) {
                particle.update();
            } else {
                particles.splice(index, 1);
            }
        });

        if (Math.random() > 0.97) {
            var radius = Math.random() * 20 + 10;
            var x = Math.random() * (canvas.width - radius * 2) + radius;
            var y = Math.random() * (canvas.height - radius * 2) + radius;
            var color = `hsl(${Math.random() * 360}, 50%, 50%)`;
            var velocity = {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            };

            particles.push(new Particle(x, y, radius, color, velocity));
        }
    }

    animate();

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
