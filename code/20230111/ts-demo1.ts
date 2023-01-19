class Parent {
  private static ins: Parent
  static getInstance() {
    console.log('this', this)
    if(!this.ins) {
      this.ins = new Parent()
    }
    return this.ins
  }
}

Parent.getInstance()
