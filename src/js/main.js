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
})()
