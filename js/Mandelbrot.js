var globals = {};

function generateMandelbrot() {
    console.log("generating mandelbrot set");
    var ctx = globals.canvas.ctx;

    for (var real = -globals.cps; real <= globals.cps; real += globals.delta) {
        for (var im = -globals.cps; im <= globals.cps; im += globals.delta) {
            var z = new Complex(0, 0);
            var c = new Complex(real, im);
            var inSet = true;

            for (var iter = 1; iter <= globals.maxIters; iter++) {
                z = c.add(z.square());

                if (z.modulus() > globals.escapeVal){
                    inSet = false;
                    break;
                }
            }

            if (inSet){
                ctx.fillRect(real, im, globals.delta, globals.delta);
            }
        }
    }
}

function initCoordinateSystem() {
    console.log("initializing coordinate system");
    var ctx = globals.canvas.ctx;

    ctx.translate(globals.canvas.width / 2, globals.canvas.height / 2);
    ctx.scale(1 / globals.delta, -1 / globals.delta);
}

function initialize() {
    console.log("initializing");
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

window.onload = initialize;