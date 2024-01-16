import { Title } from "solid-start";
import Counter from "~/components/Counter/Counter";
import Button from "~/components/Button/Button";

export default function Home() {
    return (
        <main>
            <Title>Solid Button Component</Title>
            <h1>Home page</h1>
            {/* <Counter /> */}
            <div style={{'display': 'flex', "justify-content": "center", 'align-items': 'center'}}>
                <div style={{'margin': '0 5px'}}>
                    <Button text={'Disabled'} variant={'text'} uppercase={true} disabled={true} />
                </div>
                <div style={{'margin': '0 5px'}}>
                    <Button text={'Lg Buton'} variant={'text'} uppercase={true} size={'lg'} />
                </div>
                <div style={{'margin': '0 5px'}}>
                    <Button text={'Test 2'} showIcon={true} color={'warning'} variant={'contained'} />
                </div>
                <div style={{'margin': '0 5px'}}>
                    <Button text={'A Link'} href={'#'} variant={'outlined'} />
                </div>
            </div>
        </main>
    );
}
