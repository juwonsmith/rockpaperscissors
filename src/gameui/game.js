import './styles/gameui.css'

class change{
    constructor(){
        this.para = document.querySelector('.para')
        this.button = document.querySelectorAll('.button');
        this.container = document.querySelector('.container');
        this.score = document.querySelector('.score');
        this.options = document.querySelector('.choice-ed');
        this.comp_options = document.querySelector('.com-ed');
        this.reset = document.querySelector('.danger');
        this.modal = document.querySelector('.modal');
        this.return = document.querySelector('.return');
        this.count = 1;
        this.count2 = 1;
        this.tieCount = 1;
    }
    computerTurn(){
        const options = ['rock', 'paper', 'scissors'];
        const randomPick = options[Math.floor(Math.random() * options.length )];
        return randomPick;
    }
    scoresfunc(){
        this.score.addEventListener('click', () => {
            this.container.classList.add('opac');
            this.modal.classList.add('reverse_opac');
            this.modal.innerHTML = `
            <span>
                the scores are :
                computer: ${this.count -1},
                user: ${this.count2 -1},
                number of ties: ${this.tieCount -1},
                
            </span>
            `
            this.return = document.querySelector('.return');
            this.return.style.display = 'block'; 
            this.return.addEventListener('click', e => {
                this.modal.innerHTML=``;
                this.modal.classList.remove('reverse_opac');
                this.container.classList.remove('opac');
                this.return.style.display = 'none'; 
            })
        });
    }
    resetfunc(){
        this.reset.addEventListener('click', ()=> {
            this.count = 1;
            this.count2 = 1;
            this.tieCount =1;
            this.modal.textContent =`your scores has been reset`;
            this.container.classList.add('opac');
            this.modal.classList.add('reverse_opac');

            setTimeout(() => {
                this.container.classList.remove('opac');
                this.modal.classList.remove('reverse_opac');

            }, 2000);

            if(this.para.textContent.includes('computer')){
                console.log('yee');
                this.para.textContent = `computer wins (0) times`;
            }else{
                this.para.textContent = `you win (0) times`;
            }
        })
    }
    init(){
        this.resetfunc();
        this.scoresfunc();
       
         this.button.forEach( button => {
            button.addEventListener('click', e => {
 
                const yoo = this.computerTurn();
                    if(e.target.id !== yoo){
                        this.options.textContent = ` Your choice: ${e.target.id}`;
                        this.comp_options.textContent = `computer's choice: ${yoo}`;

                        if(e.target.id ==='rock'){
                            if(yoo === 'paper'){
                                this.para.textContent = `computer wins (${this.count++}) times`;
                            }else if(yoo === 'scissors'){
                                this.para.textContent = `you win (${this.count2++}) times`;
                            }
                        }else if(e.target.id === 'scissors'){
                            if(yoo === 'paper'){
                                this.para.textContent = `you win (${this.count2++}) times`;
                            }else if(yoo === 'rock'){
                                this.para.textContent = `computer wins (${this.count++}) times`;
                            }
                        }else if(e.target.id === 'paper'){
                            if(yoo === 'rock'){
                                this.para.textContent = `you win (${this.count2++}) times`;
                            }else if(yoo === 'scissors'){
                                this.para.textContent =`computer wins (${this.count++}) times`;
                            }
                        }
                     }else{
                        this.options.textContent = ` Your choice: ${e.target.id}`;
                        this.comp_options.textContent = `computer's choice: ${yoo}`;
                        this.para.textContent = `a tie, Retry (${this.tieCount++})`;
                     };
            });
        

        });
    }

}

export {change as default};
