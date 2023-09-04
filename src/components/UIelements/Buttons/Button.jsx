import React from 'react';
import css from './Button.module.css';
import { useTheme } from '@emotion/react';

/**
 * A functional component representing a customizable button.
 *  (for button with "+"" icon, see AddIconButton)
 *
 * @param {Object} props
 * @param {"button" | "submit | "reset"} [props.buttonType='button'] - The type attribute for the button element.
 * @param {className} propsclassname - Additional custom styles for Button component.
 * @param {("color" | "transparent" | "dark")} props.stylization - Stilization types of button.
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 * @example
 *  Usage example:
 *  Renders a transparent button with custom stylization and text "Click me":
 *  <Buttons className="buttonCSS" buttonType="button" stylization="transparent">Click me</Buttons>
 */
export default function Buttons({
  columnId,
  className,
  buttonType = 'button',
  stylization = 'color',
  children,
  pushButton,
}) {
  const theme = useTheme();
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

  return (
    <button
      onClick={columnId ? () => pushButton(columnId) : pushButton}
      style={{ background: theme.popUp.buttonBackground }}
      className={`${css.button} ${getBtnStyle()} ${className ? className : ''}`}
      type={buttonType}
    >
      {children}
    </button>
  );
}
