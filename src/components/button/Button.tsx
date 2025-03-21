import styles from './Button.module.css';

type ButtonProps = {
    size: "small" | "medium" | "large";
    type: "primary" | "secondary" ;
    onClick?: () => void;
    children: React.ReactNode;
};



function Button(props: ButtonProps) {

    const buttonTypes = {
        primary: styles.primary,
        secondary: styles.secondary,
    }


    const getSizeStyles = {
        small: styles.small,
        medium: styles.medium,
        large: styles.large
    }



    const buttonStyles = ` ${buttonTypes[props.type] || buttonTypes.primary} ${getSizeStyles[props.size] || getSizeStyles.medium } `;
  
    return (
      <button 
        type="submit"
        className={buttonStyles}
        onClick={props.onClick }
      >
        {props.children}
      </button>
    );
  }
  
  export default Button;
