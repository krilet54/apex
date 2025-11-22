module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '3rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
    extend: {
      colors: {
        primary: '#0B63A8',
        accent: '#3B82F6'
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      }
      ,
      backgroundImage: {
        'apex-gradient': 'linear-gradient(90deg, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        'from-primary': '#0B63A8',
        'to-accent': '#3B82F6'
      })
    }
  },
  plugins: [],
  safelist: [
    'bg-primary',
    'text-primary',
    'from-primary',
    'to-accent'
  ]
}
