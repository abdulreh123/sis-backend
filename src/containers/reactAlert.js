import React, { useEffect } from 'react'
import { useSnackbar } from 'react-simple-snackbar';
import { useDispatch } from "react-redux";
import { clearErrors } from '../actions/errorActions'

export const Snackbar = (props) => {
    const dispatch = useDispatch();
    const { type, message = "Request successful!" } = props
    let status;
    switch (type) {
        case 200:
            status = 'success';
            break;
        default:
            status = 'danger';
            break;
    }


    const options = {
        position: 'bottom-right',
        style: {
            backgroundColor: `var(--${status})`,
            border: '1px solid #ffffffd1',
            color: 'var(--white)',
            borderRadius: '.5rem',
            fontFamily: 'roboto condense, monospace',
            fontSize: '1rem',
            textAlign: 'center',
        },
        closeStyle: {
            color: '#92e792ad',
            fontSize: '16px',
        },
    }
    const [openSnackbar] = useSnackbar(options);
    useEffect(() => {
        if (type && message) {
            openSnackbar(`${message}`, 5000)
            dispatch(clearErrors())
        }
    }, [type, message])
    return (<></>)
}