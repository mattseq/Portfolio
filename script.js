particlesJS('particles-js', {
  particles: {
    number: {
      value: 120,
      density: { enable: true, value_area: 800 }
    },
    color: { value: '#ff4040' },   // use your accent red
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: true, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#ff4040',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'none',
      random: false,
      straight: false,
      bounce: false,
      attract: { enable: false }
    }
  }
});
