var AliPay = /** @class */ (function () {
    function AliPay() {
    }
    AliPay.prototype.pay = function (id, cost) { };
    return AliPay;
}());
var WechatPay = /** @class */ (function () {
    function WechatPay() {
    }
    WechatPay.prototype.pay = function (id, cost) { };
    return WechatPay;
}());
var UnionPay = /** @class */ (function () {
    function UnionPay() {
    }
    UnionPay.prototype.pay = function (id, cost) { };
    return UnionPay;
}());
var AliPayFactory = /** @class */ (function () {
    function AliPayFactory() {
    }
    AliPayFactory.prototype.create = function () {
        return new AliPay();
    };
    return AliPayFactory;
}());
var WechatFactory = /** @class */ (function () {
    function WechatFactory() {
    }
    WechatFactory.prototype.create = function () {
        return new WechatPay();
    };
    return WechatFactory;
}());
var UnionPayFactory = /** @class */ (function () {
    function UnionPayFactory() {
    }
    UnionPayFactory.prototype.create = function () {
        return new UnionPay();
    };
    return UnionPayFactory;
}());
var alipay = new AliPayFactory().create();
alipay.pay('20230112001', 1000);
