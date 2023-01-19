interface IPay {
  pay(id: string, cost: number): void
}

interface IPayFactory {
  create(): IPay
}

class AliPay implements IPay {
  pay(id: string, cost: number): void {}
}
class WechatPay implements IPay {
  pay(id: string, cost: number): void {}
}
class UnionPay implements IPay {
  pay(id: string, cost: number): void {}
}

class AliPayFactory implements IPayFactory {
  create(): IPay {
    return new AliPay()
  }
}
class WechatFactory implements IPayFactory {
  create(): IPay {
    return new WechatPay()
  }
}
class UnionPayFactory implements IPayFactory {
  create(): IPay {
    return new UnionPay()
  }
}
const alipay = new AliPayFactory().create()
alipay.pay('20230112001', 1000)