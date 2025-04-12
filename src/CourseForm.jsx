import React from 'react'

const CourseForm = (props) => {

    let {course, trainer, handleChange, handleSubmit} = props

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='course'>Course</label>
                <input type="text" 
                    id='course'
                    placeholder='Enter course name'
                    name='course'
                    value={course}
                    onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor='trainer'>Trainer</label>
                <input type="text"
                    id='trainer' 
                    placeholder='Enter trainer name'
                    name='trainer'
                    value={trainer}
                    onChange={handleChange} />
            </div>

            <div className="form-group">
                <button>SUBMIT</button>
            </div>
        </form>
    </>
  )
}

export default CourseForm