const courses = document.querySelectorAll('.course');

for(let course of courses) {
  course.addEventListener('click', () => {
    const idCurso = course.id;
    window.location.href = `/courses/${idCurso}`;
    //courseContent.childNodes[0].src=`https://rocketseat.com.br/${idCurso}`;
  });
};
