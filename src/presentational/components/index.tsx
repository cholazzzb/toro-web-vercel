import { mainTheme } from 'src/theme';

export const GlassCard = mainTheme.styled('div', {
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  boxShadow: '20px 20px 50px rgba(0, 0, 0, 0.5)',
  borderRadius: '15px',
  background: 'rgba(200, 200, 200, 0.1)',
  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(5px)',
});

export const Center = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
