var name = '123'

const obj = {
  name: '456',
  print() {
    function a() {
      console.log(this)
    }
    a()
  }
}
obj.print()