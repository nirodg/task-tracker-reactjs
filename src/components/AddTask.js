import { useState } from 'react'

import 'date-fns';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


function AddTask({ onAdd }) {

    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        // clear form
        setText('')
        setDay(new Date())
        setReminder(false)
    }
    const classes = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    return (
        <Container component="main" maxWidth="xs" >
            <div className={classes.paper}>
                <form className={classes.form} onSubmit={onSubmit}>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        id="task-name"
                        label="Add task"
                        autoFocus
                        fullWidth
                        value={text}
                        required
                        onChange={(e) => setText(e.target.value)}
                    />

                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        fullWidth
                        defaultValue={day}
                        required
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <FormControlLabel
                        control={<Checkbox value={reminder} color="primary" />}
                        checked={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                        label="Set reminder"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth>
                        Save task
                    </Button>
                </form >
            </div>
        </Container>
    )
}

export default AddTask
