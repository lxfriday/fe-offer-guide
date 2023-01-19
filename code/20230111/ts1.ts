interface Func {
  (name: string): string
}

const func = function<T> (arg: T): T {
  return arg
}

func(1)
