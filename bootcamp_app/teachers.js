const { LOADIPHLPAPI } = require('dns');
const { Pool } = require('pg');

//SHENG
// const cohort_name = process.argv[2];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// pool.query(`
//   SELECT teachers.name
//     FROM teachers
//     JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
//     JOIN students ON students.id = assistance_requests.student_id
//     JOIN cohorts ON cohorts.id = students.cohort_id
//    WHERE cohorts.name = ${cohort_name}
// GROUP BY teachers.name
// ORDER BY teachers.name;
//   `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${cohort_name}: ${user.name}`);
//   })
// })
// .catch(err => console.error('query error', err.stack));

// LHL


const limit = process.argv[2] || 'JUL02';
const values = [limit];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});