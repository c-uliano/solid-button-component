## Suggestions v1
``` typescript
import { createSignal } from 'solid-js';
import styles from './Button.module.css';

export interface ButtonProps {
    variant?: string;
    size?: 'sm' | 'md' | 'lg';
}

const Button = (props: ButtonProps) => {
    const [state, setState] = createSignal({
        variant: props.variant || '',
        size: props.size || 'md',
    });

    const buttonStyles = `${styles.button} ${styles[state().variant]} ${styles[state().size]}`;

    return (
        <div class={buttonStyles}>
            Button
        </div>
    );
};

export default Button;
```
- Adding in the signal
- If props.variant is undefined, it defaults to an empty string, and if props.size is undefined, it defaults to 'md'
- Creates a reactive state
- The button component will have these 3 classes applied, styles based on which 'variant' and 'size' are used:
``` typescript
const buttonStyles = `${styles.button} ${styles[state().variant]} ${styles[state().size]}`;
```

## Suggestion 2
### I asked ChatGPT to create a button component with typescript interface

https://chat.openai.com/share/ab3b219b-efb8-4f15-b9dd-ffb7115489b3