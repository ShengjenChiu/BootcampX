-- Average Completion Time
SELECT students.name AS student, 
       avg(assignment_submissions.duration) AS average_assignment_duration
FROM students
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
WHERE students.end_date IS NULL
GROUP BY students.name
ORDER BY avg(assignment_submissions.duration) DESC;