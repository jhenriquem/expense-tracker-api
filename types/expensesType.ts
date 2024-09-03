export interface basisUserExpensesI {
  _id: String
  expenses: expensesI[]
}

export interface expensesI {
  title: String
  description: String
  category: String
  value: Number
  date: Date
}
