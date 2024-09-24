import { question } from 'readline-sync';


class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class LinkedList{

    head = null;
    curr = null;
    

    static main(){
        let choice;      
        const list = new LinkedList();

        while(true){
            
            choice = Number(question("\nWhich operation to perform: \n1.Insertion\n2.Deletion\n3.Display\n4.Exit\n"))
            
            switch(choice){
                case 1:
                    let value = question("Enter the value to insert:\n");
                    list.insertion(value);
                    break;
                
                case 2:
                    list.deletion();
                    break;
                    
                case 3:
                    list.traversal();
                    break;

                case 4:
                    process.exit(0);

                default:
                    console.log("invalid input");
            }
        
        }
    }
    
    insertion(value){
        if(this.head === null){
            const obj = new Node(value);
            this.head = obj;
            this.curr = this.head;
            console.log("Inserted new element")
        }
        else{
            this.curr.next = new Node(value);
            this.curr = this.curr.next;
            console.log("Inserted new element")

        }
    }

    deletion(value){
        if(this.head === null){
            console.log("\nLinked List is empty");
        }
        else if(this.head.next === null){
            this.head = null;
            this.curr=null;
            console.log("Deleted last element")
        }
        else{
            let temp = this.head;
            while(temp.next.next !== null){
                temp = temp.next
            }
            temp.next = null;
            this.curr = temp;
            console.log("Deleted last element")
        }
    }

    traversal(){
        if(this.head === null){
            console.log("\nLinked List is empty");
        }
        else{
            let temp = this.head
            console.log("###DISPLAYING###")
            console.log(temp.data)
            while(temp.next !== null){
                temp = temp.next
                console.log(temp.data)
            }
        
        }
    }
}

LinkedList.main();