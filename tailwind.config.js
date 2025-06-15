/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Arabic-inspired color palette
        primary: {
          50: '#fdf7f0',
          100: '#fbeee0',
          200: '#f6ddc1',
          300: '#efc197',
          400: '#e79e6b',
          500: '#d97706', // Warm amber (Arabic gold)
          600: '#c2630c',
          700: '#a1520e',
          800: '#854511',
          900: '#6c3a12',
        },
        secondary: {
          50: '#f7f9fc',
          100: '#eef2f7',
          200: '#d9e2ed',
          300: '#b8cbde',
          400: '#91afcb',
          500: '#1e40af', // Deep blue (Middle Eastern ceramics)
          600: '#1e3a8a',
          700: '#1e3176',
          800: '#1d2951',
          900: '#0c1838',
        },
        accent: {
          50: '#f0fdf9',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#059669', // Emerald (Islamic green)
          600: '#047857',
          700: '#065f46',
          800: '#064e3b',
          900: '#022c22',
        },
        // Traditional Arabic colors
        arabic: {
          gold: '#d97706',
          sand: '#f6ddc1',
          desert: '#c2630c',
          oasis: '#059669',
          sky: '#1e40af',
          pearl: '#f7f9fc',
          copper: '#854511',
          turquoise: '#06b6d4',
          crimson: '#dc2626',
          midnight: '#0c1838',
        }
      },
      fontFamily: {
        // Arabic-supporting fonts
        sans: ['Inter', 'Cairo', 'Amiri', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', 'Cairo', 'Noto Sans Arabic', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Inter', 'Cairo', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 3s infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'geometric-rotate': 'geometricRotate 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(217, 119, 6, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(217, 119, 6, 0.6)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        geometricRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'arabic-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI0NywgMjQ3LCAyNDcsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'arabic-gold': 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #d97706 100%)',
        'desert-sunset': 'linear-gradient(135deg, #dc2626 0%, #d97706 50%, #059669 100%)',
        'arabian-night': 'linear-gradient(135deg, #0c1838 0%, #1e40af 50%, #059669 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'arabic': '0.75rem',
        'mosque': '2rem 0.5rem 2rem 0.5rem',
      },
    },
  },
  plugins: [],
}

