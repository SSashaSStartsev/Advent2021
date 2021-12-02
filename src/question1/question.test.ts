import question from './question'
import { expect } from 'chai'
import { getInputNumbers } from '../helpers'

describe('Question 1', () => {
  it('part A main', async () => {
    const input = await getInputNumbers(1, "input")
    expect(await question.partA(input)).to.equal(1754)
  })

  it('part A sample', async () => {
    const input = await getInputNumbers(1, "sample_input")
    expect(await question.partA(input)).to.equal(7)
  })

  it('part B main', async () => {
    const input = await getInputNumbers(1, "input")
    expect(await question.partB(input)).to.equal(1789)
  })

  it('part B sample', async () => {
    const input = await getInputNumbers(1, "sample_input")
    expect(await question.partB(input)).to.equal(5)
  })

})
