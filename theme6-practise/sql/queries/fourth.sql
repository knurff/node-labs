SELECT u.name        AS channel_name,
       u.avatar_url  AS channel_avatar,
       c.photo_url   AS channel_photo,
       c.description AS channel_description,
       COUNT(s.id)   AS subscriber_count
FROM users u
         INNER JOIN
     channels c ON u.id = c.user_id
         LEFT JOIN
     subscriptions s ON c.id = s.channel_id
WHERE c.id = '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76'
GROUP BY u.name,
         u.avatar_url,
         c.photo_url,
         c.description;
