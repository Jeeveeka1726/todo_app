import React from 'react'

const Todoitem = (props) => {

    const completedStyle = {
        fontStyle: "itaic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className='todo-item'>
          <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)} />
          <p style={props.item.completed ? completedStyle:null}>{props.item.text}</p>
        </div>
      )
}

export default Todoitem
