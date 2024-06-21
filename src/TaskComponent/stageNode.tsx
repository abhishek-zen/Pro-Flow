import { FlowViewNode } from '@ant-design/pro-flow';
import { FC } from 'react';
import useStyles from './style.js';
import TaskNode from './taskNode.tsx';
import React from 'react';

const StageNode: FC<FlowViewNode> = (node) => {
  // const [open, setOpen] = useState(false);
  const { styles } = useStyles();
  const { data } = node;
  const taskNodes = data.children;

  return (
    <div className={styles.stageNode}>
      <div className="wrap">
        <div className="title">{data.title}</div>
        {data.extra}
      </div>
      <div className="taskNodes">
        {taskNodes.map((taskNode: any) => {
          return <TaskNode data={taskNode} key={taskNode.id} />;
        })}
      </div>
    </div>
  );
};

export default StageNode;