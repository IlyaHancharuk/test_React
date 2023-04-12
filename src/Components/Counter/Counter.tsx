import { useState } from 'react';
import s from './counter.module.css';

const MAX_COUNTER_VALUE = 5;

const Counter = () => {
    const [counterValue, setCounterValue] = useState<number>(0);

    const isMaxValue = counterValue >= MAX_COUNTER_VALUE;
    const isminValue = counterValue === 0;

    const increaseCounterValue = () => !isMaxValue && setCounterValue(counterValue + 1);
    const resetCounterValue = () => setCounterValue(0);

    return (
        <div className={s.container}>
            <div className={s.counter}>
                <div className={ `${s.viewCount} ${isMaxValue && s.red}`}>{counterValue}</div>
                <div className={s.buttons}>
                    <button onClick={increaseCounterValue} disabled={isMaxValue} className={s.defaultBtn}>inc</button>
                    <button onClick={resetCounterValue} disabled={isminValue} className={s.defaultBtn}>reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;
