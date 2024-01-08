import { Title } from "solid-start";
import Counter from "~/components/Counter/Counter";
import Button from "~/components/Button/Button";

export default function Home() {
  return (
    <main>
      <Title>Solid Button Component</Title>
      <h1>Home page</h1>
      {/* <Counter /> */}
      <Button text={'Hello'} variant={'primary'} uppercase={true} />
      <Button text={'Test 2'} />
      <Button text={'A Link'} href={'#'} />
    </main>
  );
}
