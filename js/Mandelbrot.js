var globals = {};

function generateMandelbrot() {
    var ctx = globals.canvas.ctx;

    for (var real = -globals.cps; real <= globals.cps; real += globals.delta) {
        for (var im = -globals.cps; im <= globals.cps; im += globals.delta) {
            var z = new Complex(0, 0);
            var c = new Complex(real, im);

            for (var iter = 1; iter <= globals.maxIters; iter++) {
                z = c.add(z.square());

                if (z.modulus() > globals.escapeVal){
                    break;
                }
            }

            ctx.fillRect(real, im, globals.delta, globals.delta);
        }
    }
}

function initCoordinateSystem() {
    var ctx = globals.canvas.ctx;

    ctx.translate(globals.canvas.width / 2, globals.canvas.height / 2);
    ctx.scale(1 / globals.delta, -1 / globals.delta);
}

function initialize() {
    globals.canvas = document.getElementsByTagName('canvas')[0];
    globals.canvas.ctx = globals.canvas.getContext('2d');
    globals.canvas.ctx.fillStyle = "black";
    globals.cps = 2;
    globals.maxIters = 300;
    globals.delta = 0.008;
    globals.escapeVal = 2;

    initCoordinateSystem();
    generateMandelbrot();
}

window.onLoad = initialize;