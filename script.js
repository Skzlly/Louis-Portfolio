
        // Smooth scroll for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });


        // Animate skills bars on scroll
        document.addEventListener('DOMContentLoaded', function () {
            window.addEventListener('scroll', animateSkillsBars);

            function animateSkillsBars() {
                var skillsBars = document.querySelectorAll('.skills-bar-progress');

                skillsBars.forEach(function (bar) {
                    if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
                        bar.classList.add('animated');
                        bar.querySelector('span').style.width = bar.querySelector('span').getAttribute('style');
                    }
                });
            }

            // Check if an element is in the viewport
            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            animateSkillsBars(); // Initial check on page load
        });
   


    
       // script for portfolio
       function openModal(title, description, imageUrl) {
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = description;
        document.getElementById('modal-image').src = imageUrl;
        document.getElementById('myModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('myModal').style.display = 'none';
    }

    window.onclick = function (event) {
        var modal = document.getElementById('myModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    