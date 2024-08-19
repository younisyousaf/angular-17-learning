# LifeCycle Events:

A component's lifecycle is the sequence of steps that happen between the component's creation and its destruction.

- Constructor
- ngOnInit
- ngDoCheck
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngOnDestroy
- ngChanges

## Constructor

- We use it for initialization of Variables in a Component.

## OnInit

- Called when the component is initialized
- Called automatically after the component is loaded.
- Normally it is used for setup tasks like fetching data from an API.

## DoCheck

- Called when the component is checked/ change is detected.

## AfterContentInit

- Called when angular projects external content into Component's view.

## AfterContentChecked

- Called when angular checks the content projected into Component's view.

## AfterViewInit

- Called after angular initializes the component's view, child's view, or the view that contains the directive.

## AfterViewChecked

- Called after angular checks the component's view, child's view, or the view that contains the directive.

## OnDestroy

- Cleanup just before angular destroys the component, Unsubscribe Observables & detach event handlers to avoid memory leaks.

## OnChanges

- Called when any data-bound property of a directive changes.
- It is called after ngOnInit and ngDoCheck and is used in the reuseable components
