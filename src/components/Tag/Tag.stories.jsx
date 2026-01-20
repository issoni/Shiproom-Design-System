// src/components/Tag/Tag.stories.jsx
import React from 'react';
import { Tag } from './Tag';

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'activity'],
      description: 'Tag type determines styling',
    },
    activity: {
      control: 'select',
      options: ['bug-fixing', 'building-feature', 'code-review', 'refactoring', 'learning'],
      description: 'Activity type (only for activity variant)',
    },
  },
};

export const Language = {
  args: {
    type: 'primary',
    children: 'JavaScript',
  },
};

export const Framework = {
  args: {
    type: 'secondary',
    children: 'React',
  },
};

export const BugFixing = {
  args: {
    type: 'activity',
    activity: 'bug-fixing',
    children: 'Bug Fixing',
  },
};

export const BuildingFeature = {
  args: {
    type: 'activity',
    activity: 'building-feature',
    children: 'Building Feature',
  },
};

export const TagGroup = () => (
  <div className="flex flex-wrap gap-2">
    <Tag type="primary">JavaScript</Tag>
    <Tag type="secondary">React</Tag>
    <Tag type="secondary">Node.js</Tag>
    <Tag type="secondary">Intermediate</Tag>
    <Tag type="activity" activity="building-feature">Building Feature</Tag>
  </div>
);
