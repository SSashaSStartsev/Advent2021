import question from './question'
import { expect } from 'chai'
import { getInputNumbers, getInputStrings } from '../helpers'

describe('Question 2', () => {
  it('part A main', async () => {
    const input = await getInputStrings(2, "input")
    expect(await question.partA(input)).to.equal(1698735)
  })

  it('part A sample', async () => {
    const input = await getInputStrings(2, "sample_input")
    expect(await question.partA(input)).to.equal(150)
  })

  it('part B main', async () => {
    const input = await getInputStrings(2, "input")
    expect(await question.partB(input)).to.equal(1594785890)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(2, "sample_input")
    expect(await question.partB(input)).to.equal(900)
  })
})
