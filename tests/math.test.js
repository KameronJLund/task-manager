const { calcTip, add, celsiusToFahrenheit, fahrenheitToCelsius } = require('../src/math')

test('should calc total with tip', () => {
    const total = calcTip(10, .3)
    expect(total).toBe(13)
    // if (total !== 13) throw new Error('calcTIp should return 13 \ninstead returned: ' + total)
})

test('should calc total with no tip provided', () => {
    const total = calcTip(10)
    expect(total).toBe(12)
    // if (total !== 13) throw new Error('calcTIp should return 13 \ninstead returned: ' + total)
})

test('should convert 32f to 0c', () => {
    const convertedTemp = fahrenheitToCelsius(32)
    expect(convertedTemp).toBe(0)
})

test('should convert 0c to 32f', () => {
    const convertedTemp = celsiusToFahrenheit(0)
    expect(convertedTemp).toBe(32)
})

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('should add two numbers', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('should add two numbers async/await', async () => {
    const sum = await add(10, 2)
    expect(sum).toBe(12)
})