import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";


export default function Alert(){

    const alert = useSelector((state)=>state.alert)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(Object.keys(alert).length > 0){
            setTimeout(()=>dispatch({type:"resetAlert"}), 3000);
        }
    })
 
    return <div className="position-fixed bottom-0 start-50 translate-middle-x p-3" style={{zIndex: 11}}>
    <div id="liveToast" className={`toast ${Object.keys(alert).length > 0 ? 'show':'hide'} rounded text-${alert?.type}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className={`toast-header bg-white text-${alert?.type}`}>
            <img src={`./icons/${alert?.type}.png`} width="30px" alt="" />
            <strong className="me-auto">{alert?.msg}</strong>
            <button type="button" onClick={()=>{dispatch({type:"resetAlert"})}} className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
        </div>
    </div>
</div>
}