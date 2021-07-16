import { state } from '../state';

export const customThemeDefault = () => {
  return {
    name: '',
    color: state.get.current().theme.color,
    accent: { hsl: state.get.current().theme.accent.hsl, rgb: state.get.current().theme.accent.rgb },
    font: state.get.current().theme.font,
    background: state.get.current().theme.background,
    radius: state.get.current().theme.radius,
    shadow: state.get.current().theme.shadow,
    style: state.get.current().theme.style,
    shade: state.get.current().theme.shade
  };
};
