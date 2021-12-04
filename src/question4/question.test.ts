import question from './question'
import { expect } from 'chai'
import { getInputNumbers, getInputStrings } from '../helpers'

describe('Question 4', () => {
  it('part A main', async () => {
    const input = await getInputStrings(4, "input")
    expect(await question.partA(input)).to.equal(null)
  })

  it('part A sample', async () => {
    const input = await getInputStrings(4, "sample_input")
    expect(await question.partA(input)).to.equal(null)
  })

  it('part B main', async () => {
    const input = await getInputStrings(4, "input")
    expect(await question.partB(input)).to.equal(null)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(4, "sample_input")
    expect(await question.partB(input)).to.equal(null)
  })
})
