import React, { useState } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([
    { id: 1, text: 'CURSO 1' },
    { id: 2, text: 'CURSO 2' },
    { id: 3, text: 'CURSO 3' },
  ]);
  const [newCourse, setNewCourse] = useState('');

function handleSubmit(event) {
  event.preventDefault()
  if (!newCourse) return;
  const newCourseText = newCourse.toUpperCase();
  const courseExists = courses.find((course) => course.text === newCourseText);
  if (courseExists) {
    alert(`El curso ${newCourseText} ya existe en el listado, por favor ingrese un curso no existente.`);
    return;
  }
  const newCourses = [...courses, { id: courses.length + 1, text: newCourseText }];
  setCourses(newCourses);
  setNewCourse('');
  }
  function handleDeleteCourse(courseId) {
    const newCourses = courses.filter((course) => course.id !== courseId);
    setCourses(newCourses);
  }

  return (
    <div>
      <h1>Listado de Cursos:</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.text}
            <button onClick={() => handleDeleteCourse(course.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Nuevo Curso:
          <input type="text" value={newCourse} onChange={(event) => setNewCourse(event.target.value)} />
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  ); 
}
export default CourseList;