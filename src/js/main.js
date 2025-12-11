/**
 * CHORUS SYMPHONIA - Main JavaScript
 * Mobile Navigation & Interactive Elements
 */

;(() => {
  // Mobile Navigation Toggle
  const menuBtn = document.getElementById("menuBtn")
  const closeNav = document.getElementById("closeNav")
  const mobileNav = document.getElementById("mobileNav")
  let overlay = null

  // Create overlay
  function createOverlay() {
    overlay = document.createElement("div")
    overlay.className = "overlay"
    document.body.appendChild(overlay)

    overlay.addEventListener("click", closeMobileNav)
  }

  // Open mobile navigation
  function openMobileNav() {
    if (!overlay) createOverlay()

    mobileNav.classList.add("is-open")
    overlay.classList.add("is-visible")
    document.body.style.overflow = "hidden"
  }

  // Close mobile navigation
  function closeMobileNav() {
    mobileNav.classList.remove("is-open")
    if (overlay) {
      overlay.classList.remove("is-visible")
    }
    document.body.style.overflow = ""
  }

  // Event Listeners
  if (menuBtn) {
    menuBtn.addEventListener("click", openMobileNav)
  }

  if (closeNav) {
    closeNav.addEventListener("click", closeMobileNav)
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-item__question")

    if (question) {
      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open")

        // Close all other items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("is-open")
          }
        })

        // Toggle current item
        if (isOpen) {
          item.classList.remove("is-open")
        } else {
          item.classList.add("is-open")
        }
      })
    }
  })

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value


      // Show success message (you can enhance this with a modal or notification)
      alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.")

      // Reset form
      contactForm.reset()
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#") {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  // Carousel functionality
  const carousels = document.querySelectorAll('.carousel')
  
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel__track')
    const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))
    const prevBtn = carousel.querySelector('.carousel__btn--prev')
    const nextBtn = carousel.querySelector('.carousel__btn--next')
    const indicators = Array.from(carousel.querySelectorAll('.carousel__indicator'))
    
    if (!track || slides.length === 0) return
    
    let currentIndex = 0
    
    // Move to specific slide
    function goToSlide(index) {
      currentIndex = index
      const offset = -100 * currentIndex
      track.style.transform = `translateX(${offset}%)`
      
      // Update indicators
      indicators.forEach((indicator, i) => {
        if (i === currentIndex) {
          indicator.classList.add('carousel__indicator--active')
        } else {
          indicator.classList.remove('carousel__indicator--active')
        }
      })
    }
    
    // Next slide
    function nextSlide() {
      if (currentIndex < slides.length - 1) {
        goToSlide(currentIndex + 1)
      } else {
        goToSlide(0)
      }
    }
    
    // Previous slide
    function prevSlide() {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1)
      } else {
        goToSlide(slides.length - 1)
      }
    }
    
    // Event listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', prevSlide)
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide)
    }
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        goToSlide(index)
      })
    })
    
    // Auto-play (optional, uncomment to enable)
    // setInterval(nextSlide, 5000)
  })

  // Programme Page - Filter
  const filterBtns = document.querySelectorAll('.filter-btn')
  const concertCards = document.querySelectorAll('.concert-card')
  
  if (filterBtns.length > 0 && concertCards.length > 0) {
    // Filter functionality
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('filter-btn--active'))
        btn.classList.add('filter-btn--active')
        
        // Get filter value
        const filter = btn.getAttribute('data-filter')
        
        // Apply filter
        concertCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = ''
          } else {
            const date = card.getAttribute('data-date')
            const location = card.getAttribute('data-location')
            const genre = card.getAttribute('data-genre')
            
            // Check filter
            if (date === filter || location === filter || genre === filter) {
              card.style.display = ''
            } else {
              card.style.display = 'none'
            }
          }
        })
      })
    })
  }
})()
