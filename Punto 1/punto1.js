//Jorge Cortes cod 2185745

class Queue{
    constructor(){
        this.items = [];
        this.front = 0;
        this.end = 0;
    };
    
    
    enqueue(data){
        this.items[this.end] = data;
        this.end++;
    }       
    
   
    dequeue(){
        if(this.front === this.end){
            return null;
        };
        
        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return data;
        
    };
    
    
    getSize(){
        return this.end - this.front;
    }
    
   
    isEmpty(){
        if(this.getSize() === 0){
            return true;
        }else{
            return false;
        }
    }

    
    peek(){
        if(this.getSize === 0){
            return null;
        }else{
            return this.items[this.front];
        }
    }

   
    print(){
        if(this.getSize === 0){
            return null;
        };

        let result = '';

        for(let i = this.front; i< this.end; i++){
            result += this.items[i] + " ";
        };

        return result;
    }
};

function invertirQueue(queue) {
    const original = queue.print();
    const cola = [];
    while(!queue.isEmpty()){        
        cola.push(queue.dequeue());
    }
    while(cola.length > 0){
        queue.enqueue(cola.pop());
    }

    console.log("Cadena original: ", original)
    console.log("Cadena invertida: ",queue.print())
   
    return queue;
}

const queue = new Queue();

queue.enqueue(6.8);
queue.enqueue(1.5);
queue.enqueue(2.9);

const invertidaQueue = invertirQueue(queue);

