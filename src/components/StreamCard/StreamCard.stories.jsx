// src/components/StreamCard/StreamCard.stories.jsx
import React from 'react';
import { StreamCard } from './StreamCard';

export default {
  title: 'Components/Molecules/StreamCard',
  component: StreamCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const mockStream = {
  id: 1,
  title: "Real-time WebSocket Chat Implementation",
  streamer: "sarah_codes",
  avatar: "SC",
  viewers: 234,
  language: "JavaScript",
  framework: "React",
  runtime: "Node.js",
  level: "Intermediate",
  activity: "building-feature",
  isLive: true,
  currentFile: "server/websocket.js",
  linesOfCode: 847,
  lastCommit: "12 min ago",
  githubRepo: "github.com/sarah/chat-app",
  isTrending: true
};

export const Standard = {
  args: {
    stream: mockStream,
    variant: 'standard',
  },
};

export const BugFixing = {
  args: {
    stream: {
      ...mockStream,
      title: "Memory Leak Fix in Production Service",
      activity: "bug-fixing",
      githubIssue: "#4521",
      language: "Go",
      framework: "Chi",
    },
    variant: 'standard',
  },
};

export const Compact = {
  args: {
    stream: mockStream,
    variant: 'compact',
  },
};
