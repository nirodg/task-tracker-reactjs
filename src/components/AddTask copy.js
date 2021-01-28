import { useState } from 'react'


function AddTask({onAdd}) {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({text,day,reminder})

        // clear form
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="task-name">Task</label>
                <input type="text" id="task-name" placeholder="Add task"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label htmlFor="task-datetime" >Day & time</label>
                <input type="text" id="task-datetime" placeholder="Add day & time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="task-reminder" >Set reminder</label>
                <input type="checkbox" id="task-reminder"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" className='btn btn-block' value="Save task" />
        </form>
    )
}

export default AddTask
