import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {CSSTransition} from 'react-transition-group'

import { hideAlertAction } from '../store/alertReducer';

const Alert = () => {

    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()

    return (
        <CSSTransition
            in={alert.visible}
            timeout={1200}
            classNames={"alert"}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                {alert.text}
                
                <button type="button" 
                        className="close" 
                        data-dismiss="alert" 
                        aria-label="Close"
                        onClick={() => dispatch(hideAlertAction())}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    );
};

export default Alert;