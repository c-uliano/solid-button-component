import { createSignal } from 'solid-js';
import styles from './Button.module.scss';
import { Variant, BRadius, Size} from '~/types';

export interface ButtonProps {
    text: string;
    variant?: Variant;
    size?: Size;
    uppercase?: boolean;
    borderRadius?: BRadius;
    disabled?: boolean;
    href?: string;
    onClick?: (e:MouseEvent) => void;
}

const Button = (props: ButtonProps) => {
    const buttonObj = [
        styles.button,
        props.variant && styles[props.variant],
        props.size ? styles[props.size] : styles.md,
        props.uppercase && styles.uppercase,
        props.borderRadius && styles[props.borderRadius],
    ].join(' ');

    return (
        <>
            {props.href ? (
                <a class={buttonObj}>
                    {props.text}
                </a>
            ) : (
                <button class={buttonObj} disabled={props.disabled}>
                    {props.text}
                </button>
            )}
        </>
    )
}

export default Button