import { createSignal } from 'solid-js';
import styles from './Button.module.scss';
import { Variant, Uppercase, BRadius, Size} from '~/types';

export interface ButtonProps {
    text: string;
    variant?: Variant;
    size?: Size;
    uppercase?: boolean; // change this to a boolean?
    borderRadius?: BRadius;
    active?: boolean;
}

const Button = (props: ButtonProps) => {

    // * doesn't need to be state since it's not like the styles will be changing with interaction
    // const [styles, setStyles] = createSignal({
    //     text: props.text,
    //     variant: props.variant || '',
    //     size: props.size || 'md'
    // });
    // const buttonStyles = `${styles.button} ${styles[styles().variant]} ${styles[styles().size]}`;

    // const buttonObj = {
    //     text: props.text,
    //     variant: props.variant || '',
    //     size: props.size || 'md',
    //     uppercase: props.uppercase || '',
    //     borderRadius: props.borderRadius
    // }

    const buttonObj = {
        variant: props.variant ? `${styles[props.variant]}` : '',
        size: props.size ? `${styles[props.size]}` : 'md',
        uppercase: props.uppercase || '',
        borderRadius: props.borderRadius
    }
    const buttonStyles = `${styles.button} ${styles[buttonObj.variant]} ${styles[buttonObj.size]} ${buttonObj.uppercase && styles.uppercase}`;

    return (
        <a class={buttonStyles}>
            {/* {buttonObj.text} */}
            {props.text}
        </a>
    )
}

export default Button