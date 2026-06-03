const path = "M 180 10 L 210 8 L 245 18 L 270 14 L 295 28 L 318 22 L 335 40 L 345 62 L 338 85 L 355 100 L 360 122 L 350 140 L 360 158 L 355 178 L 340 192 L 345 215 L 330 235 L 318 255 L 310 278 L 295 295 L 278 310 L 265 332 L 248 348 L 230 362 L 215 378 L 200 390 L 188 378 L 172 365 L 155 348 L 138 330 L 120 312 L 105 295 L 88 278 L 75 258 L 62 238 L 55 215 L 48 192 L 40 170 L 35 148 L 42 128 L 38 108 L 50 88 L 62 72 L 78 58 L 95 48 L 115 38 L 138 24 L 158 14 Z";

const coords = path.match(/\d+ \d+/g).map(s => {
  const [x, y] = s.split(' ').map(Number);
  return {x, y};
});

// A simple smoothing function (Catmull-Rom or similar)
function bezierCommand(point, i, a) {
  const line = (pointA, pointB) => {
    const lengthX = pointB.x - pointA.x;
    const lengthY = pointB.y - pointA.y;
    return {
      length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
      angle: Math.atan2(lengthY, lengthX)
    }
  }

  const controlPoint = (current, previous, next, reverse) => {
    const p = previous || current;
    const n = next || current;
    const smoothing = 0.2;
    const o = line(p, n);
    const angle = o.angle + (reverse ? Math.PI : 0);
    const length = o.length * smoothing;
    return {
      x: current.x + Math.cos(angle) * length,
      y: current.y + Math.sin(angle) * length
    };
  }

  const cps = controlPoint(a[i - 1], a[i - 2], point);
  const cpe = controlPoint(point, a[i - 1], a[i + 1], true);
  return `C ${cps.x.toFixed(2)},${cps.y.toFixed(2)} ${cpe.x.toFixed(2)},${cpe.y.toFixed(2)} ${point.x},${point.y}`;
}

const svgPath = coords.reduce((acc, point, i, a) => i === 0
  ? `M ${point.x},${point.y}`
  : `${acc} ${bezierCommand(point, i, a)}`
, '') + " Z";

console.log(svgPath);
