// src/utils/global-directives.ts
import { App, DirectiveBinding } from 'vue';

declare global {
  interface HTMLElement {
    _clickOutsideHandler?: (event: MouseEvent) => void;
  }
}

/**
 * Global directives registration
 * This file registers custom Vue directives that can be used throughout the app
 */

export function registerGlobalDirectives(app: App) {
  // v-click-outside directive
  app.directive('click-outside', {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      el._clickOutsideHandler = (event: MouseEvent) => {
        // Check if clicking outside the element
        if (!(el === event.target || el.contains(event.target as Node))) {
          binding.value(event);
        }
      };
      document.addEventListener('click', el._clickOutsideHandler);
    },
    unmounted(el: HTMLElement) {
      document.removeEventListener('click', el._clickOutsideHandler);
    }
  });

  // v-focus directive
  app.directive('focus', {
    mounted(el: HTMLElement) {
      el.focus();
    }
  });

  // v-scroll-to directive
  app.directive('scroll-to', {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      el.addEventListener('click', () => {
        const target = document.querySelector(binding.value);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  });

  // v-cosmic-hover directive for cosmic glow effects
  app.directive('cosmic-hover', {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      // Default cosmic colors
      const options = {
        color: binding.value?.color || '#8B5CF6',
        intensity: binding.value?.intensity || 0.5,
        scale: binding.value?.scale || 1.05
      };

      el.addEventListener('mouseenter', () => {
        el.style.transform = `scale(${options.scale})`;
        el.style.boxShadow = `0 0 15px ${options.intensity * 10}px ${options.color}`;
        el.style.transition = 'all 0.3s ease-out';
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
        el.style.boxShadow = 'none';
      });
    }
  });
}