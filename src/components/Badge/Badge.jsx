// src/components/Badge/Badge.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Circle, Eye, Award } from 'lucide-react';

/**
 * Badge component for status indicators
 * 
 * @component
 * @example
 * <Badge type="live">LIVE</Badge>
 * <Badge type="trending">HOT</Badge>
 */
export const Badge = ({ 
  type = 'live',
  children,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center space-x-1.5 font-bold text-xs rounded-full shadow-md';
  
  const types = {
    live: 'px-3 py-1.5 bg-semantic-error text-white animate-pulse',
    trending: 'px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white',
    'viewer-count': 'px-3 py-1.5 bg-black/75 backdrop-blur-sm text-white',
  };
  
  const icons = {
    live: <Circle className="w-2 h-2 fill-current" />,
    trending: <Award className="w-3 h-3" />,
    'viewer-count': <Eye className="w-3.5 h-3.5" />,
  };
  
  return (
    <span
      className={`${baseStyles} ${types[type]} ${className}`}
      {...props}
    >
      {icons[type]}
      <span>{children}</span>
    </span>
  );
};

Badge.propTypes = {
  /** Badge type */
  type: PropTypes.oneOf(['live', 'trending', 'viewer-count']),
  /** Badge content */
  children: PropTypes.node.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
};
