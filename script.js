document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
  
    counters.forEach(counter => {
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 60; // Adjust to control speed
  
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 20); // Adjust to control refresh rate
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    });
  });
  