# 5. Javascript and jQuery
## Training

1. Create a new repository called `javascript`
2. Run all the code examples from the playground project, make sure you understand them all
3. Write an app that lists all your family members (name, age, gender) in <ul>. All data should be stored in an object in the javascript. Upload this app to the new `javascript` repository.

Example Javascript object:
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

Example HTML output:
```html
<ul>
  <li>Arik, 26, Male</li>
  <li>Dana, 16, Female</li>
</ul>
```

## Mini projects

1 . Create a an app that changes the background color of the whole page to random one, when space bar is pressed. To generate a random color use this function:

```javascript
function getColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
}
```
What exactly does it return?

2 . Create a text editor (title and body only) which saves a your text in `localstorage` every second. When the page is refreshed - should the saved data from the local storage.

3 . Check out the weather app. Make the background of the whole page change based on the weather (rain image when it rains, sun image when it is sunny etc.)

4 . Create a todo list app - the app should have a single  input, when "Enter" key is pressed the text from the input should be added as an `<li>` to a list. Clicking an item inside the list should remove it.
See example for more info.
