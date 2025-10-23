// // scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-section .navbar .navbar-items .nav-list .nav-items a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        // Different offsets for navbar and animation
        let navOffset = sec.offsetTop - 100;   // for navbar highlight
        let animOffset = sec.offsetTop - 550;  // for section animation
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Highlight nav link
        if (top >= navOffset && top < navOffset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document
                    .querySelector('.navbar-section .navbar .navbar-items .nav-list .nav-items a[href*=' + id + ']')
                    .classList.add('active');
            });
        }

        // Section scroll animation
        if (top >= animOffset && top < animOffset + height) {
            sec.classList.add('show-animate');
        } 
        // else {
        //     sec.classList.remove('show-animate');
        // }
    });

    // Sticky navbar
    let header = document.querySelector(".navbar-section");
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



// Projects Carousel
const projects = [
    { title: "Logico", image: "./Asset/img/Project-1.jpeg", link: "https://example.com/electro" },
    { title: "Talented Men's Barber Studio", image: "./Asset/img/Project-2.jpeg", link: "https://sheikdawood2003.github.io/talentedmensbarber-studio/" },
    { title: "Logistic", image: "./Asset/img/Project-3.jpeg", link: "https://sheikdawood2003.github.io/logistic/" },
    { title: "Upsoft", image: "./Asset/img/Project-4.jpeg", link: "https://sheikdawood2003.github.io/Upsoft/" },
    { title: "College Website", image: "./Asset/img/Project-5.jpeg", link: "https://sheikdawood2003.github.io/collegesite/" },
    { title: "Bus Booking App", image: "./Asset/img/Project-6.jpeg", link: "https://sheikdawood2003.github.io/Busbookingapp/" }
  ];

  let currentIndex = 0;

  function openProject(index) {
    currentIndex = index;
    document.getElementById("projectModal").classList.add("active");
    updateModal();
  }

  function closeProject() {
    document.getElementById("projectModal").classList.remove("active");
  }

  function updateModal() {
    const project = projects[currentIndex];
    document.getElementById("projectTitle").textContent = project.title;
    document.getElementById("projectImage").src = project.image;
    document.getElementById("projectLink").href = project.link;
  }

  function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateModal();
  }

  function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateModal();
  }