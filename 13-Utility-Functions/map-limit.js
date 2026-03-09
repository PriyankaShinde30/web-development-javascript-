async function mapLimit(items, limit, asyncFn) {
  const results = [];
  const executing = [];

  for (let item of items) {
    const promise = Promise.resolve().then(() => asyncFn(item));

    results.push(promise);

    if (limit <= items.length) {
      const e = promise.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);

      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(results);
}

const tasks = [1,2,3,4,5];

async function asyncTasks(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Processing", num);
            resolve(num * 2);
        }, 3000);
    });
}

mapLimit(tasks, 1, asyncTasks).then(console.log);