# 异步

### 那些年我们都沉浸在 Callback Hell 的恐惧中

> 如果你手贱，你还能找到一个叫 [回调地狱](http://callbackhell.com/) 的网站

```
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```

我一直觉得`回调地狱`除了整个逻辑不太清晰以外，最大的问题是：我TM不知道是不是有地方少了一个大括号！！！

### 然后 Promise 出现了

> 因为我不是考古派，我们也不讨论 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的历史了。

### NodeJS 的 Stream

> Steam 是 NodeJS 和核心编程模型，James Halliday 写过一本指南 [stream-handbook](https://github.com/substack/stream-handbook)