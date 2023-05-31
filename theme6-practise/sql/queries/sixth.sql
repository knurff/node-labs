SELECT u.name          AS channel_name,
       u.avatar_url    AS channel_avatar,
       c.photo_url     AS channel_photo,
       c.description   AS channel_description,
       s.level         AS subscription_level,
       s.subscribed_at AS subscription_date
FROM users u
         INNER JOIN
     subscriptions s ON u.id = s.user_id
         INNER JOIN
     channels c ON s.channel_id = c.id
WHERE u.name = 'Ennis Haestier'
ORDER BY CASE
             WHEN s.level = 'vip' THEN 1
             WHEN s.level = 'follower' THEN 2
             WHEN s.level = 'fan' THEN 3
             ELSE 4
             END,
         s.subscribed_at DESC;
