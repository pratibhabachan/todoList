import React from 'react'

const ToDoList = (props) => {

  console.log(props);
  let { items, handleDelete, handleUpdate } = props;

  return (
    <>
      <section className='todo'>
          <h2>Courses</h2>
          <table>
            <thead>
              <tr>
                <th>Courses</th>
                <th>Trainer</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {items.length > 0 && items.map((value) => {
                return (
                  <tr key={value.id}>
                    <td>{value.course}</td>
                    <td>{value.trainer}</td>
                    <td>
                      <button onClick={() => handleUpdate(value.id)}>Update</button>
                      <button onClick={() => handleDelete(value.id)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </section>
    </>
  )
}

export default ToDoList