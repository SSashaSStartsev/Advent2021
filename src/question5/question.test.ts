import question from './question'
import { expect } from 'chai'
import { getInputNumbers, getInputStrings } from '../helpers'

describe('Question 5', () => {
  it('part A main', async () => {
    const input = await getInputStrings(5, "input")
    expect(await question.partA(input, 999)).to.equal(7142)
  })

  it('part A sample', async () => {
    const input = await getInputStrings(5, "sample_input")
    expect(await question.partA(input, 9)).to.equal(5)
  })

  it('part B main', async () => {
    const input = await getInputStrings(5, "input")
    expect(await question.partB(input, 999)).to.equal(20012)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(5, "sample_input")
    expect(await question.partB(input, 9)).to.equal(12)
  })
})
