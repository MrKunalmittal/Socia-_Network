class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email){
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;

    }
    set id(id){
        return this.#id = id;
    }
    get id(){
        return this.#id;
    }

    set name(name){
        return this.#name = name;
    }
    get name(){
        return this.#name;
    }

    set userName(userName){
        return this.#userName = userName;
    }
    get userName(){
        return this.#userName;
    }

    set email(email){
        return this.#email = email;
    }
    get email(){
        return this.#email;
    }
    getInfo() {
        return `ID: ${this.#id}</br> Name: ${this.name}</br> Username: ${this.#userName}</br> Email: ${this.#email}`;
    }
}

class Subscriber extends User{
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize = true){
        super(id, name, userName, email)
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }
    get pages(){
        return this.#pages;
    }
    get groups(){
        return this.#groups;
    }
    get canMonetize(){
        return this.#canMonetize;
    }
    getInfo() {
        return `${super.getInfo()}</br> Pages: ${this.pages}</br> Groups: ${this.groups}</br> CanMonetize: ${this.canMonetize}`;
    }
}


export { User };
export { Subscriber};