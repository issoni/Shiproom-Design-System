// src/components/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component for primary actions
 * 
 * @component
 * @example
 * <Button variant="primary" size="base">Start Streaming</Button>
 */
export const Button = ({ 
  variant = 'primary', 
  size = 'base', 
  disabled = false,
  children,
  onClick,
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-brand-indigo-500 to-brand-purple-500 text-white hover:from-brand-indigo-600 hover:to-brand-purple-600 shadow-md hover:shadow-lg focus:ring-brand-indigo-500',
    secondary: 'bg-neutral-850 dark:bg-neutral-850 border border-neutral-800 text-neutral-100 hover:bg-neutral-800 focus:ring-brand-indigo-500',
    ghost: 'bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100 focus:ring-brand-indigo-500',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    base: 'px-5 py-2.5 text-sm',
    large: 'px-6 py-3 text-base',
  };
  
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  
  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? disabledStyles : ''}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Button style variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  /** Button size */
  size: PropTypes.oneOf(['small', 'base', 'large']),
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Button content */
  children: PropTypes.node.isRequired,
  /** Click handler */
  onClick: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};
