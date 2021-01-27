# react-bpmn

[![CI](https://github.com/bpmn-io/react-bpmn/workflows/CI/badge.svg)](https://github.com/bpmn-io/react-bpmn/actions?query=workflow%3ACI)

Use [bpmn-js](https://github.com/bpmn-io/bpmn-js) to display BPMN 2.0 diagrams in a [React](https://reactjs.org/) application.


## Usage

```javascript
import ReactBpmn from 'react-bpmn';


function App(props) {

  function onShown() {
    console.log('diagram shown');
  }

  function onLoading() {
    console.log('diagram loading');
  }

  function onError(err) {
    console.log('failed to show diagram');
  }

  return (
    <ReactBpmn
      url="/public/diagram.bpmn"
      onShown={ onShown }
      onLoading={ onLoading }
      onError={ onError }
    />
  );
}
```


## Resources

* [Issues](https://github.com/bpmn-io/react-bpmn/issues)
* [Example](./example)


## License

MIT