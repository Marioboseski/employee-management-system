export type Employee = {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  position: string,
  startDate: string,
  salary: number,
  status: string
  department: {
    name: string,
  }
}

export type EmployeeProps = {
  employee: Employee
}