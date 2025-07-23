document.addEventListener('DOMContentLoaded', function() {
  VANTA.CLOUDS({
    el: "#clouds-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0xd7bfff,  // 更浅的淡紫色天空
    cloudColor: 0xe6d9ff,  // 浅紫色云层
    cloudShadowColor: 0xb3a3cc,  // 浅紫阴影
    sunColor: 0xffd700,  // 金黄色太阳
    sunGlareColor: 0xffd700,  // 更亮的金黄色光晕，增强明显度
    sunlightColor: 0xfff5ee,  // 浅阳光色
    speed: 1.00
  });

  VANTA.BIRDS({
    el: "#birds-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x0,  // 透明背景
    backgroundAlpha: 0.0,
    color1: 0x808080,  // 灰色鸟
    color2: 0xa9a9a9,  // 浅灰鸟
    colorMode: "variance",
    quantity: 3.00,  // 少量鸟
    birdSize: 1.00,
    wingSpan: 30.00,
    speedLimit: 5.00,
    separation: 20.00,
    alignment: 20.00,
    cohesion: 20.00
  });
  
  VANTA.HALO({
    el: "#halo-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    baseColor: 0xd7bfff,  // 浅紫基色
    backgroundColor: 0x0,  // 透明背景
    amplitudeFactor: 1.00,
    xOffset: 0.00,
    yOffset: 0.00,
    size: 1.00
  });
});
