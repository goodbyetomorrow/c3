document.addEventListener('DOMContentLoaded', function () {
  const columnA = document.querySelector('.column-a');
  const sections = document.querySelectorAll('.section');
  const columnB = document.getElementById('columnB');
  const sectionContainer = document.querySelector('.section-container');

  function updateColumnA(scrollTop) {
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        const hiddenForAContent = section.querySelector('.hiddenForA');
        if (hiddenForAContent) {
          columnA.innerHTML = hiddenForAContent.innerHTML;
          columnA.style.backgroundColor = section.style.backgroundColor;
          return;
        } else {
          columnA.textContent = `Section ${i + 1}`;
          columnA.style.backgroundColor = section.style.backgroundColor;
          return;
        }
      }
    }
  }

  function handleScroll() {
    const scrollTop = columnB.scrollTop + 180; // Adjust this value if needed
    updateColumnA(scrollTop);

    const lastSection = sections[sections.length - 1];
    const lastSectionTop = lastSection.offsetTop;
    const lastSectionHeight = lastSection.offsetHeight;

    if (columnB.scrollTop >= lastSectionTop + lastSectionHeight - columnB.clientHeight) {
      sectionContainer.appendChild(sections[0].cloneNode(true));
      sections[0].remove();
    }
  }

  window.onload = function () {
    columnA.innerHTML = sections[0].querySelector('.hiddenForA').innerHTML;
    columnA.style.backgroundColor = sections[0].style.backgroundColor;
  };

  columnB.addEventListener('scroll', handleScroll);
});


document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navContent = document.querySelector('.nav-content');

    navToggle.addEventListener('click', function () {
        navContent.classList.toggle('show');

        // Toggle between open and close images
        const menuToggleImg = navToggle.querySelector('img');
        if (navContent.classList.contains('show')) {
            menuToggleImg.src = "https://cdn.shopify.com/s/files/1/0968/1020/files/Xx.gif"; // Use the correct variable name here
        } else {
            menuToggleImg.src = "https://www.congruentspace.com/cdn/shop/files/cong122_65x@2x.gif?v=1628383810"; // Use the correct variable name here
        }
    });
});

