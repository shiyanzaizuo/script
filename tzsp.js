var body = $response.body; // 声明一个变量body并以响应消息体赋值

body=body.replace(/vipValidDate\":\D\D\D\D/g, 'vipValidDate":21612108800000');
body=body.replace(/Type\":\d+/g,'Type":1');

$done(body);
