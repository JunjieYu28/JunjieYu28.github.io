document.addEventListener('DOMContentLoaded', function() {
  VANTA.CLOUDS({
    el: "#clouds-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0x4b0082, // 靛蓝色带紫色感觉
    cloudColor: 0xffffff, // 白色云层
    cloudShadowColor: 0x8b0000, // 深红色云影，模拟渐变
    sunColor: 0xff4500, // 橙红色阳光
    sunGlareColor: 0xff69b4, // 粉红色眩光，添加紫色调
    sunlightColor: 0xffa07a, // 浅橙色阳光照射
    speed: 0.8, // 较慢速度，营造大气感
    scale: 1.2 // 稍大云层，覆盖大面积
  });

  VANTA.BIRDS({
    el: "#birds-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    backgroundColor: 0x0, // 透明背景
    backgroundAlpha: 0, // 完全透明背景
    quantity: 2.0, // 较少鸟群，偶尔飞过
    birdSize: 1.5, // 稍大鸟大小
    wingSpan: 30.00,
    speedLimit: 5.00,
    separation: 50.00,
    alignment: 30.00,
    cohesion: 20.00,
    color1: 0x808080, // 灰色鸟，融入背景
    color2: 0x4b0082 // 紫色鸟，匹配氛围
  });
});
