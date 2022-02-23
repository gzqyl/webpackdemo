# webpackdemo
## examples for webpack and react and vue usages
### 有些项目不方便开源，这里临时写了几个DEMO，虽然Vue操作无问题，但个人偏向于React，主要是React可以近乎完美过渡到React Native，两者很多设计思想都一样，对于新项目可能优先React，对于旧项目，Vue当然没问题的
### 特色，使用了React Native近 2年时间，用其开发出多个APP，同时掌握了IOS与Android原生编程，当然，Android操作比较少，IOS相对多一点，大部分Native功能有已经开源的React Native模块可以直接拿来使用，轻松应对移动端应用
### React无论对于Server Side 或 Static Client Side，甚至可供其他项目使用的通用组件库，都有其解决方案，Vue应该也有，不过个人更偏爱React
### 关于前端加密：可以采用AES+RSA +JWT的方式进行，客户端生成一个密钥，在用户登录的时候，服务器生成一个密钥对，以JWT的方式返回公钥给客户端，客户端用RSA加密AES的密钥，数据采用AES加密，一起发送给服务器，服务器解密密钥，然后解密数据。JWT的好处在于，对于每一个请求都能控制其有效性，给予标识，比如订单号，这样即使有一笔交易被破解，其他交易因为每笔交易生成的AES密钥并不相同，不能被破解，相对来说比较简单和安全！当然也有其他更复杂的实现方式！