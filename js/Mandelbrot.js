var globals = {};

function generateMandelbrot(reMin, reMax, imMin, imMax) {
    console.log("generating mandelbrot set");
    var canvasWidth = globals.canvas.width;
    var canvasHeight = globals.canvas.height;
    var ctx = globals.canvas.ctx;

    var scaleX = (reMax - reMin) / canvasWidth;
    var scaleY = (imMin - imMax) / canvasHeight;

    for (var x = 0; x < canvasWidth; x++) {

        var cRe = (x * scaleX) + reMin;

        for (y = 0; y < canvasHeight; y++) {

            var cIm = (y * scaleY) + imMax;

            var zRe = 0;
            var zIm = 0;

            var inSet = true;
            for (var iter = 1; iter <= globals.maxIters; iter++) {

                var zReSquared = zRe * zRe;
                var zImSquared = zIm * zIm;

                zIm = (2 * zRe * zIm) + cIm;
                zRe = zReSquared - zImSquared + cRe;

                if (zReSquared + zImSquared > 4){
                    inSet = false;
                    break;
                }
            }

            if (inSet){
                //console.log("painting to x: " + x + ", y: " + y)
                ctx.fillRect(x, y, 1, 1);
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

    globals.maxIters = 300;
    globals.reMax = 1.1;
    globals.reMin = -2.5;
    globals.imMax = 1.2;
    globals.imMin = -1.2;

    //initCoordinateSystem();
    generateMandelbrot(globals.reMin, globals.reMax, 
                       globals.imMin, globals.imMax);
}

window.onload = initialize;