document.addEventListener('DOMContentLoaded', function() {
  // Atualiza o ano no footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Adiciona animação aos cards de ingredientes e estudantes
  const cards = document.querySelectorAll('.ingredient-card, .student-card');
  
  function pulseAnimation() {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('pulse');
        setTimeout(() => {
          card.classList.remove('pulse');
        }, 1000);
      }, index * 300);
    });
  }
  
  // Inicia a animação inicial
  setTimeout(pulseAnimation, 1500);
  
  // Adiciona a classe para a animação CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .pulse {
      animation: pulse 1s ease;
    }
    
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }
    
    .floating {
      animation: float 5s ease-in-out infinite;
    }
    
    @keyframes wiggle {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }
    
    .wiggle {
      animation: wiggle 6s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
  
  // Adicionar animações de flutuação aos elementos
  const bubbles = document.querySelectorAll('.ingredient-bubble, .student-avatar');
  bubbles.forEach(bubble => {
    bubble.classList.add('floating');
  });
  
  // Adicionar animação de balanço ao título
  document.querySelector('h1').classList.add('wiggle');
  
  // Adicionar animação ao logo da escola
  const schoolLogo = document.querySelector('.school-logo');
  if (schoolLogo) {
    schoolLogo.classList.add('floating');
  }
  
  // Create a custom video thumbnail
  const videoElement = document.getElementById('volcano-video');
  if (videoElement) {
    // Add video control enhancements
    videoElement.addEventListener('play', function() {
      document.querySelector('.video-container').classList.add('playing');
    });
    
    videoElement.addEventListener('pause', function() {
      document.querySelector('.video-container').classList.remove('playing');
    });
  }
  
  // Add hover effect to student cards
  const studentCards = document.querySelectorAll('.student-card');
  studentCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const avatar = this.querySelector('.student-avatar');
      avatar.classList.remove('floating');
      avatar.classList.add('pulse');
    });
    
    card.addEventListener('mouseleave', function() {
      const avatar = this.querySelector('.student-avatar');
      avatar.classList.remove('pulse');
      avatar.classList.add('floating');
    });
  });
});