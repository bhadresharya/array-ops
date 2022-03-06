const a = [1, 2, 3];
console.log(a)

a.push(4)
console.log(a)

a.unshift(0)
console.log(a)

a.pop()
console.log(a)

a.shift()
console.log(a)

console.log(Array.isArray(a))

const b = a.slice()
console.log(b)

console.log(a.length)

const c = [...b]
console.log(c)

const [i, ii,...rest] = [1,2,3,4,5,6]
console.log(i, ii, rest)

const d = [...a,...b,...c]
console.log(d)

console.log(d.join('/'))

const e = a.concat(d)
console.log(e)

console.log(a.includes(2))
console.log(a.includes(4))

console.log(a.indexOf(2))
console.log(a.indexOf(4))

console.log(a.reverse())

const f = [23, 5, 100, 56, 9, 13, 37, 10, 1]
console.log(f.sort())