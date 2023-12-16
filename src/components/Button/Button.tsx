import { createSignal } from 'solid-js';
import styles from './Button.module.css';

export interface ButtonProps {
    variant?: string,
    size?: 'sm' | 'md' | 'lg'
}

const Button = (props: ButtonProps) => {

    const [state, setState] = createSignal({
        variant: props.variant || '',
        size: props.size || 'md'
    });

    return (
        <>
            <div>Button</div>
        </>
    )
}

export default Button