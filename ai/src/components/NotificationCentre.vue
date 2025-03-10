<template>
    <div class="notification-centre">
      <!-- Cosmic Background Elements -->
      <canvas ref="notificationCanvas" class="notification-background-canvas"></canvas>
      <div class="notification-background-overlay"></div>
      
      <!-- Floating Energy Orbs -->
      <div v-for="(orb, index) in 6" :key="`energy-orb-${index}`" 
           :class="`energy-orb orb-${index}`"></div>
      
      <!-- Notification Portal Frame -->
      <div class="notification-portal" :class="{ 'expanded': isExpanded }">
        <!-- Header with Magic Effect -->
        <div class="notification-header" @click="toggleExpand">
          <div class="header-title">
            <div class="cosmic-icon">
              <i class="fas fa-bell"></i>
              <div class="icon-pulse"></div>
            </div>
            <h2>Cosmic Notifications</h2>
          </div>
          
          <div class="notification-counter" v-if="unreadCount > 0">
            <span>{{ unreadCount }}</span>
          </div>
          
          <div class="expand-toggle">
            <div class="toggle-icon" :class="{ 'rotated': isExpanded }">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Control Bar -->
        <div class="control-bar" v-if="isExpanded">
          <div class="filter-controls">
            <button 
              v-for="filter in filterOptions" 
              :key="filter.value"
              :class="['filter-button', { 'active': currentFilter === filter.value }]"
              @click="setFilter(filter.value)"
            >
              <i :class="filter.icon"></i>
              <span>{{ filter.label }}</span>
            </button>
          </div>
          
          <div class="action-controls">
            <button class="action-button mark-all-read" @click="markAllAsRead" v-tooltip="'Mark all as read'">
              <i class="fas fa-check-double"></i>
            </button>
            <button class="action-button clear-all" @click="clearAllNotifications" v-tooltip="'Clear all notifications'">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
        
        <!-- Notification List -->
        <div class="notification-list-container" v-if="isExpanded" ref="notificationList">
          <!-- Loading State -->
          <div class="loading-container" v-if="loading">
            <div class="cosmic-loader">
              <div class="loader-ring"></div>
              <div class="loader-ring-inner"></div>
              <div class="loader-text">Summoning notifications...</div>
            </div>
          </div>
          
          <!-- Empty State -->
          <div class="empty-state" v-else-if="filteredNotifications.length === 0">
            <div class="empty-icon">
              <i class="fas fa-inbox"></i>
            </div>
            <p class="empty-message">
              {{ emptyStateMessage }}
            </p>
            <div class="cosmic-stars">
              <div class="star" v-for="i in 5" :key="`star-${i}`"></div>
            </div>
          </div>
          
          <!-- Notification Items -->
          <transition-group 
            name="notification-transition" 
            tag="div" 
            class="notification-list"
            v-else
          >
            <div 
              v-for="notification in filteredNotifications" 
              :key="notification.id"
              class="notification-item"
              :class="{ 
                'unread': !notification.read,
                'highlight': notification.highlight,
                [notification.type]: true
              }"
              @click="handleNotificationClick(notification)"
            >
              <!-- Notification Type Icon -->
              <div class="notification-icon" :class="notification.type">
                <i :class="getNotificationIcon(notification.type)"></i>
                <div class="icon-glow"></div>
              </div>
              
              <!-- Notification Content -->
              <div class="notification-content">
                <div class="notification-title">
                  {{ notification.title }}
                </div>
                <div class="notification-message">
                  {{ notification.message }}
                </div>
                <div class="notification-meta">
                  <span class="notification-time">{{ formatTime(notification.timestamp) }}</span>
                  <span class="notification-source" v-if="notification.source">
                    <i class="fas fa-tag"></i> {{ notification.source }}
                  </span>
                </div>
                
                <!-- Action Buttons (if available) -->
                <div class="notification-actions" v-if="notification.actions && notification.actions.length > 0">
                  <button 
                    v-for="(action, actionIndex) in notification.actions" 
                    :key="`action-${actionIndex}`"
                    class="action-pill"
                    @click.stop="handleActionClick(notification, action)"
                  >
                    {{ action.label }}
                  </button>
                </div>
              </div>
              
              <!-- Options Menu -->
              <div class="notification-options">
                <button class="options-button" @click.stop="toggleOptions(notification)">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                
                <!-- Options Dropdown -->
                <div class="options-dropdown" v-if="notification.showOptions">
                  <button class="option-item" @click.stop="markAsRead(notification)" v-if="!notification.read">
                    <i class="fas fa-check"></i> Mark as read
                  </button>
                  <button class="option-item" @click.stop="markAsUnread(notification)" v-else>
                    <i class="fas fa-envelope"></i> Mark as unread
                  </button>
                  <button class="option-item" @click.stop="removeNotification(notification)">
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </div>
              </div>
              
              <!-- Magical Corner Accents -->
              <div class="magical-accent top-left"></div>
              <div class="magical-accent top-right"></div>
              <div class="magical-accent bottom-left"></div>
              <div class="magical-accent bottom-right"></div>
            </div>
          </transition-group>
        </div>
        
        <!-- Pagination Controls -->
        <div class="pagination-controls" v-if="isExpanded && totalPages > 1">
          <button 
            class="pagination-button" 
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          
          <div class="page-indicator">
            <span>{{ currentPage }}</span> / <span>{{ totalPages }}</span>
          </div>
          
          <button 
            class="pagination-button" 
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <!-- Notification Summary (Collapsed State) -->
        <div class="notification-summary" v-if="!isExpanded && hasNotifications">
          <div class="latest-notification" v-if="latestNotification">
            <div class="summary-title">{{ truncateText(latestNotification.title, 30) }}</div>
            <div class="summary-message">{{ truncateText(latestNotification.message, 50) }}</div>
          </div>
          <div class="more-indicator" v-if="unreadCount > 1">
            And {{ unreadCount - 1 }} more unread {{ unreadCount === 2 ? 'notification' : 'notifications' }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
  import { getDatabase, ref as dbRef, onValue, update, remove } from 'firebase/database';
  import * as THREE from 'three';
  import { gsap } from 'gsap';
  import anime from 'animejs/lib/anime.es.js';
  
  export default {
    name: 'NotificationCentre',
    props: {
      userId: {
        type: String,
        required: true
      },
      itemsPerPage: {
        type: Number,
        default: 5
      },
      maxNotifications: {
        type: Number,
        default: 100
      }
    },
    
    setup(props, { emit }) {
      // State variables
      const isExpanded = ref(false);
      const loading = ref(true);
      const notifications = ref([]);
      const currentFilter = ref('all');
      const currentPage = ref(1);
      const notificationCanvas = ref(null);
      const notificationList = ref(null);
      
      // Notification system variables
      let notificationListener = null;
      let scene, camera, renderer, particles;
      let animationFrameId = null;
      
      // Filter options
      const filterOptions = [
        { label: 'All', value: 'all', icon: 'fas fa-border-all' },
        { label: 'Unread', value: 'unread', icon: 'fas fa-envelope' },
        { label: 'System', value: 'system', icon: 'fas fa-cog' },
        { label: 'Messages', value: 'message', icon: 'fas fa-comment' },
        { label: 'Alerts', value: 'alert', icon: 'fas fa-exclamation-circle' }
      ];
      
      // Computed properties
      const hasNotifications = computed(() => notifications.value.length > 0);
      
      const unreadCount = computed(() => 
        notifications.value.filter(notification => !notification.read).length
      );
      
      const latestNotification = computed(() => {
        const unreadNotifications = notifications.value.filter(notification => !notification.read);
        return unreadNotifications.length > 0 
          ? unreadNotifications[0] 
          : (notifications.value.length > 0 ? notifications.value[0] : null);
      });
      
      const filteredNotifications = computed(() => {
        let filtered = [...notifications.value];
        
        // Apply type filter
        if (currentFilter.value !== 'all') {
          if (currentFilter.value === 'unread') {
            filtered = filtered.filter(notification => !notification.read);
          } else {
            filtered = filtered.filter(notification => notification.type === currentFilter.value);
          }
        }
        
        // Sort by timestamp descending (newest first)
        filtered.sort((a, b) => b.timestamp - a.timestamp);
        
        // Paginate results
        const startIndex = (currentPage.value - 1) * props.itemsPerPage;
        const endIndex = startIndex + props.itemsPerPage;
        
        return filtered.slice(startIndex, endIndex);
      });
      
      const totalPages = computed(() => {
        let filtered = [...notifications.value];
        
        // Apply type filter
        if (currentFilter.value !== 'all') {
          if (currentFilter.value === 'unread') {
            filtered = filtered.filter(notification => !notification.read);
          } else {
            filtered = filtered.filter(notification => notification.type === currentFilter.value);
          }
        }
        
        return Math.max(1, Math.ceil(filtered.length / props.itemsPerPage));
      });
      
      const emptyStateMessage = computed(() => {
        if (currentFilter.value === 'all') {
          return "Your notification realm is peaceful and empty";
        } else if (currentFilter.value === 'unread') {
          return "You've read all your notifications";
        } else {
          return `No ${currentFilter.value} notifications found`;
        }
      });
      
      // Methods
      const fetchNotifications = () => {
        loading.value = true;
        
        const database = getDatabase();
        const notificationsRef = dbRef(database, `users/${props.userId}/notifications`);
        
        // Set up real-time listener
        notificationListener = onValue(notificationsRef, (snapshot) => {
          const data = snapshot.val();
          
          if (data) {
            // Convert object to array and add ID
            const notificationArray = Object.entries(data).map(([id, notification]) => ({
              id,
              ...notification,
              showOptions: false // Add property for UI state
            }));
            
            // Sort by timestamp
            notificationArray.sort((a, b) => b.timestamp - a.timestamp);
            
            // Limit to max notifications
            notifications.value = notificationArray.slice(0, props.maxNotifications);
          } else {
            notifications.value = [];
          }
          
          loading.value = false;
        });
      };
      
      const toggleExpand = () => {
        isExpanded.value = !isExpanded.value;
        
        // Animate the transition
        if (isExpanded.value) {
          // Scroll to top when expanding
          if (notificationList.value) {
            setTimeout(() => {
              notificationList.value.scrollTop = 0;
            }, 100);
          }
          
          // Animate new notifications when expanded
          setTimeout(() => {
            animateNotificationItems();
          }, 300);
        }
      };
      
      const setFilter = (filter) => {
        currentFilter.value = filter;
        currentPage.value = 1; // Reset to first page on filter change
        
        // Scroll to top when changing filters
        if (notificationList.value) {
          notificationList.value.scrollTop = 0;
        }
        
        // Re-animate items
        setTimeout(() => {
          animateNotificationItems();
        }, 100);
      };
      
      const changePage = (page) => {
        currentPage.value = page;
        
        // Scroll to top when changing pages
        if (notificationList.value) {
          notificationList.value.scrollTop = 0;
        }
        
        // Re-animate items
        setTimeout(() => {
          animateNotificationItems();
        }, 100);
      };
      
      const handleNotificationClick = (notification) => {
        // Mark as read when clicked
        if (!notification.read) {
          markAsRead(notification);
        }
        
        // Close any open option menus
        closeAllOptionMenus();
        
        // Emit event
        emit('notification-clicked', notification);
        
        // Handle navigation if URL is provided
        if (notification.url) {
          // Use your app's router or window.location
          // router.push(notification.url);
        }
      };
      
      const handleActionClick = (notification, action) => {
        // Close any open option menus
        closeAllOptionMenus();
        
        // Emit event with action
        emit('notification-action', { notification, action });
      };
      
      const toggleOptions = (notification) => {
        // Close any other open option menus
        notifications.value.forEach(n => {
          if (n.id !== notification.id) {
            n.showOptions = false;
          }
        });
        
        // Toggle this notification's options
        notification.showOptions = !notification.showOptions;
      };
      
      const closeAllOptionMenus = () => {
        notifications.value.forEach(notification => {
          notification.showOptions = false;
        });
      };
      
      const markAsRead = (notification) => {
        const database = getDatabase();
        const notificationRef = dbRef(database, `users/${props.userId}/notifications/${notification.id}`);
        
        update(notificationRef, {
          read: true
        });
        
        // Close options menu
        notification.showOptions = false;
      };
      
      const markAsUnread = (notification) => {
        const database = getDatabase();
        const notificationRef = dbRef(database, `users/${props.userId}/notifications/${notification.id}`);
        
        update(notificationRef, {
          read: false
        });
        
        // Close options menu
        notification.showOptions = false;
      };
      
      const markAllAsRead = () => {
        const database = getDatabase();
        const updates = {};
        
        notifications.value.forEach(notification => {
          if (!notification.read) {
            updates[`users/${props.userId}/notifications/${notification.id}/read`] = true;
          }
        });
        
        if (Object.keys(updates).length > 0) {
          update(dbRef(database), updates);
        }
      };
      
      const removeNotification = (notification) => {
        const database = getDatabase();
        const notificationRef = dbRef(database, `users/${props.userId}/notifications/${notification.id}`);
        
        // Animate removal
        const element = document.querySelector(`[data-notification-id="${notification.id}"]`);
        if (element) {
          gsap.to(element, {
            opacity: 0,
            x: 100,
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: 0.3,
            onComplete: () => {
              // Remove from database
              remove(notificationRef);
            }
          });
        } else {
          // Remove from database immediately if element not found
          remove(notificationRef);
        }
      };
      
      const clearAllNotifications = () => {
        const database = getDatabase();
        const notificationsRef = dbRef(database, `users/${props.userId}/notifications`);
        
        // Animate all notifications away
        const elements = document.querySelectorAll('.notification-header:hover {
    background-color: rgba(15, 8, 38, 0.8);
  }
  
  .header-title {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
  
  .cosmic-icon {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    background: var(--cosmic-gradient);
    font-size: 14px;
  }
  
  .icon-pulse {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--cosmic-gradient);
    opacity: 0.5;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    70% {
      transform: scale(1.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  
  .notification-header h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .notification-counter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: var(--accent-color);
    font-size: 0.8rem;
    font-weight: 600;
    margin-right: 10px;
    animation: bounce 1s infinite alternate;
  }
  
  @keyframes bounce {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.15);
    }
  }
  
  .expand-toggle {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .toggle-icon {
    transition: transform 0.3s ease;
  }
  
  .toggle-icon.rotated {
    transform: rotate(180deg);
  }
  
  /* Control Bar */
  .control-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-bottom: var(--cosmic-border);
    background-color: rgba(10, 5, 20, 0.4);
  }
  
  .filter-controls {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    gap: 8px;
  }
  
  .filter-controls::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  
  .filter-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    background-color: rgba(15, 8, 38, 0.4);
    border: var(--cosmic-border);
    border-radius: 20px;
    color: var(--text-light);
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }
  
  .filter-button i {
    margin-right: 5px;
    font-size: 0.9rem;
  }
  
  .filter-button:hover {
    background-color: rgba(98, 55, 160, 0.3);
    transform: translateY(-2px);
  }
  
  .filter-button.active {
    background: var(--cosmic-gradient);
    box-shadow: var(--cosmic-glow);
  }
  
  .action-controls {
    display: flex;
    gap: 8px;
  }
  
  .action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(15, 8, 38, 0.6);
    border: var(--cosmic-border);
    color: var(--text-light);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .action-button:hover {
    background-color: rgba(98, 55, 160, 0.5);
    transform: translateY(-2px);
  }
  
  .mark-all-read:hover {
    background-color: rgba(76, 175, 80, 0.3);
  }
  
  .clear-all:hover {
    background-color: rgba(244, 67, 54, 0.3);
  }
  
  /* Notification List Container */
  .notification-list-container {
    max-height: 350px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--secondary-color) rgba(15, 8, 38, 0.4);
  }
  
  .notification-list-container::-webkit-scrollbar {
    width: 6px;
  }
  
  .notification-list-container::-webkit-scrollbar-track {
    background: rgba(15, 8, 38, 0.4);
  }
  
  .notification-list-container::-webkit-scrollbar-thumb {
    background-color: var(--secondary-color);
    border-radius: 6px;
  }
  
  /* Loading State */
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  
  .cosmic-loader {
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loader-ring {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 2px solid transparent;
    border-top-color: var(--secondary-color);
    border-radius: 50%;
    animation: spin 1.5s linear infinite;
  }
  
  .loader-ring-inner {
    position: absolute;
    width: 25px;
    height: 25px;
    border: 2px solid transparent;
    border-top-color: var(--accent-color);
    border-radius: 50%;
    animation: spin 1s linear infinite reverse;
  }
  
  .loader-text {
    position: absolute;
    bottom: -30px;
    font-size: 0.9rem;
    white-space: nowrap;
    animation: pulse 1.5s infinite alternate;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  /* Empty State */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    text-align: center;
  }
  
  .empty-icon {
    font-size: 3rem;
    color: var(--secondary-color);
    opacity: 0.5;
    margin-bottom: 15px;
  }
  
  .empty-message {
    font-size: 1rem;
    color: var(--text-light);
    opacity: 0.7;
    margin-bottom: 10px;
  }
  
  .cosmic-stars {
    position: relative;
    width: 100px;
    height: 40px;
    margin-top: 10px;
  }
  
  .cosmic-stars .star {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: var(--secondary-color);
    border-radius: 50%;
    animation: twinkle 1.5s infinite alternate;
  }
  
  .cosmic-stars .star:nth-child(1) {
    top: 50%;
    left: 10%;
    animation-delay: 0.2s;
  }
  
  .cosmic-stars .star:nth-child(2) {
    top: 30%;
    left: 30%;
    animation-delay: 0.5s;
  }
  
  .cosmic-stars .star:nth-child(3) {
    top: 60%;
    left: 50%;
    animation-delay: 0.8s;
  }
  
  .cosmic-stars .star:nth-child(4) {
    top: 20%;
    left: 70%;
    animation-delay: 1.1s;
  }
  
  .cosmic-stars .star:nth-child(5) {
    top: 40%;
    left: 90%;
    animation-delay: 1.4s;
  }
  
  @keyframes twinkle {
    from {
      opacity: 0.3;
      transform: scale(1);
    }
    to {
      opacity: 1;
      transform: scale(1.5);
      box-shadow: 0 0 10px var(--secondary-color);
    }
  }
  
  /* Notification Items */
  .notification-list {
    padding: 10px;
  }
  
  .notification-item {
    position: relative;
    display: flex;
    margin-bottom: 10px;
    padding: 15px;
    background-color: rgba(15, 8, 38, 0.4);
    border-radius: 10px;
    border: var(--cosmic-border);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    overflow: hidden;
  }
  
  .notification-item:hover {
    background-color: rgba(15, 8, 38, 0.6);
    transform: translateY(-2px);
    box-shadow: var(--cosmic-shadow);
  }
  
  .notification-item.unread {
    background-color: rgba(15, 8, 38, 0.6);
    border-left: 3px solid var(--secondary-color);
  }
  
  .notification-item.highlight {
    background: linear-gradient(135deg, rgba(15, 8, 38, 0.6), rgba(98, 55, 160, 0.2));
    animation: highlightPulse 2s infinite alternate;
  }
  
  @keyframes highlightPulse {
    from {
      box-shadow: 0 0 5px rgba(157, 78, 221, 0.3);
    }
    to {
      box-shadow: 0 0 15px rgba(157, 78, 221, 0.7);
    }
  }
  
  /* Notification Type-Specific Styles */
  .notification-item.system {
    border-left-color: #9575cd;
  }
  
  .notification-item.message {
    border-left-color: #64b5f6;
  }
  
  .notification-item.alert {
    border-left-color: #ef5350;
  }
  
  .notification-item.success {
    border-left-color: #66bb6a;
  }
  
  .notification-item.warning {
    border-left-color: #ffa726;
  }
  
  /* Notification Icon */
  .notification-icon {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    position: relative;
    color: white;
    font-size: 1rem;
  }
  
  .notification-icon.system {
    background: linear-gradient(135deg, #7e57c2, #9575cd);
  }
  
  .notification-icon.message {
    background: linear-gradient(135deg, #42a5f5, #64b5f6);
  }
  
  .notification-icon.alert {
    background: linear-gradient(135deg, #e53935, #ef5350);
  }
  
  .notification-icon.success {
    background: linear-gradient(135deg, #43a047, #66bb6a);
  }
  
  .notification-icon.warning {
    background: linear-gradient(135deg, #fb8c00, #ffa726);
  }
  
  .icon-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: inherit;
    filter: blur(5px);
    opacity: 0.3;
    z-index: -1;
    animation: pulseIcon 2s infinite alternate;
  }
  
  @keyframes pulseIcon {
    from {
      opacity: 0.3;
      transform: scale(1);
    }
    to {
      opacity: 0.6;
      transform: scale(1.2);
    }
  }
  
  /* Notification Content */
  .notification-content {
    flex-grow: 1;
    min-width: 0; /* Important for text-overflow to work */
  }
  
  .notification-title {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .notification-message {
    font-size: 0.9rem;
    color: rgba(249, 247, 255, 0.8);
    margin-bottom: 8px;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .notification-meta {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: rgba(249, 247, 255, 0.6);
  }
  
  .notification-time {
    margin-right: 10px;
  }
  
  .notification-source {
    display: flex;
    align-items: center;
  }
  
  .notification-source i {
    margin-right: 4px;
    font-size: 0.7rem;
  }
  
  /* Notification Actions */
  .notification-actions {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    gap: 5px;
  }
  
  .action-pill {
    padding: 5px 12px;
    background-color: rgba(98, 55, 160, 0.3);
    border: 1px solid rgba(157, 78, 221, 0.3);
    border-radius: 15px;
    color: var(--text-light);
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .action-pill:hover {
    background-color: rgba(157, 78, 221, 0.4);
    transform: translateY(-2px);
  }
  
  /* Notification Options */
  .notification-options {
    position: relative;
    margin-left: 10px;
  }
  
  .options-button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    color: var(--text-light);
    opacity: 0.6;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }
  
  .options-button:hover {
    opacity: 1;
  }
  
  .options-dropdown {
    position: absolute;
    top: 30px;
    right: 0;
    width: 150px;
    background-color: rgba(15, 8, 38, 0.9);
    border-radius: 8px;
    box-shadow: var(--cosmic-shadow);
    border: var(--cosmic-border);
    z-index: 10;
    overflow: hidden;
    animation: fadeIn 0.2s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .option-item {
    width: 100%;
    padding: 10px 15px;
    text-align: left;
    background-color: transparent;
    border: none;
    color: var(--text-light);
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
  }
  
  .option-item i {
    margin-right: 8px;
    width: 16px;
    text-align: center;
  }
  
  .option-item:hover {
    background-color: rgba(98, 55, 160, 0.3);
  }
  
  /* Magical Corner Accents */
  .magical-accent {
    position: absolute;
    width: 15px;
    height: 15px;
    opacity: 0;
    z-index: 1;
  }
  
  .top-left {
    top: 5px;
    left: 5px;
    border-top: 2px solid rgba(157, 78, 221, 0.5);
    border-left: 2px solid rgba(157, 78, 221, 0.5);
  }
  
  .top-right {
    top: 5px;
    right: 5px;
    border-top: 2px solid rgba(157, 78, 221, 0.5);
    border-right: 2px solid rgba(157, 78, 221, 0.5);
  }
  
  .bottom-left {
    bottom: 5px;
    left: 5px;
    border-bottom: 2px solid rgba(157, 78, 221, 0.5);
    border-left: 2px solid rgba(157, 78, 221, 0.5);
  }
  
  .bottom-right {
    bottom: 5px;
    right: 5px;
    border-bottom: 2px solid rgba(157, 78, 221, 0.5);
    border-right: 2px solid rgba(157, 78, 221, 0.5);
  }
  
  .notification-item:hover .magical-accent {
    opacity: 1;
  }
  
  /* Pagination Controls */
  .pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: rgba(10, 5, 20, 0.4);
    border-top: var(--cosmic-border);
  }
  
  .pagination-button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(15, 8, 38, 0.6);
    border: var(--cosmic-border);
    border-radius: 50%;
    color: var(--text-light);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .pagination-button:not(:disabled):hover {
    background-color: rgba(98, 55, 160, 0.5);
    transform: translateY(-2px);
  }
  
  .pagination-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .page-indicator {
    margin: 0 15px;
    font-size: 0.9rem;
  }
  
  /* Notification Summary (Collapsed State) */
  .notification-summary {
    padding: 10px 15px;
  }
  
  .latest-notification {
    margin-bottom: 8px;
  }
  
  .summary-title {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .summary-message {
    font-size: 0.8rem;
    color: rgba(249, 247, 255, 0.8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .more-indicator {
    font-size: 0.75rem;
    color: var(--accent-color);
    margin-top: 5px;
  }
  
  /* Tooltip Styles */
  [v-tooltip] {
    position: relative;
  }
  
  [v-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 10px;
    background-color: rgba(10, 5, 20, 0.9);
    color: var(--text-light);
    font-size: 0.8rem;
    border-radius: 5px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 100;
  }
  
  [v-tooltip]:hover::after {
    opacity: 1;
    visibility: visible;
  }
  
  /* Transition Animations */
  .notification-transition-enter-active, 
  .notification-transition-leave-active {
    transition: all 0.3s ease;
  }
  
  .notification-transition-enter-from {
    opacity: 0;
    transform: translateX(30px);
  }
  
  .notification-transition-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
  
  /* Responsive Styles */
  @media (max-width: 480px) {
    .notification-centre {
      max-width: 100%;
    }
    
    .filter-controls {
      flex-wrap: nowrap;
      overflow-x: auto;
    }
    
    .notification-title {
      font-size: 0.95rem;
    }
    
    .notification-message {
      font-size: 0.85rem;
    }
    
    .action-pill {
      padding: 4px 10px;
      font-size: 0.75rem;
    }
  }
  item');
        
        if (elements.length > 0) {
          gsap.to(elements, {
            opacity: 0,
            x: 100,
            height: 0,
            stagger: 0.05,
            duration: 0.3,
            onComplete: () => {
              // Remove all notifications from database
              remove(notificationsRef);
            }
          });
        } else {
          // Remove all notifications from database immediately
          remove(notificationsRef);
        }
      };
      
      const formatTime = (timestamp) => {
        if (!timestamp) return '';
        
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffSec = Math.floor(diffMs / 1000);
        const diffMin = Math.floor(diffSec / 60);
        const diffHour = Math.floor(diffMin / 60);
        const diffDay = Math.floor(diffHour / 24);
        
        if (diffSec < 60) {
          return 'Just now';
        } else if (diffMin < 60) {
          return `${diffMin}m ago`;
        } else if (diffHour < 24) {
          return `${diffHour}h ago`;
        } else if (diffDay < 7) {
          return `${diffDay}d ago`;
        } else {
          return date.toLocaleDateString();
        }
      };
      
      const getNotificationIcon = (type) => {
        switch (type) {
          case 'message':
            return 'fas fa-comment';
          case 'alert':
            return 'fas fa-exclamation-circle';
          case 'system':
            return 'fas fa-cog';
          case 'success':
            return 'fas fa-check-circle';
          case 'warning':
            return 'fas fa-exclamation-triangle';
          default:
            return 'fas fa-bell';
        }
      };
      
      const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength 
          ? text.substring(0, maxLength) + '...' 
          : text;
      };
      
      // Animation methods
      const initThreeJsBackground = () => {
        if (!notificationCanvas.value) return;
        
        // Setup scene
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
        camera.position.z = 30;
        
        // Setup renderer with transparent background
        renderer = new THREE.WebGLRenderer({
          canvas: notificationCanvas.value,
          alpha: true,
          antialias: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);
        
        // Update renderer size
        updateCanvasSize();
        
        // Create particle system
        const particleCount = 50;
        const particleGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);
        const particleSizes = new Float32Array(particleCount);
        
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          particlePositions[i3] = (Math.random() - 0.5) * 50;
          particlePositions[i3 + 1] = (Math.random() - 0.5) * 50;
          particlePositions[i3 + 2] = (Math.random() - 0.5) * 50;
          
          particleSizes[i] = Math.random() * 2 + 0.5;
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));
        
        const particleMaterial = new THREE.PointsMaterial({
          color: 0x9d4edd,
          size: 1,
          transparent: true,
          opacity: 0.6,
          sizeAttenuation: true
        });
        
        particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);
        
        // Start animation loop
        animateBackground();
      };
      
      const updateCanvasSize = () => {
        if (!notificationCanvas.value || !renderer) return;
        
        const parent = notificationCanvas.value.parentElement;
        if (!parent) return;
        
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      
      const animateBackground = () => {
        animationFrameId = requestAnimationFrame(animateBackground);
        
        if (particles) {
          particles.rotation.x += 0.0003;
          particles.rotation.y += 0.0005;
        }
        
        renderer.render(scene, camera);
      };
      
      const animateNotificationItems = () => {
        // Use anime.js to animate notification items
        anime({
          targets: '.notification-item',
          opacity: [0, 1],
          translateY: [20, 0],
          scale: [0.95, 1],
          delay: anime.stagger(80),
          easing: 'easeOutElastic(1, .6)',
          duration: 600
        });
        
        // Animate notification icons
        anime({
          targets: '.notification-icon',
          scale: [0.5, 1],
          opacity: [0, 1],
          delay: anime.stagger(80, { start: 100 }),
          easing: 'easeOutElastic(1, .5)',
          duration: 800
        });
        
        // Animate magical accents
        anime({
          targets: '.magical-accent',
          opacity: [0, 0.7],
          scale: [0.5, 1],
          delay: anime.stagger(50, { start: 300, from: 'center' }),
          easing: 'easeOutExpo',
          duration: 1000
        });
      };
      
      // Watch for changes
      watch(currentFilter, () => {
        // Ensure current page is valid for new filter
        if (currentPage.value > totalPages.value) {
          currentPage.value = totalPages.value;
        }
      });
      
      // Lifecycle hooks
      onMounted(() => {
        // Fetch notifications
        fetchNotifications();
        
        // Initialize animations
        initThreeJsBackground();
        
        // Set up resize listener
        window.addEventListener('resize', updateCanvasSize);
        
        // Set up click outside listener to close option menus
        document.addEventListener('click', (event) => {
          if (!event.target.closest('.notification-options')) {
            closeAllOptionMenus();
          }
        });
        
        // Initialize energy orbs
        initEnergyOrbs();
      });
      
      onUnmounted(() => {
        // Clean up listener
        if (notificationListener) {
          notificationListener();
        }
        
        // Clean up animation frame
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
        }
        
        // Clean up event listeners
        window.removeEventListener('resize', updateCanvasSize);
        document.removeEventListener('click', closeAllOptionMenus);
        
        // Dispose Three.js resources
        if (renderer) {
          renderer.dispose();
        }
      });
      
      const initEnergyOrbs = () => {
        // Initialize energy orbs animation with anime.js
        anime({
          targets: '.energy-orb',
          translateX: () => anime.random(-20, 20),
          translateY: () => anime.random(-20, 20),
          scale: () => [0.5, anime.random(0.8, 1.2)],
          opacity: () => [0.3, anime.random(0.5, 0.8)],
          easing: 'easeInOutSine',
          duration: () => anime.random(3000, 5000),
          delay: anime.stagger(300),
          direction: 'alternate',
          loop: true
        });
      };
      
      return {
        // State
        isExpanded,
        loading,
        notifications,
        currentFilter,
        currentPage,
        notificationCanvas,
        notificationList,
        
        // Computed
        hasNotifications,
        unreadCount,
        latestNotification,
        filteredNotifications,
        totalPages,
        emptyStateMessage,
        filterOptions,
        
        // Methods
        toggleExpand,
        setFilter,
        changePage,
        handleNotificationClick,
        handleActionClick,
        toggleOptions,
        markAsRead,
        markAsUnread,
        markAllAsRead,
        removeNotification,
        clearAllNotifications,
        formatTime,
        getNotificationIcon,
        truncateText
      };
    }
  };
  </script>
  
  <style scoped>
  :root {
    --primary-color: #6237a0;
    --secondary-color: #9d4edd;
    --accent-color: #ff7b54;
    --text-light: #f9f7ff;
    --text-dark: #2d1b4b;
    --cosmic-bg-dark: #0f0826;
    --cosmic-gradient: linear-gradient(135deg, #6237a0, #9d4edd);
    --cosmic-glow: 0 0 20px rgba(157, 78, 221, 0.6);
    --cosmic-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    --cosmic-border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Main Container */
  .notification-centre {
    position: relative;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    max-width: 400px;
    color: var(--text-light);
  }
  
  /* Background Canvas */
  .notification-background-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  .notification-background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(15, 8, 38, 0.5) 0%, rgba(10, 5, 20, 0.9) 100%);
    z-index: -1;
  }
  
  /* Energy Orbs */
  .energy-orb {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    pointer-events: none;
    z-index: -1;
    filter: blur(10px);
  }
  
  .orb-0 {
    top: 10%;
    left: 10%;
    background: rgba(157, 78, 221, 0.3);
  }
  
  .orb-1 {
    top: 30%;
    right: 10%;
    background: rgba(255, 123, 84, 0.3);
  }
  
  .orb-2 {
    bottom: 20%;
    left: 15%;
    background: rgba(98, 55, 160, 0.3);
  }
  
  .orb-3 {
    bottom: 40%;
    right: 5%;
    background: rgba(157, 78, 221, 0.3);
  }
  
  .orb-4 {
    top: 50%;
    left: 5%;
    background: rgba(255, 123, 84, 0.3);
  }
  
  .orb-5 {
    bottom: 10%;
    right: 20%;
    background: rgba(98, 55, 160, 0.3);
  }
  
  /* Notification Portal */
  .notification-portal {
    position: relative;
    background-color: rgba(15, 8, 38, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: var(--cosmic-shadow);
    border: var(--cosmic-border);
    max-height: 60px;
  }
  
  .expanded {
    max-height: 500px;
  }
  
  /* Header */
  .notification-header {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    background-color: rgba(10, 5, 20, 0.6);
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    z-index: 2;
  }
  
  .notification-centre {
    position: relative;
    z-index: 1;
  }