export function getArchitects(){
    const architects = Array.from(document.querySelectorAll("a"));
    const nonArchitects = Array.from(document.querySelectorAll("span"));
    return [ architects,nonArchitects]
}

export function getClassical(){
    const classicals=  Array.from(document.querySelectorAll("a.classical"));
    const nonClassicals =  Array.from(document.querySelectorAll("a:not(.classical)"));
    return [classicals,nonClassicals]
}

export function getActive(){
    const active = Array.from(document.querySelectorAll("a.classical.active"));
    const nonActive = Array.from(document.querySelectorAll("a.classical:not(.active)"));

    return [active, nonActive]
        

}

export function getBonannoPisano(){
    const pisanno =  document.getElementById("BonannoPisano");
    const activeArchitects = Array.from(document.querySelectorAll("a.classical.active")).filter(architects => architects.id !== "BonannoPisano")

    return [pisanno,activeArchitects]
}
