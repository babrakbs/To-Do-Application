# To Do Application 📝

## Prerequisites of application:  
- ### Splash Screen:
1. It should be a simple splash screen.  
2. It should appear for a brief time when the application is launched.  
3. It should be visible on both Android and iOS.  

- ### Welcome screen:
1. Will only be visible if a user is not logged in.

- ### Register screen :
1. Only 3 fields are required email, password, and password confirmation.  
2. Upon successful registration, the user will be notified to check their email inbox and
redirected to the login screen.

- ### Login screen :
1. 2 fields are required - email and password.  
2. If credentials are invalid show appropriate user feedback.  
3. If the credentials are correct the user should be logged in and redirected to the Todo
List screen.

- ### ToDo list :
1. The user should see a list of their previously created ToDos.  
2. The user should be able to navigate to the "Create new ToDo".  
3. The user should be able to navigate to the "View/update ToDo" screen by clicking on
one of the ToDos items from the list.  
4. The user should be able to delete a particular ToDo item from the list.
5. ToDo items should be searchable by title.  
6. Pagination should be handled as an infinite-scroll.

- ### Create ToDo screen :
1. 2 fields are required, title and description.  
2. Upon successfully creating the ToDo item the user should be redirected to the "ToDo
list" screen.  

- ### View/update ToDo screen :
1. 2 fields are required, title and description of the ToDo item, and these fields should be
pre-filled with data from the server for the selected ToDo item.  
2. Upon successfully updating the ToDo the user should be redirected to the "ToDo list"
screen.  
