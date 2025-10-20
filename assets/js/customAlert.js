export class CustomAlert {
  static show(message, type = 'info', duration = 4000) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) {
      existingAlert.remove();
    }

    // Create alert container
    const alertContainer = document.createElement('div');
    alertContainer.className = `custom-alert custom-alert-${type}`;
    
    // Create alert content
    alertContainer.innerHTML = `
      <div class="alert-content">
        <span class="alert-icon">${this.getIcon(type)}</span>
        <span class="alert-message">${message}</span>
        <button class="alert-close">&times;</button>
      </div>
      <div class="alert-progress">
        <div class="alert-progress-bar"></div>
      </div>
    `;

    // Add to body
    document.body.appendChild(alertContainer);

    // Get progress bar
    const progressBar = alertContainer.querySelector('.alert-progress-bar');
    
    // Animate progress bar
    setTimeout(() => {
      progressBar.style.width = '0%';
    }, 100);

    // Auto remove
    const timeoutId = setTimeout(() => {
      this.remove(alertContainer);
    }, duration);

    // Close button functionality
    const closeBtn = alertContainer.querySelector('.alert-close');
    closeBtn.addEventListener('click', () => {
      clearTimeout(timeoutId);
      this.remove(alertContainer);
    });

    // Show alert with animation
    setTimeout(() => {
      alertContainer.classList.add('show');
    }, 100);
  }

  static getIcon(type) {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    return icons[type] || icons.info;
  }

  static remove(alertElement) {
    alertElement.classList.add('hide');
    setTimeout(() => {
      if (alertElement.parentNode) {
        alertElement.parentNode.removeChild(alertElement);
      }
    }, 300);
  }

  static success(message, duration) {
    this.show(message, 'success', duration);
  }

  static error(message, duration) {
    this.show(message, 'error', duration);
  }

  static warning(message, duration) {
    this.show(message, 'warning', duration);
  }

  static info(message, duration) {
    this.show(message, 'info', duration);
  }
}
