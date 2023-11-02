gsap.to('h1', {
    x: 100, 
    scrollTrigger: {
      trigger: 'h1',
      start: 'bottom top',
      end: 'center center',
      scrub: true
    }
  });

  gsap.to('h1', {
    x: 200, 
    scrollTrigger: {
      trigger: 'h1',
      start: 'center center',
      end: 'bottom top',
      scrub: true
    }
  });
