# cursor无限续杯流程

## 前期准备
1. 【下载cursor】：[Cursor - The AI Code Editor](https://www.cursor.com/cn)如果没有装在默认路径，后续要在YCursor里面自定义
2. 【下载chrome浏览器】[Google Chrome 网络浏览器](https://www.google.cn/intl/zh-CN/chrome/)（我也装在默认路径了，YCursor里面也可以指定路径）
3. 【下载YCursor】Q群752439445群文件下载**YCursor，YCursor，YCursor**。（Yan_cursor也可以，但是界面比较简陋，也不能改cursor路径，不推荐）
4. 有无法打开或者打开了却卡住的情况，请尝试关闭/打开梯子

## 具体配置流程
1. 【买域名】我是腾讯云买的一块钱一年[域名特惠活动_域名购买_域名选购- 腾讯云](https://cloud.tencent.com/act/pro/domain-sales?fromSource=gwzcw.8675724.8675724.8675724&utm_medium=cpc&utm_id=gwzcw.8675724.8675724.8675724&bd_vid=10648987441547073481&page=domain-sale)，按照它买域名的流程走就行，中间审核需要等一会
2. 【托管到cloudflare】
	按照这个教程操作[【教程】小白也能看懂的自建Cloudflare临时邮箱教程（域名邮箱） - 文档共建 - LINUX DO](https://linux.do/t/topic/316819)从【第一步，将域名交给Cloudflare托管】一直看到【如果你不需要搭临时邮箱服务，只需要自己的域名邮箱】前面一张图片
3. 【添加接码临时邮箱】
	- 【需要挂梯子人机验证】到[一次性临时电子邮件 - TempMail.Plus](https://tempmail.plus/zh/#!)，随机生成一个邮箱名称，设置-邮箱时效（7天），设置PIN码-保存
	- 回到cloudflare的域名概述（这里要关掉梯子）。左侧栏电子邮件-电子邮件路由-路由规则-Catchall地址（要活动状态）-编辑-发送到电子邮件-目标位置填写临时邮箱地址
4. 【YCursor设置】
	- 左侧点设置
	- 域名填买的那个域名
	- 收件邮箱类型-临时邮箱
	- 邮箱地址就是随机生成那个邮箱
	- 还要填上你设置的PIN码
	- 下面还有浏览器设置，我是默认路径装的chrome，不需要设置了

## 使用YCursor重置cursor
**YCursor左侧-功能-【自动注册】，坐等重新注册**
- 有时候可能需要【重置机器码】？？没用过

- 【cursor免费额度用完了】和【临时邮箱到期了】是两码事
- 【cursor免费额度用完了】到YCursor里面点功能-自动注册
- 【临时邮箱到期了】要到临时邮箱网站再生成一个，把之前填过临时邮箱的地方全部改成新的
