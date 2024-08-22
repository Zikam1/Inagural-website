module.exports = {
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide-left 1s ease-out'
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      }
    }
  }
}