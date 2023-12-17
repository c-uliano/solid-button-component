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

```typescript
// Button.tsx

import { createSignal } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";

interface ButtonProps {
  onClick: () => void;
  text: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "default";
  showIcon?: boolean;
}

const Button = (props: ButtonProps) => {
  const [count, setCount] = createSignal(0);

  const handleClick = () => {
    props.onClick();
    setCount(count() + 1);
  };

  const getSizeClass = () => {
    switch (props.size) {
      case "small":
        return "btn-small";
      case "medium":
        return "btn-medium";
      case "large":
        return "btn-large";
      default:
        return "";
    }
  };

  const getVariantClass = () => {
    switch (props.variant) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      default:
        return "btn-default";
    }
  };

  return (
    <button
      onClick={handleClick}
      class={`btn ${getSizeClass()} ${getVariantClass()}`}
    >
      {props.showIcon && <span className="icon">🚀</span>}
      {props.text} - Clicked: {count()}
    </button>
  );
};

export default Button;
```

```css
<Button onClick={handleClick} text="Button with Icon" showIcon={true} />
<Button onClick={handleClick} text="Button without Icon" showIcon={false} />

```