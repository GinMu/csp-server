
# 接口定义

## 钱包创建

HTTP请求

GET /v1/wallet/generate

请求参数:

返回参数:

***code: "0"表示正常(以下所有接口返回格式都相同，不再重复描述)***

***msg: 接口返回的状态信息描述，与code对应(以下所有接口返回格式都相同，不再重复描述)***

返回示例:

```json
{
    "code": "0",
    "data": {
        "secret": "ssepXegK1tx72M7m6927seKPKL2WA",
        "address": "j3Mb1SPuS3mG611vkRkDDyrnMpc9Ha1EGV"
    },
    "msg": "钱包创建成功"
}
```

## 转账签名

HTTP请求

POST /v1/payment/sign/:address

请求参数:

参数名|参数类型|是否必须|描述
--|:--:|:--:|:--:
secret|String|是|转出钱包的私钥
to|String|是|接收方钱包的地址
amount|number|是|数量
currency|String|是|token名称
issuer|String|是|发行方
sequence|number|是|挂单序列号
memo|String|否| 转账备注信息，最长512字节

返回示例:

```json
{
    "code": "0",
    "data": {
        "signature": "12000022000000006140000000000F424068400000000000000A732102C13075B18C87A032226CE383AEFD748D7BB719E02CD7F5A8C1F2C7562DE7C12A74473045022100AE81B8B6681205839888F86CA2F2BFA086FA89D97A309ECCDEB7375D1DDB4806022007E0C6F4F672177E2E9971D1AAA8D0B69A2D053DFB721A838FEAB582BE73080081141270C5BE503A3A22B506457C0FEC97633B44F7DD8314A575C644BBE6DA111E4BB01BD3440DFC633AD39AF9EA7C06737472696E677D0431313131E1F1"
    },
    "msg": "签名成功"
}
```
