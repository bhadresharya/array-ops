const a = [1,2,3];
console.log('a =', a)

a.push(4)
console.log('push() – Insert an element at the end of the array.')
console.log('a =', a)

a.unshift(0)
console.log('unshift() – Insert an element at the beginning of the array.')
console.log('a =', a)

a.pop()
console.log('pop() – Remove an element from the end of the array.')
console.log('a =', a)

a.shift()
console.log('shift() – Remove an element from the beginning of the array.')
console.log('a =', a)

const b = a.slice()
console.log('slice() – Create a shallow copy of an array.')
console.log('b =', b)

const l = a.length
console.log('length – Determine the size of an array.')
console.log('l =', l)