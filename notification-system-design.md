## Notification App Backend
## 
## stage 1

# Get All Notifications

METHOD : GET
Endpoint: /api/notifications
Headers: Authorization: Bearer <token>




# Get Notification by ID

METHOD : GET
Endpoint : /api/notifications/{id}
Headers : Authorization: Bearer <token>



# Create Notification

METHOD : POST
Endpoint : /api/notifications
Headers :
Authorization: Bearer <token>
Body: json
{
  "title": "Welcome",
  "message": "Welcome to the application",
}



# Mark Notification as Read

METHOD : PATCH
Endpoint : /api/notifications/{id}/read
Headers :
Authorization: Bearer <token>




# Mark All Notifications as Read

METHOD : PATCH
Endpoint : /api/notifications/read-all
Headers :
Authorization: Bearer <token>




# Delete Notification

METHOD : DELETE
Endpoint : /api/notifications/{id}
Headers :
Authorization: Bearer <token>




## 
## 
## stage 2
Data base selection - MySql
reason - to store structerd sata , fast CRUD operatiions 


# Database Schema
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



## 
## 
## Stage 3

# is thequerry correct ?
Yes it is correct , but not optimized for the larger dataset with 5000000 notifications , it slow downs the performnce

# why it slows 
it scans the full table for a single record... and if it scans again and again it may take more time

# what should be changes 
Creating indexing will help because :
-> faster 
-> accuarte scan , reduces the full table scan

# computational cost
n- number of rows or records in the table
-> without indexing : O(n) 
-> with index : O(log n) 
->indexing uses the trees concept


# devlopers advice - indexing at all column
No, it is not effective,
Because :
1. indexing every column consumes more memorey
2. slows down insert , upadte , delete
3. uncessary or not frequenty used columns will be never used

# placement notification in past 7 days
SELECT * FROM notifications WHERE notificationType = 'Placement' AND createdtime >= NOW() - INTERVAL 7 DAY;

## 
## 
## stage 4
Solution is Indexing or pagination.
- only gets the limjted notification
SELECT * FROM notifications WHERE userid = 1 ORDER BY createdtime DESC LIMIT 10;

# benifit
1. fast seaching 
2. fast response

# drawback
1. less data load - pagination
2. slow insert , update , delete - indexing
