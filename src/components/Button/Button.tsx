import { createSignal } from 'solid-js';
import styles from './Button.module.scss';
import { Variant, BRadius, Size, Color} from '~/types';

export interface ButtonProps {
    text: string;
    variant?: Variant;
    color?: Color; // whatever you enter has to have a class by that same name to style it up
    size?: Size;
    showIcon?: boolean;
    uppercase?: boolean;
    borderRadius?: BRadius;
    disabled?: boolean;
    href?: string;
    onClick?: (e:MouseEvent) => void;
}

const Button = (props: ButtonProps) => {
    const buttonObj = [
        styles.btn,
        props.variant && styles[props.variant],
        props.color && styles[props.color],
        props.size && styles[props.size],
        props.uppercase && styles.uppercase,
        props.borderRadius && styles[props.borderRadius],
    ].join(' ');

    return (
        <>
            {props.href ? (
                <a class={buttonObj}>
                    {props.showIcon && <span class={styles.icon}>🚀</span>}
                    {props.text}
                </a>
            ) : (
                <button class={buttonObj} disabled={props.disabled}>
                    {props.showIcon && <span class={styles.icon}>🚀</span>}
                    {props.text}
                </button>
            )}
        </>
    )
}

export default Button