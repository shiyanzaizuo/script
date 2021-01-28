var body = $response.body; // 声明一个变量body并以响应消息体赋值

body=body.replace(\/code\":\"1010\/g, 'code":"0000');

$done(body);
