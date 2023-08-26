import React from 'react';
import css from './Button.module.css';

/**
 * A functional component representing a customizable button.
 *  (for button with "+"" icon, see AddIconButton)
 *
 * @param {Object} props
 * @param {"button" | "submit | "reset"} [props.buttonType='button'] - The type attribute for the button element.
 * @param {className} propsclassname - Additional custom styles for Button component.
 * @param {("color" | "transparent" | "dark")} props.stylization - Stilization types of button.
 * @param {("violet" | "light" | "dark")} props.theme - Temporary soution, it must be changed as soos as theme is added.
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 * @example
 *  Usage example:
 *  Renders a transparent button with custom stylization and text "Click me":
 *  <Buttons className="buttonCSS" buttonType="button" stylization="transparent">Click me</Buttons>
 */
export default function Buttons({
  className,
  buttonType = 'button',
  stylization = 'color',
  theme = 'violet',
  children,
}) {
  const getBtnStyle = () => {
    switch (stylization) {
      case 'dark':
        return css.buttonDark;
      case 'transparent':
        return css.buttonTransparent;
      default:
        return css.buttonMain;
    }
  };

  //temp solution
  const getTheme = () => {
    switch (theme) {
      case 'light':
        return css.light;
      case 'dark':
        return css.dark;
      default:
        return css.violet;
    }
  };

  return (
    <button
      className={`${
        stylization === 'color' && getTheme()
      } ${getBtnStyle()} ${className} ${css.button}`}
      type={buttonType}
    >
      {children}
    </button>
  );
}
