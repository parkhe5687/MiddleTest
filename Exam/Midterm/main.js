var canvas = document.getElementById("middetest");
var ctx = canvas.getContext("2d");

var centerX = canvas.width / 2; 
    var centerY = canvas.height / 2;
    
function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    var rot = (Math.PI / 2) * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y)
      rot += step
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.fillStyle = '#FFD700';
    ctx.fill();
  }

    

  // 별 그리기
  drawStar(ctx, 25, 25, 5, 20, 10);

  ctx.fillStyle = 'red';
        ctx.beginPath();

        for (let i = 0; i <= 360; i++) {
            const x = 15 * Math.sin(i * Math.PI / 18);
            const y = 15 * Math.cos(i * Math.PI / 18) - Math.pow(Math.abs(x), 2) / 15;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.closePath();
        ctx.fill();
