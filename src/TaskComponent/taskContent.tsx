import { CheckCircleFilled, ClockCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import useStyles from './style';
import React from 'react';

export const TaskContent = () => {
  const { styles } = useStyles();

  return (
    <ul className={styles.taskContent}>
      <li>
        <CheckCircleFilled style={{ color: '#008000', fontSize: 14 }} />
        <div>
          <span>Abhishek's Task Completed</span>
          <span>43s</span>
        </div>
      </li>
      <li />
      <li>
        <CheckCircleFilled style={{ color: '#008000', fontSize: 14 }} />
        <div>
          <span>Completed</span>
          <span>43s</span>
        </div>
      </li>
      <li />
      <li>
        <CloseCircleFilled style={{ color: '#ff4000', fontSize: 14 }} />
        <div>
          <span> Approval Rejected</span>
          <span>43s</span>
        </div>
      </li>
      <li />
      <li>
        <ClockCircleFilled style={{ color: 'rgba(0, 0, 0, 0.2)', fontSize: 14 }} />
        <div>
          <span>Not Started</span>
          <span />
        </div>
      </li>
    </ul>
  );
};
