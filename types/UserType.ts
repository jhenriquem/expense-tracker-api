export interface UserI {
  _id: String
  username: String
  lastname: String
  birth_day: Date
  registration_date: Date
  credentials: authUserI
}

export interface authUserI {
  email: String
  password: String
} 
