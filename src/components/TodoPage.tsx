import { Check, Delete } from '@mui/icons-material';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.ts';
import { Task } from '../index';

const TodoPage = () => {
  const api = useFetch();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState(''); // Utilisation de single quotes

  const handleFetchTasks = async () => {
    setTasks(await api.get('/tasks'));
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/tasks/${id}`);
    await handleFetchTasks();
  };

  const handleSave = async () => {
    if (!newTask.trim()) return;

    await api.post('/tasks', { name: newTask });
    setNewTask('');
    await handleFetchTasks();
  };

  useEffect(() => {
    (async () => {
      await handleFetchTasks();
    })();
  }, []);

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h2">HDM Todo List</Typography>
      </Box>

      <Box justifyContent="center" mt={5} flexDirection="column">
        {tasks.map((task) => (
          <Box key={task.id} display="flex" justifyContent="center" alignItems="center" mt={2} gap={1} width="100%">
            <TextField size="small" value={task.name} fullWidth sx={{ maxWidth: 350 }} />
            <Box>
              <IconButton color="success" disabled>
                <Check />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(task.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        ))}

        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <TextField
            size="small"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            fullWidth
            sx={{ maxWidth: 350 }}
          />
          <Button variant="outlined" onClick={handleSave}>
            Ajouter une tâche
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TodoPage;
