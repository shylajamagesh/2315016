## Notification App Backend
## stage 1

## Get All Notifications

METHOD : GET
Endpoint: /api/notifications
Headers: Authorization: Bearer <token>




## Get Notification by ID

METHOD : GET
Endpoint : /api/notifications/{id}
Headers : Authorization: Bearer <token>



## Create Notification

METHOD : POST
Endpoint : /api/notifications
Headers :
Authorization: Bearer <token>
Body: json
{
  "title": "Welcome",
  "message": "Welcome to the application",
}



## Mark Notification as Read

METHOD : PATCH
Endpoint : /api/notifications/{id}/read
Headers :
Authorization: Bearer <token>




## Mark All Notifications as Read

METHOD : PATCH
Endpoint : /api/notifications/read-all
Headers :
Authorization: Bearer <token>




## Delete Notification

METHOD : DELETE
Endpoint : /api/notifications/{id}
Headers :
Authorization: Bearer <token>

##stage




## stage 2
Data base selection - MySql
reason - to store structerd sata , fast CRUD operatiions 


## Database Schema
Table name : notifications
attributes
1. id - INT , PRIMARY KEY
2. userid - INT
3. title - VARCHAR
4. message - VARCHAR
5. isread - boolean
6. createdtime - TIMESTAMP

# Problem arise when data volume increase
Slow down queries , more storage , performance decrease

# Solution
indexing 


## SQL Queries

# -> Get all notifications
SELECT * FROM notifications WHERE userid = 1;

# -> Get by ID
SELECT * FROM notifications WHERE id = 1;

# -> create notification
INSERT INTO notifications (userid, title, message, isread, createdtime) VALUES (1, 'Welcome', 'Welcome to the application', false, NOW());

# -> mark notification as read
UPDATE notifications SET isread = true WHERE id = 1;

# -> mark all notification as read
UPDATE notifications SET isread = true WHERE userid = 1;

# _> Delete notification
DELETE FROM notifications WHERE id = 1;


## Stage 3