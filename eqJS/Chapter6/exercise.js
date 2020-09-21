
// Exercise(2)  GROUPS

// class Group{
//     constructor(group) {
//         this.group = [];
//     }
//     add(value) {   
//         let count = 0;
//         for(let items of this.group){
//             if(items === value) {
//                 count++
//             }
//         }
//         if (count == 0) {
//             this.group.push(value);
//         }
//     }
//     delete(value) {
//         for (let items of this.group){
//             if(items == value) {
//                 this.group.unshift(value);
//             }
//         }
//     }
//     has(value) {
//         for (let items of this.group) {
//             if(items == value){
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
//     static fromAdd(value){
//         // let newValue = value[Symbol.iterator]();
//         // return [...newValue];
//         let iterable = {}
//         iterable[Symbol.iterator] = function* () {
//             yield value;
//         }
//         return [...iterable]
//     }
// }

// let newGroup = new Group;
// newGroup.add(5);
// newGroup.add('5');
// newGroup.add(6);
// newGroup.add(6);
// newGroup.add(7);
// newGroup.add(8);
// newGroup.add('name1');
// newGroup.add('name2');
// newGroup.has('name3');

// let aGroup = Group.fromAdd;
// console.log(aGroup({a:"name",b: 'crazy'}));

// console.log(newGroup);




//  Exercise(4): BORROWING A METHOD

let anObject = {
    a: 1,
    b: 2,
    c: 3,
    hasOwnProperty: "kenny"
}

const hasOwnProperty = Symbol('hasOwnProperty');
Object.prototype[hasOwnProperty] = function(){
    return Object.hasOwnProperty();
};

console.log(anObject[hasOwnProperty]('a'));


