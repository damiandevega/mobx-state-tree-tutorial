import { types, Instance } from 'mobx-state-tree';

const EmployeeModel = types.model("employee", {
  id: types.identifier,
  name: types.string,
  hours_worked: types.number
})

const EmployerModel = types.model("employer", {
  id: types.identifier,
  name: types.string,
  location: types.string,
  employees: types.array(EmployeeModel)
})

const RootModel = types.model("root", {
  employer: EmployerModel
})

export { RootModel }

export type Root = Instance<typeof RootModel>
export type employer = Instance<typeof EmployerModel>
export type employee = Instance<typeof EmployeeModel>