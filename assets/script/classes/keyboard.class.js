class Keyboard{

    w = false;
    a = false;
    d = false;
    
    
    constructor(){
        document.addEventListener('keydown', (event) => {
            if (event.key === 'w')
                this.w = true;
            if (event.key === 'a')
                this.a = true;
            if (event.key === 'd')
                this.d = true;

        })
        document.addEventListener('keyup', (event) => {
            if (event.key === 'w')
                this.w = false;
            if (event.key === 'a')
                this.a = false;
            if (event.key === 'd')
                this.d = false;
        })
    }
}