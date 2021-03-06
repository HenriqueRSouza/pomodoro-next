import { CountdownContext} from '../contexts/CountdownContext';
import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        active, 
        startCountdown, 
        resetCountdown
    } = useContext(CountdownContext)
    

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split('')

    

    return(
        <div>
        <div className={styles.countDownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
                <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        {hasFinished ? (
            <button
                disabled 
                className={`${styles.countDownButton} `}
            >
                Terminou...
            </button>
        ) : (
            <>
                { active ?(
            <button 
                type="button" 
                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                onClick={resetCountdown}
            >
                Abandonar ciclo
            </button>

        ) : (
            <button 
                type="button" 
                className={styles.countDownButton}
                onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>

        )}
            </>
        )}

        </div>
    );
}