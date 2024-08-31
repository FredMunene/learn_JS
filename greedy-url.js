
function getURL(str) {
    let regex = /(https?:\/\/[\w\/\S]+)/g;
    let x = str.match(regex);
    let y = [];
    y = x;
    return y;
}


function greedyQuery(data) {
    const regex = /https?:\/\/[^\s?]+(\?\S+)?/g;
    return (data.match(regex) || []).filter((url) => {
        const que = url.split(/[&?]/).length - 1;
        return que >= 3;
    });
}

function notSoGreedy(data) {
    const regex = /https?:\/\/[^\s?]+(\?\S+)?/g;
    return (data.match(regex) || []).filter((url) => {
        const que = url.split(/[&?]/).length - 1;
        return que >= 2 && que < 4;
    });
}
