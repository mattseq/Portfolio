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

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Project filtering functionality
  function filterProjects(category, buttonElement) {
    console.log('Filtering projects by:', category); // Debug log
    const projects = document.querySelectorAll('.project-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    console.log('Found projects:', projects.length); // Debug log
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
    
    // Filter projects
    projects.forEach(project => {
      const projectCategory = project.dataset.category;
      console.log('Project category:', projectCategory); // Debug log
      
      if (category === 'all' || projectCategory === category) {
        project.style.display = 'block';
        project.style.animation = 'fadeInUp 0.6s ease-out';
      } else {
        project.style.display = 'none';
      }
    });
  }

  // Add filter button event listeners
  const filterBtns = document.querySelectorAll('.filter-btn');
  console.log('Found filter buttons:', filterBtns.length); // Debug log
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      console.log('Filter button clicked:', this.dataset.filter); // Debug log
      filterProjects(this.dataset.filter, this);
    });
  });
});
