class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    agregar(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let actual = this.head;
            while (actual.next) {
                actual = actual.next;
            }
            actual.next = newNode;
        }
    }
}

function combinarListas(lista1, lista2) {
    const combinar = new LinkedList();
    let conjunto1 = lista1.head;
    let conjunto2 = lista2.head;

    while (conjunto1 && conjunto2) {
        if (conjunto1.data < conjunto2.data) {
            combinar.agregar(conjunto1.data);
            conjunto1 = conjunto1.next;
        } else {
            combinar.agregar(conjunto2.data);
            conjunto2 = conjunto2.next;
        }
    }

    while (conjunto1) {
        combinar.agregar(conjunto1.data);
        conjunto1 = conjunto1.agregar    }

    while (conjunto2) {
        combinar.agregar(conjunto2.data);
        conjunto2 = conjunto2.next;
    }

    return combinar;
}


const lista1 = new LinkedList();
lista1.agregar(1);
lista1.agregar(3);
lista1.agregar(5);
lista1.agregar(8);

const lista2 = new LinkedList();
lista2.agregar(2);
lista2.agregar(4);
lista2.agregar(6);
lista2.agregar(7);

const combinar = combinarListas(lista1, lista2);
let actual = combinar.head;
while (actual) {
    console.log(actual.data);
    actual = actual.next;
}
