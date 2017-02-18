# 6. NodeJS
## Training

> Tasks 3-5 are about adding server side code to the projects from the `Javascript and jQuery chapter`. Make sure you complete them first!

1. Create a new repository called `nodejs`. All the following tasks should be saved there.
2. Create a simple server that returns a JSON object with your family members. Example object:
```javascript
var family = [
  {
    name: 'Arik',
    age: 26,
    gender: 'Male'
  },
  {
    name: 'Dana',
    age: 16,
    gender: 'Female'
  }
];
```
3. Update the `random color` project so that the random color is returned from the __server__ and received in the client using AJAX calls. The server should return a random color (e.g. #efefef) when accessed at `/randomColor`
4. Update the `text editor` project so that the default text is received from the server (currently the text is "Just Write" and "This text is automatically saved every second :)")
5. Update the `todo list` app so that the todo items are received from the server and saved to server.
