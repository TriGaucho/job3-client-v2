export type TToastMessageProps {
    status: 'success' | 'alert' | 'warn';
    message: string;
    open: boolean;
    onClose: () => void;
}