import { defineConfig, presetWind, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons(),
  ],
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg font-medium transition-all duration-200',
    'btn-primary': 'bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40',
    'btn-outline': 'border-2 border-violet-400 text-violet-600 hover:bg-violet-50',
    'glow': 'shadow-lg shadow-violet-400/20 hover:shadow-violet-400/40',
    'card': 'bg-white/80 backdrop-blur-sm border border-violet-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300',
    'card-hover': 'hover:scale-[1.02] hover:border-violet-200',
    'section-title': 'text-3xl font-bold text-violet-800 mb-4',
    'section-divider': 'h-0.5 w-24 bg-violet-300 mx-auto',
    'minimal-border': 'border border-stone-200 hover:border-stone-300 transition-colors duration-300',
    'minimal-3d': 'relative before:absolute before:inset-0 before:bg-stone-200 before:translate-y-1 before:rounded-lg before:-z-10 hover:before:translate-y-2 transition-all duration-200',
    'subtle-3d': 'relative before:absolute before:inset-0 before:bg-stone-100 before:translate-y-0.5 before:rounded-lg before:-z-10 hover:before:translate-y-1 transition-all duration-200',
  },
  theme: {
    colors: {
      violet: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      fuchsia: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75',
      },
      indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
      },
      sage: {
        50: '#f4f7f4',
        100: '#e6ede6',
        200: '#d0dbd0',
        300: '#b3c4b3',
        400: '#8fa68f',
        500: '#6d876d',
        600: '#556c55',
        700: '#455645',
        800: '#394639',
        900: '#2f3a2f',
      },
      terracotta: {
        50: '#fdf6f4',
        100: '#f9e8e4',
        200: '#f3d5ce',
        300: '#eab9ad',
        400: '#de9482',
        500: '#d06d56',
        600: '#b85a44',
        700: '#994a39',
        800: '#7d3f32',
        900: '#67372c',
      },
      sand: {
        50: '#faf7f2',
        100: '#f5efe3',
        200: '#e9dcc7',
        300: '#dcc4a5',
        400: '#cca57a',
        500: '#bc8650',
        600: '#a86f3d',
        700: '#8c5a33',
        800: '#724a2d',
        900: '#5e3e28',
      },
    },
    extend: {
      animation: {
        'gradient-slow': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-up-delay': 'fadeInUp 0.5s ease-out 0.2s',
        'fade-in-up-delay-2': 'fadeInUp 0.5s ease-out 0.4s',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        subtlePulse: {
          '0%, 100%': {
            opacity: '0.8',
          },
          '50%': {
            opacity: '1',
          },
        },
        glowPulse: {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(139, 92, 246, 0.2)',
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(139, 92, 246, 0.4)',
          },
        },
      },
    },
  },
  safelist: [
    'animate-fade-in-up',
    'animate-fade-in-up-delay',
    'animate-fade-in-up-delay-2',
    'animate-float',
    'animate-float-delay',
    'animate-float-slow',
    'animate-gradient-slow',
    'animate-subtle-pulse',
    'animate-glow-pulse',
  ],
}); 