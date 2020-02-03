import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Root } from '../mst';

interface EmployerProps {
  rootTree?: Root
}

interface EmployerState {}

@inject('rootTree')
@observer
class Employer extends React.Component<EmployerProps, EmployerState> {
  constructor(props: EmployerProps) {
    super(props);
    this.state = {}
  }

  render() {
    const { rootTree } = this.props;

    if (!rootTree) return null;
    return (
      <div>
        <h1>{rootTree.employer.name}</h1>
        <h3>{rootTree.employer.location}</h3>
        <hr />
      </div>
    )
  }
}

export { Employer };