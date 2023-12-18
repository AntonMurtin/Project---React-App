import React, { useState } from "react"



export const Notifications = (props) => {
    const [exit, setExit] = useState(false)
    const [width, setWidth] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handleStartTimer = () => {
        const id = setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 0.5
                }

                return prev;
            })
            },20)
            console.log();

            setIntervalId(id);
            // clearInterval(id);
        
    }

    const handlePauseTimer = () => {
        clearInterval(intervalId)
    };

    const handleCloseNotification = () => {
        handlePauseTimer()
        setExit(true)
        setTimeout(() => {
            props.dispatch({
                type: 'REMOVE_NOTIFICATION',
                id: props.id
            })
        }, 400)
    }


    React.useEffect(() => {
        console.log('useEfect');
        handleStartTimer()
    }, [props])

    React.useEffect(() => {
        if (width === 100) {
            handleCloseNotification()
        }
    }, [width])

    return (

        <div
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
            className={`notification-item ${props.type === 'SUCCESS' ? 'success' : 'error'
                } ${exit ? 'exit' : ''}`}>
            <p>{props.message}</p>
            {/* <button className="notification-btn" onClick={() => setExit(true)}></button> */}
            <div className={"bar"} style={{ width: `${width}%` }} >

            </div>
        </div>
    )
}

