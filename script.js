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


function showLowMassStar() {
  document.getElementById("low-mass-star").style.display = "block";
  document.getElementById("high-mass-star").style.display = "none";
  document.getElementById("low-mass-star").scrollIntoView({ behavior: 'smooth' });
}

function showHighMassStar() {
  document.getElementById("low-mass-star").style.display = "none";
  document.getElementById("high-mass-star").style.display = "block";
  document.getElementById("high-mass-star").scrollIntoView({ behavior: 'smooth' });
}

function goToButtons() {
    document.getElementById("low-mass-star").style.display = "none";
    document.getElementById("high-mass-star").style.display = "none";
    document.getElementById("buttons").scrollIntoView({ behavior: 'smooth' });
}