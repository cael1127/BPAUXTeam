import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

/**
 * Professional Toast Notification Component
 * UX Best Practice: Provide immediate feedback for user actions
 */
const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  if (!isVisible) return null;

  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0 animate-slide-in-right'
      }`}
      role="alert"
      aria-live="polite"
    >
      <div className="bg-white rounded-lg shadow-2xl p-4 flex items-center space-x-3 min-w-[300px] max-w-md">
        <div className={`${colors[type]} text-white p-2 rounded-lg flex-shrink-0`}>
          {icons[type]}
        </div>
        <p className="text-gray-900 font-medium flex-1">{message}</p>
        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 hover:bg-gray-100 rounded"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/**
 * Toast Manager Hook
 * Manages multiple toast notifications
 */
export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info', duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const ToastContainer = () => (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Toast
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );

  return {
    success: (message, duration) => showToast(message, 'success', duration),
    error: (message, duration) => showToast(message, 'error', duration),
    warning: (message, duration) => showToast(message, 'warning', duration),
    info: (message, duration) => showToast(message, 'info', duration),
    ToastContainer,
  };
};

export default Toast;

