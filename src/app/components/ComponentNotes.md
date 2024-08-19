# Components:

- Components are the main building blocks of an Angular App.
- The Root Component contains a tree of Angular Components.
- It is a subset of directives and always associated with a template.

A Component in Angular is a TypeScript class that can contain methods and properties. This allows developers to create and bind their own functionality to the user interface.

## Creating Angular Component using Angular CLI:

We can create Angular Component using Angular CLI by following command:

```bash
ng g c <componentName>
OR
ng generate component <componentName>
```

## Generate Demo Component

To generate a demo component, you can run the following command:

```bash
ng generate component demo / ng g c demo
```

## Files Generated After this Command Executes:

- `componentName.component.ts` : This is the main class file of the component.
- `componentName.component.html` : This is the template file for the component.
- `componentName.component.css` : This is the CSS file for the component.
- `componentName.component.spec.ts` : This is the unit test file for the component.

### Example:

```js
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
```

If we want to use a template in our component, we can use the `template` property in the component. We can also use the `templateUrl` property to specify the path of the template file. Similarly, we can use `styleUrls` property to specify the path of the CSS file.

```js
@Component({
  selector: 'app-my-component',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  `,
  styles: [`
    div {
      padding: 20px;
      background-color: #f8f9fa;
    }
    h1 {
      color: #007bff;
    }
    p {
      color: #6c757d;
    }
  `]
})
```
