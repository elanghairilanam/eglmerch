
      const category = document.querySelector('.category');
      const categoryLinks = document.querySelectorAll('.category a')
      const container = document.querySelector('.container');

      const sections = document.querySelectorAll("section")
      const sectionWidth = sections[0].offsetWidth;

      function goToSection(id) {
        const target = document.getElementById(id);

        target.scrollIntoView({
            behavior: "smooth"
        });
      }

      container.addEventListener('scroll', ()=>{

         const index = Math.round(container.scrollLeft / sectionWidth);
         const activeLink = categoryLinks[index];

         const rect = activeLink.getBoundingClientRect();
         const parentRect = category.getBoundingClientRect();

         const left = rect.left - parentRect.left;
         const width = rect.width;

         category.style.setProperty("--afterWidth", `${width}px`);
         category.style.setProperty("--afterLeft", `${left}px`);
      })