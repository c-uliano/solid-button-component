import { createSignal } from 'solid-js';
import styles from './Button.module.css';

export interface ButtonProps {
    text: string;
    variant?: 'primary' | 'secondary' | 'default';
    size?: 'sm' | 'md' | 'lg';
}

const Button = (props: ButtonProps) => {

    const [state, setState] = createSignal({
        text: props.text,
        variant: props.variant || '',
        size: props.size || 'md'
    });

    const buttonStyles = `${styles.button} ${styles[state().variant]} ${styles[state().size]}`;

    return (
        <a class={buttonStyles}>
            {state().text}
        </a>
    )
}

export default Button