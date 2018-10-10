# Binding Handlers

## valueWithInit

This feature allows you to construct view models with data that is already stored in HTML fields.
It allows the use of Knockout on pages without needing to acquire data from elsewhere (e.g. AJAX calls)
when the data is already available in an HTML form.

### Usage

Simply replace your `value` property with `valueWithInit` in your data bindings

e.g.

```
<input value="Hello world" data-bind="valueWithInit: message" />
```

### Original Snippet

https://stackoverflow.com/a/12135780/356386
