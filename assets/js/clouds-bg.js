document.addEventListener('DOMContentLoaded', function() {
  VANTA.CLOUDS({
    el: "#clouds-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0xaacbee, // 浅蓝色天空
    cloudColor: 0xffffff, // 白色云层
    cloudShadowColor: 0x99b8d6, // 云影颜色
    sunColor: 0xffc851, // 阳光颜色
    sunGlareColor: 0xffe082, // 阳光眩光颜色
    sunlightColor: 0xffebc8, // 阳光照射颜色
    speed: 1.0, // 云层移动速度
    scale: 1.0 // 云层大小比例
  });
});
