import { useNavContext } from 'components/nav/nav-provider';
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Page({ children }) {
    const { navRef, navOpenState } = useNavContext()
    const [pageShiftStyles, api] = useSpring(() => ({
        transform: 'translateY(0)',
    }));

    useEffect(() => {
        if (!navRef.current) {
            return
        }

        api.start({
            transform: `translateY(${!navOpenState ? navRef.current.offsetHeight  : '0'}px)`
        })
    }, [api, navRef, navOpenState]);

    return ( <animated.div style = { pageShiftStyles } > { children } </animated.div>
    );
}