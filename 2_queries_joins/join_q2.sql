-- Student's Total Assignment Duration

-- SELECT sum(assignment_submissions.duration) AS total_duration
-- FROM students JOIN assignment_submissions ON students.id = assignment_submissions.student_id
-- WHERE students.name = 'Ibrahim Schimmel';  --GROUP BY will return total duration of all students and the one right solution

-- Cohort's Total Assignment Duration
SELECT sum(assignment_submissions.duration) AS total_duration
FROM assignment_submissions 
JOIN students ON assignment_submissions.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'FEB12';