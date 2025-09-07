// Officer modal popup logic
const officerData = {
  president: {
    img: '_faculty-profile-placeholder.jpg',
    title: 'President',
    name: 'Sallie Ann Schmidt',
    desc: 'Leads the chapter, organizes initiatives, and represents SPS USM in professional settings.'
  },
  vp: {
    img: '_faculty-profile-placeholder.jpg',
    title: 'Vice President',
    name: 'Nishant Chaudhari',
    desc: 'Supports the president and coordinates internal chapter activities and student involvement.'
  },
  treasurer: {
    img: '_faculty-profile-placeholder.jpg',
    title: 'Treasurer',
    name: 'Eva Chalona',
    desc: 'Manages finances, budgets, and funding opportunities for SPS events and programs.'
  },
  secretary: {
    img: '_faculty-profile-placeholder.jpg',
    title: 'Secretary',
    name: 'Maragaret Brune',
    desc: 'Keeps records, organizes communications, and ensures smooth meeting operations.'
  },
  social: {
    img: '_faculty-profile-placeholder.jpg',
    title: 'Social Media Manager',
    name: 'Kastuv Gaire',
    desc: 'Handles social media platforms, creates engaging posts, and manages outreach.'
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // ...existing code...

  // Officer modal logic
  const officerCards = document.querySelectorAll('.officer-card');
  const modal = document.getElementById('officer-modal');
  const closeModal = document.getElementById('close-officer-modal');
  const modalImg = document.getElementById('modal-officer-img');
  const modalTitle = document.getElementById('modal-officer-title');
  const modalName = document.getElementById('modal-officer-name');
  const modalDesc = document.getElementById('modal-officer-desc');

  officerCards.forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-officer');
      const data = officerData[key];
      if (data) {
        modalImg.src = data.img;
        modalTitle.textContent = data.title;
        modalName.textContent = data.name;
        modalDesc.textContent = data.desc;
        modal.classList.remove('hidden');
      }
    });
  });
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }
  // Close modal on background click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
});


var advisorSwiper = new Swiper(".advisorSwiper", {
  effect: "slide",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 250, // fast and responsive
  allowTouchMove: true,
});


fetch('content/about.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('about-text').textContent = data;
  });
