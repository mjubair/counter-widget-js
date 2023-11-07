var Counter = (function () {
  'use strict';

  class Counter {
    defaults = {
      root: document.body,
      value: 0,
      min: -Infinity,
      max: Infinity,
      step: 1,
      allowReset: true,
      onChange: () => {},
      onIncrement: () => {},
      onDecrement: () => {},
      onReset: () => {},
    };

    constructor(root, options) {
      this.root = root || this.defaults.root;
      this.options = Object.assign(this.defaults, options);

      this.createHTML();
      this.bindEvents();
      this.render();
    }

    createHTML() {
      Object.entries(this.options.data).forEach(([key, value]) => {
        this.root.dataset[key] = value;
      });

      // Create the counter element
      this.counterElement = document.createElement('div');
      this.counterElement.classList.add('counter');

      // create the counter value element
      this.counterValue = document.createElement('span');
      this.counterValue.classList.add('counter__value');

      
      

      // Create increment and decrement buttons
      this.incrementButton = document.createElement('button');
      this.incrementButton.textContent = '+';
      this.decrementButton = document.createElement('button');
      this.decrementButton.textContent = '-';

      // Append elements to the counter element
      this.counterElement.appendChild(this.decrementButton);
      this.counterElement.appendChild(this.counterValue);
      this.counterElement.appendChild(this.incrementButton);

      // Append the counter element to the provided container element
      this.root.appendChild(this.counterElement);

      if(this.options.allowReset) {
        // Create reset button
        this.resetContainer = document.createElement('div');
        this.resetContainer.classList.add('counter__reset-container');
        this.resetButton = document.createElement('button');
        this.resetButton.textContent = 'Reset';
        this.resetButton.classList.add('counter__reset');
        this.resetContainer.appendChild(this.resetButton);

        this.root.appendChild(this.resetContainer);

      }
    }

    bindEvents() {
      this.incrementButton.addEventListener(
        'click',
        this.handleIncrement.bind(this)
      );
      this.decrementButton.addEventListener(
        'click',
        this.handleDecrement.bind(this)
      );
      this.options.allowReset && this.resetButton.addEventListener('click', this.handleReset.bind(this));
    }

    handleIncrement() {
      if (this.options.value < this.options.max) {
        this.options.value += this.options.step;
        this.render();
        this.options.onIncrement(this.options.value, this.root);
        this.options.onChange(this.options.value, this.root);
      }
    }

    handleDecrement() {
      if (this.options.value > this.options.min) {
        this.options.value -= this.options.step;
        this.render();
        this.options.onDecrement(this.options.value, this.root);
        this.options.onChange(this.options.value, this.root);
      }
    }

    handleReset() {
      this.options.value = 0;
      this.render();
      this.options.onChange(this.options.value, this.root);
      this.options.onReset(this.root);
    }

    render() {
      this.counterValue.textContent = this.options.value;
    }
  }

  return Counter;

})();
