<style>
.auth-card {
  @apply bg-void-800 rounded-xl p-8 w-full max-w-md relative overflow-hidden;
  border: 1px solid theme('colors.void.700');
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  
  &::before {
    content: '';
    @apply absolute inset-0 z-0;
    background: linear-gradient(
      to bottom right,
      transparent 0%,
      theme('colors.void.700') 100%
    );
    opacity: 0.3;
  }
}

.portal-container {
  @apply absolute -top-20 -right-20 w-40 h-40 opacity-70 pointer-events-none;
  z-index: 1;
}

.portal-ring {
  @apply absolute w-full h-full rounded-full border-4 opacity-60 transition-all duration-500;
  border-color: theme('colors.rift.600');
  border-style: dashed;
  
  &.active {
    @apply opacity-100 scale-110;
    box-shadow: 0 0 20px theme('colors.rift.500');
  }
}

.portal-core {
  @apply absolute w-1/2 h-1/2 top-1/4 left-1/4 rounded-full transition-all duration-500;
  background: radial-gradient(
    circle,
    theme('colors.time.500') 0%,
    theme('colors.rift.600') 70%
  );
  opacity: 0.6;
  
  &.active {
    @apply opacity-100 scale-110;
    box-shadow: 0 0 15px theme('colors.rift.500');
  }
}

.auth-title {
  @apply text-3xl font-display text-white text-center mb-8 relative z-10;
  text-shadow: 0 0 10px theme('colors.rift.500');
}

.auth-form {
  @apply space-y-5 relative z-10;
}

.error-alert {
  @apply bg-time-900 bg-opacity-70 border border-time-600 rounded-lg p-4 flex gap-3 items-start mb-4;
  
  .alert-icon {
    @apply w-5 h-5 rounded-full bg-time-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0;
  }
  
  .alert-message {
    @apply text-time-200 text-sm;
  }
}

.form-group {
  @apply relative transition-all duration-300;
  
  &.focused {
    @apply transform scale-[1.02];
    
    .form-label {
      @apply text-rift-400;
    }
    
    .input-wrapper {
      @apply border-rift-500;
      box-shadow: 0 0 0 2px rgba(51, 197, 255, 0.1);
    }
    
    .input-icon {
      @apply text-rift-400;
    }
  }
  
  .form-label {
    @apply block text-sm font-medium text-starlight-300 mb-1.5 transition-colors;
  }
  
  .input-wrapper {
    @apply relative flex items-center bg-void-900 rounded-lg border border-void-600 transition-all duration-300;
  }
  
  .input-icon {
    @apply w-5 h-5 absolute left-3 text-void-400 transition-colors;
  }
  
  .form-input {
    @apply w-full py-3 pl-10 pr-4 bg-transparent text-white focus:outline-none;
    
    &::placeholder {
      @apply text-void-500;
    }
  }
  
  .password-toggle {
    @apply absolute right-3 p-1 text-void-400 hover:text-starlight-300 transition-colors;
    
    .eye-icon {
      @apply w-5 h-5;
    }
  }
}

.form-extras {
  @apply flex items-center justify-between mt-2;
  
  .remember-me {
    @apply flex items-center cursor-pointer;
    
    input {
      @apply absolute opacity-0 h-0 w-0;
    }
    
    .checkmark {
      @apply relative inline-block w-4 h-4 rounded border border-void-600 mr-2 bg-void-900 transition-all duration-200;
      
      &::after {
        content: '';
        @apply absolute hidden w-2 h-2 rounded-sm bg-rift-500;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    
    input:checked ~ .checkmark::after {
      @apply block;
    }
    
    input:checked ~ .checkmark {
      @apply border-rift-600;
      box-shadow: 0 0 0 2px rgba(51, 197, 255, 0.1);
    }
    
    .label-text {
      @apply text-xs text-starlight-300;
    }
  }
  
  .forgot-password {
    @apply text-xs text-rift-500 hover:text-rift-400 transition-colors;
  }
}

.login-button {
  @apply w-full py-3 rounded-lg bg-gradient-to-r from-rift-600 to-time-700 text-white font-medium mt-6 relative overflow-hidden transition-all duration-300;
  box-shadow: 0 4px 10px rgba(51, 197, 255, 0.2);
  
  &:hover {
    @apply from-rift-500 to-time-600;
    box-shadow: 0 6px 15px rgba(51, 197, 255, 0.3);
  }
  
  &:disabled {
    @apply opacity-70 cursor-not-allowed;
  }
  
  .button-text {
    @apply relative z-10;
  }
  
  .loading-spinner {
    @apply inline-block w-5 h-5 border-2 rounded-full;
    border-color: #fff transparent #fff transparent;
    animation: spin 1.2s linear infinite;
  }
  
  &::before {
    content: '';
    @apply absolute inset-0 opacity-0 transition-opacity duration-300;
    background: linear-gradient(45deg, theme('colors.rift.400'), theme('colors.time.500'));
  }
  
  &:hover::before {
    @apply opacity-100;
  }
}

.auth-footer {
  @apply mt-8 text-center text-sm text-starlight-400 relative z-10;
  
  p {
    @apply mb-1;
  }
  
  .register-link {
    @apply text-rift-400 hover:text-rift-300 font-medium transition-colors;
    
    &:hover {
      text-shadow: 0 0 8px rgba(51, 197, 255, 0.5);
    }
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>