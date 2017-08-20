function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

async function app() {
  console.log(1)
  await wait(1000)
  console.log(2)
  await wait(1000)
  console.log(3)
}

app()