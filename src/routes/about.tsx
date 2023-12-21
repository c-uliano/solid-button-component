import { Title } from "solid-start";
import Button from "~/components/Button/Button";

export default function Home() {
  return (
    <main>
      <Title>Solid Button Component</Title>
      <h1>The About Page</h1>
      <h3>Below is the Button</h3>
      <Button text={'Hey There'} />

    </main>
  );
}
