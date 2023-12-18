import { createContext, useContext, useReducer } from "react";
import { v4 } from 'uuid'
import { Notifications } from "../components/Notification/Notification";
import { notificationReduser } from "../reducers/notificationReduser";

const NotificationContext = createContext()

export const NotificationProvider = ({ 
    children }) => {

    const [state, dispatch] = useReducer(notificationReduser,[])

    // dispatch({
    //     type: 'ADD_NOTIFICATION',
    //     payload: {
    //         id: v4(),
    //         type: 'SUCCESS',
    //         message: ' ioaisoiasfj'
    //     }
    // })


console.log(state);
    return (
        <NotificationContext.Provider value={dispatch}>
            <div className="notification-wrapper">
                {state.map(note => {
                   return <Notifications dispatch={dispatch} key={note.id} {...note} />
                })}
            </div>

            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification=()=>{
    const dispatch=useContext(NotificationContext);

    return (props)=>{
        dispatch({
            type:'ADD_NOTIFICATION',
            payload:{
                id: v4(),
                ...props
            }
        })
    }
}