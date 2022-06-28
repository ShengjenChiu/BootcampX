-- Busy Days
SELECT assignments.day AS day, count(*) AS total_assignments
FROM assignments
GROUP BY assignments.day
HAVING count(*) >= 10
ORDER BY day;