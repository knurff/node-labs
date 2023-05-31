SELECT v.id           AS video_id,
       v.title        AS video_title,
       v.preview_url  AS video_preview,
       v.duration     AS video_duration,
       v.published_at AS video_publish_date
FROM videos v
         INNER JOIN (SELECT video_id,
                            COUNT(*) AS like_count
                     FROM likes
                     WHERE positive = TRUE
                     GROUP BY video_id
                     ORDER BY COUNT(*) DESC
                         LIMIT 5) l ON v.id = l.video_id;
