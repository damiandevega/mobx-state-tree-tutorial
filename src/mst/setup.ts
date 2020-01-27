import { RootModel } from '.';
import { onSnapshot } from 'mobx-state-tree';

export const setupRootStore = () => {
  const rootTree = RootModel.create({
    employer: {
      id: "1",
      name: 'Damian',
      location: 'New York, NY',
      employees: []
    }
  })
  onSnapshot(rootTree, (snapshot) => console.log('snapshot: ', snapshot));
  return { rootTree }
}