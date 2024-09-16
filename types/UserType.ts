export interface UserI {
  username: String
  lastname: String
  birth_day: Date
  registration_date: Date
  credentials: authUserI,
  categories: String[]
}

export interface authUserI {
  email: String
  password: String
} 
