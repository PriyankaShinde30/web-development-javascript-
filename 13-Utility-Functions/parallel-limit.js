async function parallelLimit(tasks, limit){
    const results = [];
    let index = 0;
    
    async function worker(){
        while(index < tasks.length) {
            const currentIndex = index++;
            results[currentIndex] = await tasks[currentIndex]();
        }
    }

    const workers = [];
    for(let i = 0; i < limit; i++){
        workers.push(worker());
    }
    await Promise.all(workers);

    return results;
}

const tasks = [
    () => new Promise(r => setTimeout(() => r("Tasks 1 done"), 1000)),
    () => new Promise(r => setTimeout(() => r("Tasks 2 done"), 1000)),
    () => new Promise(r => setTimeout(() => r("Tasks 3 done"), 1000)),
    () => new Promise(r => setTimeout(() => r("Tasks 4 done"), 1000)),
];

parallelLimit(tasks, 2).then(console.log);
