![](https://i.loli.net/2019/10/24/chSmDZ845grWkdo.png)

> debug dream in 1024

`dd1024` 是一个查看[车牌号](https://zh.moegirl.org/zh-hans/车牌号)的小工具, 现在使用很简单, 安装之后, 第二个参数传递车牌号就可以上车了

![https://i.loli.net/2019/10/24/CKQqhdDjEyHfp8V.gif](https://i.loli.net/2019/10/24/CKQqhdDjEyHfp8V.gif)

### depend

`dd1024` 现在是使用`nodejs`来编写的[CLI](https://zh.wikipedia.org/zh-hans/命令行界面)

使用[`mpv`](https://mpv.io/)来作为后端播放视频资源, 你需要安装`mpv`才能使用它

```console

# mac
brew install mpv

# debian
sudo apt install mpv

# win
choco install mpv


```

### install

现在并没有上传到 [`npmjs.com`](https://npmjs.com), 所以你需要使用本地安装的方式

```console

git clone https://github.com/Programming-With-Love/dd1024.git
cd dd1024
sudo cnpm i -g .

```

### devloper

Yo. I Still don't know how to write🧐

### FAQ

> 问: 我怎么找到车牌号

咳咳咳, 找车牌很简单啊, 什么 `javbus` 之类的啊

![d6ca7bcb0a46f21fd7b3a599fb246b600d33ae71.gif](https://i.loli.net/2019/10/24/iGY1xBdURSrjwon.gif)

> 问: 怎么用

安装之后, `dd1024 车牌号` 这样, 就可以了

> 问: 为什么我没有播放

检查一下你是否安装了`mpv`

```console

mpv --version

```

还有就是, 现在默认的站点是国内的, 比较慢, 用这个站点是为了照顾过不了代理的小伙伴


### TODO

- 播放车牌号
- 查看车牌号信息
- 下载车牌号
- 随机看靓车🤙

请去 `issues` 里去提需求😄