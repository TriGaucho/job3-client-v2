import React from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

// Props para o componente de Toast
interface ToastMessageProps {
    status: 'success' | 'alert' | 'warn';
    message: string;
    open: boolean;
    onClose: () => void;
}

const ToastMessage: React.FC<ToastMessageProps> = ({ status, message, open, onClose }) => {
    const getAlertSeverity = (): AlertColor => {
        switch (status) {
            case 'success':
                return 'success';
            case 'alert':
                return 'warning';
            case 'warn':
            default:
                return 'error';
        }
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={onClose} severity={getAlertSeverity()} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};

export default ToastMessage;
