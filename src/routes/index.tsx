import { Title } from "solid-start";
import Counter from "~/components/Counter/Counter";
import Button from "~/components/Button/Button";

export default function Home() {
  return (
    <main>
      <Title>Solid Button Component</Title>
      <h1>Hello world!</h1>
      {/* <Counter /> */}
      <Button />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
