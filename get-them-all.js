export function getArchitects(){
    const architects = Array.from(document.querySelectorAll("a"));
    const nonArchitects = Array.from(document.querySelectorAll("span"));
    return [ architects,nonArchitects]
}

export function getClassical(){
    const classicals=  document.querySelectorAll("a.classical");
    const nonClassicals =  document.querySelectorAll("a:not(.classical)");
    return {
        classicals,
        nonClassicals}
}

export function getActive(){
    const active = document.querySelectorAll("a.classical.active");
    const nonActive = document.querySelectorAll("a.classical:not(.active)");

    return {
        active,
        nonActive};

}

export function getBonannoPisano(){
    return   document.querySelector("#BonannoPisano");
}
