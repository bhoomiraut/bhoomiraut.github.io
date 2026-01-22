// Hamburger Menu CSS Template
/* =====================
   HAMBURGER MENU
====================== */

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
  z-index: 101;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.hamburger span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text);
  margin: 2px 0;
  transition: all 0.3s ease;
  border-radius: 1px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--bg);
  z-index: 100;
  padding-top: 80px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-nav.active {
  opacity: 1;
  visibility: visible;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.mobile-nav-list .nav-link {
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
  min-width: 200px;
  text-align: center;
}

.mobile-nav-list .nav-link:hover,
.mobile-nav-list .nav-link.active {
  background: var(--accent);
  color: white;
}

// Mobile Responsive CSS Updates
/* Extra Small Devices (phones, 320px to 480px) */
@media (max-width: 480px) {
  header {
    flex-direction: row;
    gap: 12px;
    padding: 8px 16px;
    justify-content: space-between;
  }

  nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-nav {
    display: block;
  }
}

/* Small Devices (large phones, 481px to 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  header {
    flex-direction: row;
    gap: 16px;
    padding: 12px 24px;
    justify-content: space-between;
  }

  nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-nav {
    display: block;
  }
}

// JavaScript Functions
function toggleMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobileNav');
  
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (mobileNav.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobileNav');
  
  hamburger.classList.remove('active');
  mobileNav.classList.remove('active');
  document.body.style.overflow = '';
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobileNav');
  
  if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
    closeMobileMenu();
  }
});