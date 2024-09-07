// build a 3-column brick tower, maintain it and finally break it.

let brickCount = 0;
export function build(num){
    const body = document.querySelector('body');
    const createBrick = () => {

        if (brickCount < num) {
            // each brick as a div
            const brick = document.createElement('div');
            
            
            // added to page at a regular interval of 100ms

            // evey brick : unique id : brick-1
            brick.id = `brick-${brickCount + 1}`;

            // each brick in middle column , 
            
            // with custom data attribute foundation, receiving value true
             if ((brickCount% 3) === 1){
                brick.setAttribute('data-foundation','true');
            }
            
            body.append(brick);
            brickCount++
        } else{
           clearInterval(timer)
        }
    

    }
    // repeated calls a function after a fixed time delay
   const timer = setInterval(createBrick,100)
}

export function repair(...ids){
    // triggered to retrieve any number of HTML element of id, 
    
     // sets repaired customattribute to 'in progress' if brick is in middle column and true if not
    ids.forEach(id => {
        const brick = document.getElementById(id);

        if (brick) {
            const foundation = brick.getAttribute('data-foundation');

            if (foundation === 'true') {
                brick.setAttribute('data-repaired','in progress');
            } else {
                brick.setAttribute('data-repaired','true');
            }
        } else {
            console.warn(`Element with ID ${id} not found`);
        }
    });
}
export function destroy(){
    const body = document.querySelector('body');
    // removes current last brick in the tower 

    // get the last id of the element
    const brick = Array.from(document.querySelectorAll('div'));

    if (brick.length > 0){
        const lastBrick = brick[brick.length-1];
        lastBrick.remove();

    } else {
        console.warn('No bricks to remove.');
    }   
}