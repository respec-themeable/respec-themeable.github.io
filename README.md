# respec-themeable

 **respec-themeable** is a JS library that makes it easier to customize [ReSpec](https://respec.org) for writing technical specifications. [ReSpec](https://respec.org) developers are done a good job but there are some minor issues when you try to use it outside of W3C context. **respec-themeable** provides workarounds for these problems.

 ## Features

- set background image text (left side bar) based on `specStatus`
- customizable publisher name (instead of the hardwired *W3C*)
- hide hardwired documentation W3C copyright texts
- set defaults for some `respecConfig` properties
- set logo from `<link rel="icon" sizes="any" href="...">` element
- make main colors customizable via CSS variables

## Demo

You can view this [README](README.md) file formatted with ReSpec at: https://respec-themeable.github.io

## Installing

Add the following `script` tag after your `respecConfig` declaration script tag:

```html
<script src="https://unpkg.com/respec-themeable" class="remove"></script>
```

## Configuration

### `publisher`

By default ReSpec uses *W3C* as an implicit publisher (ie: in background image text). **respec-themeable** accepts publisher from `publisher` configuration property.

```JavaScript "example": "set document publisher"
var respecConfig = {
    publisher: "My Company"
}
```

When no `publisher` property is set, **respec-themeable** try to find `company` in the properties of `authors` and `editors` otherwise it falls back to `shortName` configuration property value.

### `noPackage`

If the HTML document has web manifest link, **respec-themeable** will use it as source of some default `respecConfig` properties. Otherwise **respec-themeable** tries to use the file `package.json` relative to the HTML document. You can disable `package.json` usage by setting `noPackage` to `true`.

```JavaScript "example": "disable package.json processing"
var respecConfig = {
    noPackage: true
}
```

### logo

If the HTML document has icon link with `sizes="any"` attribute and there is no `logo` in `respecConfig` then the `href` from icon link will be used as logo `src`.

```HTML "example": "set logo"
    <link rel="icon" sizes="any" href="logo.svg"/>
```

```note
You can use data URL in the link's href attribute.
```

### `subtitle`

If there is no `subtitle` in `respecConfig` then `description` property from manifest or package.json will be used as subtitle.

### title

If there is no `<title>` tag in the HTML document then `name` property from manifest or package.json will be used as title.

### `shortName`

If there is no `shortName` in `respecConfig` then `name` property from manifest or package.json will be used as `shortName`.

### `--theme-color`

The main theme color can be set using `--theme-color` CSS variable.

```CSS "example": "set theme color"
:root {
    --theme-color: red;
}
```

### `--accent-color`

The accent color can be set using `--accent-color` CSS variable.

```CSS "example": "set accent color"
:root {
    --accent-color: green;
}
```

### version

If there is a `version` property in manifest or package.json then it will be displayed under the subtitle.

### bugs

If there is a `bugs` property in manifest or package.json then it will be set with label *Issues* in the `otherLinks` configuration property.

### repository

If there is a `repisotroy.url` property in manifest or package.json then it will be set with label *Repository* in the `otherLinks` configuration property.

### data-format

You can use `nunjucks`, `handlebars` or `mustache` in `data-format` property (with data-include) for template processing external markdown files. Don't forget to provide script tag for selected template engine.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/respec-themeable/respec-themeable.github.io/blob/main/LICENSE) for details.
