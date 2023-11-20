import {
  reactExtension,
  Icon,
  Text,
  View,
  Banner
} from '@shopify/ui-extensions-react/checkout';
import {React , useState, useEffect, useRef} from 'react';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const Ref = useRef(null);

    const [timer, setTimer] = useState('00:00:00');
 
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
 
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {

            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
 
    const clearTimer = (e) => {
   
        setTimer('15:00');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
 
    const getDeadTime = () => {
        let deadline = new Date();
 
        deadline.setMinutes(deadline.getMinutes() + 15);
        return deadline;
    }
 
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);


  return (
    <Banner status='warning' title=''>
      <Text size="base">Order Soon: Your cart is reserved for {timer}</Text>
    </Banner>
  );
}