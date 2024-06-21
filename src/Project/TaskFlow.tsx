import { Background, BackgroundVariant, FlowView, applyEdgeChanges, applyNodeChanges } from '@ant-design/pro-flow';
import { useCallback, useState } from 'react';
import { edges, nodes } from '../TaskComponent/data.tsx';
import StageNode from '../TaskComponent/stageNode.tsx';
import TaskNode from '../TaskComponent/taskNode.tsx';
import useStyles from '../TaskComponent/style.js';
import React from 'react';

const WrappedTaskNode = (props) => <TaskNode {...props} />;
const WrappedStageNode = (props) => <StageNode {...props} />;

const nodeTypes = {
  TaskNode: WrappedTaskNode,
  StageNode: WrappedStageNode,
};

function TaskFlow() {
  const { styles } = useStyles();
  const [_nodes, setNodes] = useState(nodes);
  const [_edges, setEdges] = useState(edges);

  const onNodesChange = useCallback(
    (changes) => {
      setNodes((nds) => {
        const updatedNodes = applyNodeChanges(changes, nds);
        return updatedNodes.map(node => ({
          ...node,
          type: node.type || '',
        }));
      });
    },
    [setNodes],
  );

  const onEdgesChange = useCallback(
    (changes) => {
      setEdges((eds) => {
        const updatedEdges = applyEdgeChanges(changes, eds);
        return updatedEdges.map(edge => ({
          ...edge,
          sourceHandle: edge.sourceHandle || '',
          targetHandle: edge.targetHandle || '',
          type: edge.type || '',
        }));
      });
    },
    [setEdges],
  );

  return (
    <div className={styles.container}>
      <FlowView
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        nodes={_nodes}
        edges={_edges}
        background={false}
        layoutOptions={{
          ranksep: 50,
        }}
      >
        <Background color="#f1f1f1" variant={BackgroundVariant.Dots} style={{ background: '#f1f1f1' }} />
      </FlowView>
    </div>
  );
}

export default TaskFlow;