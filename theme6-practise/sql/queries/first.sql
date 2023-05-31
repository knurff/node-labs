SELECT u.id          AS user_id,
       u.name        AS user_name,
       u.avatar_url  AS user_avatar,
       c.photo_url   AS channel_photo,
       c.description AS channel_description,
       c.created_at  AS channel_creation_date
FROM users u
         INNER JOIN
     channels c ON u.id = c.user_id
ORDER BY c.created_at DESC;
