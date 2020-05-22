function kotki(array) {
    class Cats{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }
    } 
    
    for (let index = 0; index < array.length; index++) {
        let catsInfo = array[index].split(' ');
        let [name, age] = [catsInfo[0], catsInfo[1]];
        let cat = new Cats(name, age);
        cat.meow();
    }
}
kotki(['Mellow 2', 'Tom 5'])