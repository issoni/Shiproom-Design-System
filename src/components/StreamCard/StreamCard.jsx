// src/components/StreamCard/StreamCard.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tag } from '../Tag/Tag';
import { Badge } from '../Badge/Badge';
import { GitBranch, FileCode, Code2, Eye } from 'lucide-react';

/**
 * StreamCard component for displaying live coding streams
 * 
 * @component
 * @example
 * <StreamCard stream={streamData} variant="standard" />
 */
export const StreamCard = ({ 
  stream,
  variant = 'standard',
  onClick,
  className = '',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyles = 'bg-neutral-900/50 backdrop-blur-xl border border-neutral-800/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer';
  
  const variants = {
    standard: 'flex p-5 gap-5 hover:scale-[1.02]',
    compact: 'flex flex-col p-4',
  };
  
  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Thumbnail */}
      <div className={`${variant === 'standard' ? 'w-72 h-40' : 'w-full aspect-video'} flex-shrink-0 bg-gradient-to-br from-brand-indigo-600 via-brand-purple-600 to-brand-pink-500 rounded-xl flex items-center justify-center relative overflow-hidden`}>
        <Code2 className="w-20 h-20 text-white/30" />
        
        {/* Live Badge */}
        {stream.isLive && (
          <div className="absolute top-3 left-3">
            <Badge type="live">LIVE</Badge>
          </div>
        )}
        
        {/* Viewer Count */}
        <div className="absolute bottom-3 left-3">
          <Badge type="viewer-count">{stream.viewers}</Badge>
        </div>
        
        {/* Peek Overlay */}
        {isHovered && variant === 'standard' && (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo-900/95 via-brand-purple-900/95 to-brand-pink-900/95 backdrop-blur-sm p-4 flex flex-col justify-center text-sm font-mono text-white space-y-2">
            <div className="flex items-center space-x-2">
              <FileCode className="w-4 h-4 text-brand-indigo-300" />
              <span className="font-semibold">{stream.currentFile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-brand-purple-300" />
              <span className="font-semibold">{stream.linesOfCode} lines</span>
            </div>
            <div className="flex items-center space-x-2">
              <GitBranch className="w-4 h-4 text-brand-pink-300" />
              <span className="font-semibold">Last commit: {stream.lastCommit}</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-brand-indigo-600 transition-colors">
          {stream.title}
        </h3>
        
        {/* Streamer Info */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-indigo-500 to-brand-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-md">
            {stream.avatar}
          </div>
          <span className="text-sm text-neutral-400 font-semibold">{stream.streamer}</span>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Tag type="primary">{stream.language}</Tag>
          <Tag type="secondary">{stream.framework}</Tag>
          {stream.runtime && <Tag type="secondary">{stream.runtime}</Tag>}
          {stream.level && <Tag type="secondary">{stream.level}</Tag>}
          {stream.activity && (
            <Tag type="activity" activity={stream.activity}>
              {stream.activity.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </Tag>
          )}
        </div>
        
        {/* GitHub Integration */}
        <div className="flex items-center space-x-4 text-sm font-mono">
          <div className="flex items-center space-x-2">
            <GitBranch className="w-4 h-4 text-brand-indigo-600" />
            <span className="text-neutral-400">{stream.githubRepo}</span>
          </div>
          {stream.githubIssue && (
            <div className="flex items-center space-x-1.5 px-2 py-1 bg-activity-bug-fixing/20 rounded-lg border border-activity-bug-fixing/30">
              <span className="font-bold text-activity-bug-fixing">Issue {stream.githubIssue}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

StreamCard.propTypes = {
  /** Stream data object */
  stream: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    streamer: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    viewers: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    framework: PropTypes.string,
    runtime: PropTypes.string,
    level: PropTypes.string,
    activity: PropTypes.string,
    isLive: PropTypes.bool,
    currentFile: PropTypes.string,
    linesOfCode: PropTypes.number,
    lastCommit: PropTypes.string,
    githubRepo: PropTypes.string,
    githubIssue: PropTypes.string,
  }).isRequired,
  /** Card variant */
  variant: PropTypes.oneOf(['standard', 'compact']),
  /** Click handler */
  onClick: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};
