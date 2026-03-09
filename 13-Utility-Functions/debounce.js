function debounce(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
                fn.apply(this, args);
        }, delay);
    };
}

function search(query){
    console.log("Searching for: ", query);
}

const  debounceSearch = debounce(search, 1000);

debounceSearch("Java");
debounceSearch("Python");
debounceSearch("C++");
debounceSearch("C");
debounceSearch("Node");
debounceSearch("MongoDB");