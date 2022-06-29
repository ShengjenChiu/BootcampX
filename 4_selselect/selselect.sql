SELECT (
  SELECT count(assignments)
  FROM assignments
) - count(assignment_submissions) AS total_incomplete
FROM assignment_submissions
JOIN students ON students.id = assignment_submissions.student_id
WHERE students.name = 'Ibrahim Schimmel';