import React from 'react';
import { Provider } from 'mobx-react';
import { setupRootStore } from './mst/setup';
import { Employer } from './components/Employer';
import './App.css';

interface Props {}

interface State {
  rootTree: any
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      rootTree: null
    }
  }

  componentDidMount = () => {
    const { rootTree } = setupRootStore();
    this.setState({rootTree})
  }

  render() {
    const {rootTree} = this.state;
    if (!this.state.rootTree) return null
    return (
      <Provider rootTree={rootTree}>
        <Employer />
      </Provider>
    );
  }
}

export default App;
