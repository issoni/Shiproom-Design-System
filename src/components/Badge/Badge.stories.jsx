// src/components/Badge/Badge.stories.jsx
import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Components/Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export const Live = {
  args: {
    type: 'live',
    children: 'LIVE',
  },
};

export const Trending = {
  args: {
    type: 'trending',
    children: 'HOT',
  },
};

export const ViewerCount = {
  args: {
    type: 'viewer-count',
    children: '234',
  },
};
