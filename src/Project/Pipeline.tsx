import {
    Background,
    BackgroundVariant,
    FlowView,
    FlowViewProvider,
    useEdgesState,
    useFlowViewer,
    useNodesState,
    EditNode,
  } from '@ant-design/pro-flow';
  import { useCallback, useState } from 'react';
  import { edges, nodes as initialNodes } from '../PipeComponent/data.ts';
  import PipeNode from '../PipeComponent/pipeNode.tsx';
  import useStyles from '../PipeComponent/style.js';
  import React from 'react';
  
  const nodeTypes = { pipeNode: PipeNode };
  
  interface NodeData {
    title: string;
    logo: string;
    des?: string;
    children?: { id: string; title: string; logo?: string }[];
  }
  
  interface Node {
    id: string;
    type: string;
    width: number;
    height: number;
    data: NodeData;
  }
  
  function App() {
    const flowViewer = useFlowViewer();
    const { styles } = useStyles();
    const [_nodes, setNodes, onNodesChange] = useNodesState([...initialNodes]);
    const [_edges, , onEdgesChange] = useEdgesState([...edges]);
    const [isEditing, setIsEditing] = useState(false);
    const [nodeData, setNodeData] = useState<Node | null>(null);
    const [collapsedKeys, setCollapsedKeys] = useState<string[]>([]);
  
    const handleClick = useCallback(
      (e, n) => {
        flowViewer?.zoomToNode(n.id, 1000);
      },
      [flowViewer],
    );
  
    const handleAddNode = () => {
      const newNode: Node = {
        id: `new-${_nodes.length + 1}`,
        type: 'pipeNode',
        width: 250,
        height: 150,
        data: {
          title: '',
          logo: '',
          des: '',
          children: [],
        },
      };
      setNodeData(newNode);
      setIsEditing(true);
    };
  
    const handleSaveNode = () => {
      if (nodeData) {
        setNodes((prevNodes) => [...prevNodes, nodeData]);
        setIsEditing(false);
        setNodeData(null);
      }
    };
  
    const handleCancel = () => {
      setIsEditing(false);
      setNodeData(null);
    };
  
    const handleTitleChange = (title: string) => {
      if (nodeData) {
        setNodeData({
          ...nodeData,
          data: {
            ...nodeData.data,
            title,
          },
        });
      }
    };
  
    const handleCollapsedKeysChange = (keys: string[]) => {
      setCollapsedKeys(keys);
    };
  
    return (
      <div className={styles.container}>
        <button onClick={handleAddNode}>Add Node</button>
        <FlowView
          onNodeClick={handleClick}
          nodes={_nodes}
          edges={_edges}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          nodeTypes={nodeTypes}
          background={false}
        >
          <Background color="#F6F8FB" variant={BackgroundVariant.Dots} style={{ background: '#F6F8FB' }} />
        </FlowView>
        {isEditing && nodeData && (
          <EditNode.Preview
            title={nodeData.data.title}
            onTitleChange={handleTitleChange}
            extra={
              <div>
                <button type="button" onClick={handleSaveNode}>Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
              </div>
            }
            active={true}
            collapsedKeys={collapsedKeys}
            onCollapsedKeysChange={handleCollapsedKeysChange}
          >
            <div>
              <label>
                Description:
                <textarea
                  value={nodeData.data.des}
                  onChange={(e) =>
                    setNodeData({
                      ...nodeData,
                      data: {
                        ...nodeData.data,
                        des: e.target.value,
                      },
                    })
                  }
                />
              </label>
            </div>
          </EditNode.Preview>
        )}
      </div>
    );
  }
  
  function Pipeline() {
    return (
      <FlowViewProvider>
        <App />
      </FlowViewProvider>
    );
  }
  
  export default Pipeline;
  