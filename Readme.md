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

> 因为我不是考古派，我们也不讨论 Promise 的历史了。