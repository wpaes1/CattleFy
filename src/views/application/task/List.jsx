import { useState, useCallback } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import SubTaskList from 'sections/application/task/list/SubTaskList';
import TaskList from 'sections/application/task/list/TaskList';

// data
import { initialTasks } from 'data/task-data';

// ==============================|| TASK - TASK LIST ||============================== //

export default function TaskListPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [loading] = useState(false);
  const [error] = useState(undefined);

  const handleTaskUpdate = useCallback((taskId, updates) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === taskId ? { ...task, ...updates } : task)));
  }, []);

  const handleTaskDelete = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  const handleStatusChange = useCallback(
    (taskId, status) => {
      handleTaskUpdate(taskId, { status });
    },
    [handleTaskUpdate]
  );

  return (
    <Row>
      <Col sm={12}>
        <TaskList
          tasks={tasks}
          loading={loading}
          error={error}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelete={handleTaskDelete}
          onStatusChange={handleStatusChange}
        />
      </Col>
      <Col sm={12}>
        <SubTaskList />
      </Col>
    </Row>
  );
}
