SELECT v.id              AS video_id,
       v.title           AS video_title,
       v.preview_url     AS video_preview,
       v.duration        AS video_duration,
       v.published_at    AS video_publish_date,
       COUNT(l.positive) AS like_count
FROM videos v
         INNER JOIN
     likes l ON v.id = l.video_id
WHERE l.positive = TRUE
  AND v.published_at >= '2021-09-01'
GROUP BY v.id,
         v.title,
         v.preview_url,
         v.duration,
         v.published_at
HAVING COUNT(l.positive) > 4
ORDER BY COUNT(l.positive) DESC
LIMIT 10;
