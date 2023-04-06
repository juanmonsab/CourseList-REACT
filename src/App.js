import React, { useState } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([
    { id: 1, text: 'CURSO 1' },
    { id: 2, text: 'CURSO 2' },
    { id: 3, text: 'CURSO 3' },
  ]);
  const [newCourse, setNewCourse] = useState('');
}

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
