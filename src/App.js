import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import CustomButton from './components/Button'


import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      setTasks(await fetchTasks())
    }
    getTasks()
  })

  // fetch tasks from api
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    return await res.json()
  }
  // fetch single task from api
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    return await res.json()
  }

  // add task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      }
    )

    const data = await res.json()

    setTasks([...tasks, data])
  }

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    console.log('Updading', updateTask);
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  const swithcVisibilityAddForm = () => (
    setShowAddTask(!showAddTask)
  )

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header title="Task Tracker" />

      <main>
        <Container className={classes.container} maxWidth="sm">

          <Route path='/' exact render={(props) => (
            <>
              <CustomButton
                color={showAddTask ? 'secondary' : 'primary'}
                text={showAddTask ? 'Close' : 'Add new task'}
                onClick={swithcVisibilityAddForm}
                variant="contained" />

              {showAddTask && <AddTask onAdd={addTask} />}
              {
                tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'
              }
              <p><i>Hint: Double click on a specific task to "highlight" it</i></p>
            </>
          )} />
          <Route path='/about' component={About} />
          <Footer />
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
