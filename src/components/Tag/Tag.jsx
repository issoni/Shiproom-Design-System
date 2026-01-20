// src/components/Tag/Tag.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tag component for displaying technical metadata
 * 
 * @component
 * @example
 * <Tag type="primary">JavaScript</Tag>
 * <Tag type="activity" activity="bug-fixing">Bug Fixing</Tag>
 */
export const Tag = ({ 
  type = 'secondary',
  activity,
  children,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center font-semibold text-sm rounded-lg transition-all';
  
  const types = {
    primary: 'px-3 py-1.5 bg-gradient-to-r from-brand-indigo-600 to-brand-purple-600 text-white font-bold',
    secondary: 'px-3 py-1.5 bg-neutral-800/50 border border-neutral-800/50 text-neutral-100',
  };
  
  const activityColors = {
    'bug-fixing': 'px-3 py-1.5 bg-activity-bug-fixing/20 border border-activity-bug-fixing/30 text-activity-bug-fixing font-bold',
    'building-feature': 'px-3 py-1.5 bg-activity-building-feature/20 border border-activity-building-feature/30 text-activity-building-feature font-bold',
    'code-review': 'px-3 py-1.5 bg-activity-code-review/20 border border-activity-code-review/30 text-activity-code-review font-bold',
    'refactoring': 'px-3 py-1.5 bg-activity-refactoring/20 border border-activity-refactoring/30 text-activity-refactoring font-bold',
    'learning': 'px-3 py-1.5 bg-activity-learning/20 border border-activity-learning/30 text-activity-learning font-bold',
  };
  
  const getStyles = () => {
    if (type === 'activity' && activity) {
      return activityColors[activity];
    }
    return types[type];
  };
  
  return (
    <span
      className={`${baseStyles} ${getStyles()} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

Tag.propTypes = {
  /** Tag type determines styling */
  type: PropTypes.oneOf(['primary', 'secondary', 'activity']),
  /** Activity type (required when type is 'activity') */
  activity: PropTypes.oneOf(['bug-fixing', 'building-feature', 'code-review', 'refactoring', 'learning']),
  /** Tag content */
  children: PropTypes.node.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
};
