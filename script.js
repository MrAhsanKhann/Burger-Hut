
// Smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function (e) { 
        e.preventDefault(); 
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        }); 
    }); 
});

window.addEventListener('scroll', function() { 
    const navbar = document.querySelector('.navbar'); 
    if (window.scrollY > 50) { 
        navbar.style.backgroundColor = "#333"; 
    }   else { 
        navbar.style.backgroundColor = "transparent";  
    } 
});

window.addEventListener('load', function() { 
    const hero = document.querySelector('.dark-hero'); 
    hero.style.opacity = 1; 
    hero.style.transition = 'opacity 1s ease'; 
});

const galleryImages = document.querySelectorAll('.gallery-images img'); 
galleryImages.forEach(image => { image.addEventListener('mouseover', () => { 
    image.style.transform = "scale(1.05)"; }); 
    image.addEventListener('mouseout', () => { 
        image.style.transform = "scale(1)"; 
    }); 
});

document.querySelector('.contact-form').addEventListener('submit', function(e) { 
    const name = document.querySelector('input[name="name"]').value; 
    const email = document.querySelector('input[name="email"]').value; 
    if (!name || !email) { e.preventDefault(); 
        alert('Please fill in all fields.'); 
    } 
});


document.getElementById("openPopup").onclick = function() { 
    document.getElementById("popup").style.display = "flex"; 
}

document.getElementById("closePopup").onclick = function() { 
    document.getElementById("popup").style.display = "none"; 
}

window.onclick = function(event) { 
    if (event.target === document.getElementById("popup")) { 
        document.getElementById("popup").style.display = "none"; 
    } 
}
function showPaymentMethods() {
    document.getElementById('payment-methods').style.display = 'block';
}

document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', () => {
      alert('More details about the menu item coming soon!');
    });
  });