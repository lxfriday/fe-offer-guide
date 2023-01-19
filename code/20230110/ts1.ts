enum Sex {
  male = 'male',
  female = 'female',
}

type info = {
  name: string
  age: number
  sex: Sex
}

class People {
  name: string
  age: number
  sex: Sex
  constructor(name: string, age: number, sex: Sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
}

const xiaoming: info = {
  name: 'xiaoming',
  age: 100,
  sex: 'male',
}
