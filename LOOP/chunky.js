function chunk(array, length) {
    const slice = [];
        for (let i = 0; i < array.length; i += length) {
            let part = array.slice(i, i + length);
            slice.push(part);
        }
        return slice;
    }