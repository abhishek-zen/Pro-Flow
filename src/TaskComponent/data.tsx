import { Button } from 'antd';
import { TaskContent } from './taskContent.tsx';
import React, { ReactNode } from 'react';

export const ActionBtn = () => {
  return (
    <Button size="small" type="text" onClick={(e) => e.stopPropagation()}>
      action
    </Button>
  );
};

interface NodeData {
  id: string;
  title: string;
  status: string;
  extra?: ReactNode;
  isOpen: boolean;
  children?: ReactNode;
}

interface Node {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: {
    title: string;
    extra?: HTMLDivElement;
    children: NodeData[];
  };
  zIndex?: number;
}

export const nodes: Node[] = [
  {
    id: 'A',
    type: 'StageNode',
    position: { x: 100, y: 100 },
    data: {
      title: 'Configuration Verification',
      extra: undefined,
      children: [
        {
          id: 'task1',
          title: 'Submit Application',
          status: 'success',
          extra: <ActionBtn />,
          isOpen: false,
          //children: <TaskContent />,
        },
        {
          id: 'task2',
          title: 'Submit Application 123',
          status: 'success',
          extra: <ActionBtn />,
          isOpen: false,
          //children: <TaskContent />,
        },
      ],
    },
    zIndex: -1,
  },
  {
    id: 'B',
    type: 'StageNode',
    position: { x: 400, y: 100 },
    data: {
      title: 'Multi-task Parallel',
      children: [
        {
          id: 'b1',
          title: 'Submit Application',
          status: 'success',
          isOpen: false,
        },
        {
          id: 'b2',
          title: 'Submit Application',
          status: 'success',
          isOpen: true,
          //children: <TaskContent />,
        },
        {
          id: 'b3',
          title: 'Submit Application 123',
          status: 'success',
          isOpen: false,
          //children: <TaskContent />,
        },
      ],
    },
    zIndex: -1,
  },
  {
    id: 'B2',
    type: 'StageNode',
    position: { x: 400, y: 500 },
    data: {
      title: 'Multi-task Parallel',
      children: [
        {
          id: 'b21',
          title: 'Submit Application',
          status: 'success',
          isOpen: false,
        },
        {
          id: 'b22',
          title: 'Submit Application',
          status: 'success',
          isOpen: true,
          children: <TaskContent />,
        },
        {
          id: 'b23',
          title: 'Submit Application 123',
          status: 'success',
          isOpen: false,
          children: <TaskContent />,
        },
      ],
    },
    zIndex: -1,
  },
  {
    id: 'C',
    type: 'StageNode',
    position: { x: 700, y: 100 },
    data: {
      title: 'Stage Name',
      children: [
        {
          id: 'c1',
          title: 'Submit Application',
          status: 'success',
          extra: <ActionBtn />,
          isOpen: false,
          //children: <TaskContent />,
        },
        {
          id: 'c2',
          title: 'Submit Application 123',
          status: 'success',
          extra: <ActionBtn />,
          isOpen: false,
          //children: <TaskContent />,
        },
      ],
    },
    zIndex: -1,
  },
  {
    id: 'D',
    type: 'StageNode',
    position: { x: 1000, y: 100 },
    data: {
      title: 'Stage Name',
      children: [
        {
          id: 'd1',
          title: 'Submit Application',
          status: 'success',
          extra: <ActionBtn />,
          isOpen: false,
          //children: <TaskContent />,
        },
      ],
    },
    zIndex: -1,
  },
];

// Define edges as per your requirement
export const edges = [
  {
    id: 'A-B',
    source: 'A',
    target: 'B',
    sourceHandle: 'task1',
    targetHandle: 'b2',
    type: 'bezier',
  },
  {
    id: 'A-B2',
    source: 'A',
    target: 'B',
    sourceHandle: 'task1',
    type: 'bezier',
    targetHandle: 'b3',
  },
  {
    id: 'A-B3',
    source: 'A',
    target: 'B2',
    sourceHandle: 'task1',
    type: 'bezier',
    targetHandle: 'b23',
  },
  {
    id: 'B-C',
    source: 'B',
    target: 'C',
    sourceHandle: 'b1',
    type: 'bezier',
    targetHandle: 'c1',
  },
  {
    id: 'B2-C',
    source: 'B2',
    target: 'C',
    sourceHandle: 'b23',
    type: 'bezier',
    targetHandle: 'c1',
  },
  {
    id: 'B-C2',
    source: 'B',
    target: 'C',
    sourceHandle: 'b2',
    type: 'bezier',
    targetHandle: 'c1',
  },
  {
    id: 'B-C3',
    source: 'B',
    target: 'C',
    sourceHandle: 'b3',
    type: 'bezier',
    targetHandle: 'c2',
  },
  {
    id: 'C-D',
    source: 'C',
    target: 'D',
    sourceHandle: 'c1',
    type: 'bezier',
    targetHandle: 'd1',
  },
  {
    id: 'C-D2',
    source: 'C',
    target: 'D',
    sourceHandle: 'c2',
    type: 'bezier',
    targetHandle: 'd1',
  },
];
