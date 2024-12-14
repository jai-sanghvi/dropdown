# Dropdown

## Import
In your bundler's entry point file
```js
import '@jai-sanghvi/dropdown';
```

## Creating a dropdown
In your HTML
```html
<div class="dd-container">
  <div class="dd-toggle"></div>
  <div class="dd-content"></div>
</div>
```

By default dropdown is visible on hover. If you want it to be shown on click add the class `dd-click` as -
```html
<div class="dd-container">
  <div class="dd-toggle dd-click"></div>
  <div class="dd-content"></div>
</div>
```