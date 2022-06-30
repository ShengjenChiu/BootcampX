const { Pool } = require('pg');

const cohort_name = process.argv[2];
const cohort_limit = process.argv[3];
const values = [`${cohort_name}`, `${cohort_limit}`];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
  FROM students
  JOIN cohorts ON cohorts.id = students.cohort_id
 LIMIT $2;
`, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${cohort_name} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));