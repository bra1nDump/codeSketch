import {execute, completionsAt} from '../src/utils'
import {describe, it} from 'mocha'
import {assert} from 'chai'

// silence logging
console.log = () => {}

describe('execute', () => {
    it('should execute a hello world program',
        async () => 
            assert(
                await execute("console.log('hello world')") 
                === 'hello world\n')
    )

    it('should execute a hello petux program',
        async () => 
            assert(
                await execute("console.log('hello petux')") 
                === 'hello petux\n')
    )
})

describe('completionsAt', () => {
    it('autocomplete on object fields works',
        () => {
            let source = `
                export {}
                let obj = {
                    xyz: 10,
                    lmn: 13
                };
                obj.lm`
            assert(completionsAt(source, source.length).some(({name}) => name === 'lmn'))
        }
    )

    // TODO: broken - need to somehow pull dom library code into the client side?
    // technically i am already using it, but the compiler host that is run on the client
    // is obviously separate from the compiler host that compiles the client ... sheeet
    it(`completions of 'console.' should include 'log' method`, () => {
        let source = 'console.'
        let completions = completionsAt(source, source.length)
        assert(completions.some(({name}) => name === 'log'))
    })

    it(`completions of "const lol = 'lol'" should include 'lol'`, () => {
        let source = `const lol = 'lol'`
        let completions = completionsAt(source, source.length)
        assert(completions.some(({name}) => name === 'lol'))
    })
})
