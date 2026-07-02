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