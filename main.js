const fileInput = document.getElementById('fileInput');
    const frameWidthInput = document.getElementById('frameWidth');
    const modeSelect = document.getElementById('modeSelect');
    const effectSelect = document.getElementById('effectSelect');
    const delayInput = document.getElementById('delayInput');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const canvas = document.getElementById('previewCanvas');
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    let img = new Image();
    let totalFrames = 0;
    let currentFrame = 0;
    let timerId = null;
    let forward = true;

    fileInput.addEventListener('change', e => {
      const f = e.target.files[0];
      if (!f) return;
      const url = URL.createObjectURL(f);
      img = new Image();
      img.onload = () => setupFrames();
      img.src = url;
    });
    frameWidthInput.addEventListener('change',setupFrames);
    function setupFrames() {
      const fw = parseInt(frameWidthInput.value, 10);console.log(fw);
      totalFrames = Math.floor(img.width / fw);
      currentFrame = 0;

      // Ajustar canvas para altura 120 y ancho proporcional al frame
      const aspect = fw / img.height;console.log(aspect);
      canvas.width = Math.round(canvas.height * aspect);

      drawFrame(currentFrame);
    }

    function drawFrame(index) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const fw = parseInt(frameWidthInput.value, 10);
      const sx = index * fw;
      ctx.save();

      // aplicar efecto visual
      applyEffect(effectSelect.value);

      ctx.drawImage(img, sx, 0, fw, img.height, 0, 0, canvas.width, canvas.height);
      ctx.restore();
      ctx.imageSmoothingEnabled = false;
    }

    function applyEffect(effect) {
      switch (effect) {
        case "7":
          ctx.filter = "invert(1)";
          break;
        case "1":
          ctx.globalAlpha = 0.5;
          break;
        case "3":
          ctx.filter = "brightness(2)";
          break;
        case "2":
          ctx.setTransform(1, 0, 0.1, 1, Math.random() * 5, 0);
          break;
        case "4":
          ctx.translate(Math.sin(Date.now()/100) * 5, 0);
          break;
        case "5":
          ctx.scale(1.2, 1.2);
          ctx.translate(-10, -10);
          break;
        case "6":
          ctx.translate(canvas.width/2, canvas.height/2);
          ctx.rotate(Math.sin(Date.now()/200));
          ctx.translate(-canvas.width/2, -canvas.height/2);
          break;
        case "8":
          if (Math.random() > 0.5) ctx.globalAlpha = 0;
          break;
        case "9":
          ctx.translate(Math.random()*6-3, Math.random()*6-3);
          break;
        case "10":
          let y = Math.abs(Math.sin(Date.now()/200))*10;
          ctx.translate(0, -y);
          break;
        default:
          ctx.filter = "none";
          ctx.globalAlpha = 1;
          ctx.setTransform(1,0,0,1,0,0);
      }
    }

    function advanceFrame() {
      const mode = modeSelect.value;

      if (mode === "0") {
        currentFrame = (currentFrame + 1) % totalFrames;
      } else if (mode === "2") {
        if (currentFrame < totalFrames - 1) currentFrame++;
      } else if (mode === "3") {
        if (currentFrame < totalFrames - 1) currentFrame++;
      } else if (mode === "4") {
        currentFrame = (currentFrame - 1 + totalFrames) % totalFrames;
      } else if (mode === "1") {
        if (forward) {
          currentFrame++;
          if (currentFrame >= totalFrames - 1) forward = false;
        } else {
          currentFrame--;
          if (currentFrame <= 0) forward = true;
        }
      }

      drawFrame(currentFrame);
    }

    function startAnimation() {
        console.log('frames: '+totalFrames);
        stopAnimation();
        const delay = parseInt(delayInput.value, 10) || 100;
        timerId = setInterval(advanceFrame, delay);
    }

    function stopAnimation() {
        if (timerId) clearInterval(timerId);
        timerId = null;
    }

    playBtn.addEventListener('click', startAnimation);
    pauseBtn.addEventListener('click', stopAnimation);