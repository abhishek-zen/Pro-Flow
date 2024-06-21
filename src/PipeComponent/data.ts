const nodeWidth = 250;
const nodeHeight = 150;
const edgeType = 'bezier';

export const nodes = [
  {
    id: 'a1',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      title: 'Data Information',
      children: [
        {
          id: 'a1-1',
          title: ' Data Source',
        },
      ],
    },
  },
  {
    id: 'a2',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      title: 'Project Name 1',
      children: [
        {
          id: 'a2-1',
          title: 'Experiment-1',
        },
        {
          id: 'a2-2',
          title: 'Experiment-2',
        },
        {
          id: 'a2-3',
          title: 'Service-1',
        },
      ],
    },
  },
  {
    id: 'a3',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      title: 'Project Name 2',
      children: [
        {
          id: 'a3-1',
          title: 'Experiment-3',
        },
        {
          id: 'a3-2',
          title: 'Experiment-4',
        },
        {
          id: 'a3-3',
          title: 'Service-2',
        },
      ],
    },
  },
  {
    id: 'a4',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      title: 'Project Organizations',
      children: [
        {
          id: 'a4-1',
          title: 'Project 1',
        },
        {
          id: 'a4-2',
          title: 'Project 2',
        },
        {
          id: 'a4-3',
          title: 'Project 3',
        },
      ],
    },
  },
  {
    id: 'a5',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      title: 'Project Name 3',
      children: [
        {
          id: 'a5-1',
          title: 'Experiment-5',
        },
        {
          id: 'a5-2',
          title: 'Service-3',
        },
      ],
    },
  },
];

export const edges = [
  {
    id: 'edge-1',
    source: 'a1',
    target: 'a2',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a2-1-target',
  },
  {
    id: 'edge-2',
    source: 'a1',
    target: 'a2',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a2-2-target',
  },
  {
    id: 'edge-3',
    source: 'a1',
    target: 'a2',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a2-3-target',
  },
  {
    id: 'edge-4',
    source: 'a1',
    target: 'a3',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a3-1-target',
  },
  {
    id: 'edge-5',
    source: 'a1',
    target: 'a3',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a3-2-target',
  },
  {
    id: 'edge-6',
    source: 'a1',
    target: 'a3',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a3-3-target',
  },
  {
    id: 'edge-7',
    source: 'a2',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a2-1-source',
    targetHandle: 'a4-1-target',
  },
  {
    id: 'edge-8',
    source: 'a2',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a2-1-source',
    targetHandle: 'a4-2-target',
  },
  {
    id: 'edge-9',
    source: 'a2',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a2-1-source',
    targetHandle: 'a4-3-target',
  },
  {
    id: 'edge-10',
    source: 'a2',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a2-2-source',
    targetHandle: 'a4-2-target',
  },
  {
    id: 'edge-11',
    source: 'a3',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a3-2-source',
    targetHandle: 'a4-1-target',
  },
  {
    id: 'edge-12',
    source: 'a3',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a3-3-source',
    targetHandle: 'a4-2-target',
  },
  {
    id: 'edge-13',
    source: 'a2',
    target: 'a3',
    type: edgeType,
    sourceHandle: 'a2-3-source',
    targetHandle: 'a3-3-target',
  },
  {
    id: 'edge-14',
    source: 'a1',
    target: 'a5',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a5-1-target',
  },
];
