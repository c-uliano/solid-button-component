import { createSignal } from 'solid-js';
import styles from './Button.module.scss';
import { Variant, BRadius, Size} from '~/types';

export interface ButtonProps {
    text: string;
    variant?: Variant;
    size?: Size;
    uppercase?: boolean;
    borderRadius?: BRadius;
    active?: boolean;
}

const Button = (props: ButtonProps) => {

    // * doesn't need to be state since it's not like the styles will be changing with interaction.
    // const [styles, setStyles] = createSignal({
    //     text: props.text,
    //     variant: props.variant || '',
    //     size: props.size || 'md'
    // });
    // const buttonStyles = `${styles.button} ${styles[styles().variant]} ${styles[styles().size]}`;
    // *

    // ? next tried an object, but had to put everything that was a class into a variable and then apply that to the element. Was double the work, need to find a simplier way to maintain the styles.
    // const buttonObj = {
    //     text: props.text,
    //     variant: props.variant || '',
    //     size: props.size || 'md',
    //     uppercase: props.uppercase || '',
    //     borderRadius: props.borderRadius
    // }
    // const buttonStyles = `${styles.button} ${styles[buttonObj.variant]} ${styles[buttonObj.size]} ${buttonObj.uppercase && styles.uppercase}`;
    // ?

    const buttonObj = [
        styles.button,
        props.variant && styles[props.variant],
        props.size ? styles[props.size] : styles.md,
        props.uppercase && styles.uppercase,
        props.borderRadius ? styles[props.borderRadius] : styles['br-default']
    ].join(' ');

    return (
        <a class={buttonObj}>
            {props.text}
        </a>
    )
}

export default Button