# Quick Start

Get started by including counter CSS and JavaScript via CDN without the need for any build steps.

#### 1. Create a new index.html file and paste the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

#### 2. Include the counter CSS and JavaScript via CDN:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/mjubair/counter-widget-js@v0.0.6/src/counter.css"
    />
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/gh/mjubair/counter-widget-js@v0.0.6/src/lib/Counter.js"></script>
  </body>
</html>
```

### CDN Links

| Description | URL                                                                             |
| ----------- | ------------------------------------------------------------------------------- |
| css         | https://cdn.jsdelivr.net/gh/mjubair/counter-widget-js@v0.0.6/src/counter.css    |
| js          | https://cdn.jsdelivr.net/gh/mjubair/counter-widget-js@v0.0.6/src/lib/Counter.js |

#### 3. Add a container div with an id of counter:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/mjubair/counter-widget-js@v0.0.6/src/counter.css"
    />
  </head>
  <body>
    <div id="counter"></div>

    <script src="https://cdn.jsdelivr.net/gh/mjubair/counter-widget-js@v0.0.6/src/lib/Counter.js"></script>
  </body>
</html>
```

#### 4. Initialize the counter on DOMContentLoaded event:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/mjubair/counter-widget-js@v0.0.6/src/counter.css"
    />
  </head>
  <body>
    <div id="counter-container"></div>

    <script src="https://cdn.jsdelivr.net/gh/mjubair/counter-widget-js@v0.0.6/src/lib/Counter.js"></script>
    <script>
      window.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('#counter-container');
        // pass data to the constructor

        const counter = new Counter(container, {
          initialValue: 0,
          min: 0,
          max: 10,
          step: 1,
          data: {
            id: 1,
            name: 'hello',
          },
          onChange: (value, el) => {
            console.log('onChange', value);
          },
          onIncrease: (value, el) => {
            console.log('onIncrease', value);
          },
          onDecrease: (value, el) => {
            console.log('onDecrease', value);
          },
          onReset: (el) => {
            console.log('onReset', value);
          },
        });
      });
    </script>
  </body>
</html>
```

### Available Options

| Option       | Type     | Default | Description |
|--------------|----------|---------|-------------|
| initialValue | Number   | 0       |             |
| min          | Number   | 0       |             |
| max          | Number   | 10      |             |
| step         | Number   | 1       |             |
| data         | Object   | {}      |             |
| allowReset   | Boolean  | true    |             |
| onChange     | Function |         |             |
| onIncrement  | Function |         |             |
| onDecrement  | Function |         |             |
| onReset      | Function |         |             |


