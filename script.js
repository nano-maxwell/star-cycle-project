document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.container');
    const headings = document.querySelectorAll('.mainheading');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
      });
    }, {
      threshold: 0.3
    });
  
    containers.forEach(container => {
      observer.observe(container);
    });
    headings.forEach(heading => {
        observer.observe(heading);
      });
  });
  