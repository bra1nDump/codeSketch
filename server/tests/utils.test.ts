import {execute, completionsAt} from '../src/utils'
import {describe, it} from 'mocha'
import {expect} from 'chai'

describe('execute', () => {
    it('should execute a hello world program',
        async () => expect(await execute("console.log('hello world')") === 'hello world'))

    it('language service picks up changes to the program correctly',
        async () => expect(await execute("console.log('hello petux')") === 'hello petux'))
})

describe('completionsAt', () => {
    it('checks that log appears as one of the completions ',
        () => expect(completionsAt('console.', 9).some(({name}) => name === 'log')))

    it('checks that locally declared constant appears in the completions',
        () => expect(completionsAt('const foo = 0; ', 15).some(({name}) => name === 'foo')))
})
