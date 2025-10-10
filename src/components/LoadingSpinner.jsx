import React from 'react';

/**
 * Professional loading spinner component
 * UX Best Practice: Provide visual feedback during loading states
 */
const LoadingSpinner = ({ size = 'md', color = 'purple' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    purple: 'border-purple-600',
    pink: 'border-pink-600',
    blue: 'border-blue-600',
    white: 'border-white',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-4 border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

/**
 * Skeleton loading component for content placeholders
 * UX Best Practice: Show content structure while loading
 */
export const SkeletonLoader = ({ variant = 'text', className = '' }) => {
  const variants = {
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    circle: 'h-12 w-12 rounded-full',
    card: 'h-48 w-full',
    avatar: 'h-16 w-16 rounded-full',
  };

  return (
    <div
      className={`skeleton ${variants[variant]} ${className}`}
      role="status"
      aria-label="Loading content"
    />
  );
};

/**
 * Card skeleton for loading card-based content
 */
export const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 animate-pulse">
      <div className="flex items-center mb-4">
        <SkeletonLoader variant="circle" className="mr-4" />
        <div className="flex-1 space-y-2">
          <SkeletonLoader variant="title" />
          <SkeletonLoader variant="text" className="w-1/2" />
        </div>
      </div>
      <div className="space-y-3">
        <SkeletonLoader variant="text" />
        <SkeletonLoader variant="text" />
        <SkeletonLoader variant="text" className="w-5/6" />
      </div>
    </div>
  );
};

/**
 * Loading overlay for full-screen loading states
 */
export const LoadingOverlay = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl p-8 flex flex-col items-center space-y-4 animate-scale-in">
        <LoadingSpinner size="lg" color="purple" />
        <p className="text-gray-700 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

