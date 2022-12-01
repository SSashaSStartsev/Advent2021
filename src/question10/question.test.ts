import question from './question'
import { expect } from 'chai'
import { getInputStrings } from '../helpers'

describe('Question 10', () => {
  it('part A main', async () => {
    const input = await getInputStrings(10, "input")
    expect(await question.partA(input)).to.equal(388713)
  })

  it('part A sample', async () => {
    const input = await getInputStrings(10, "sample_input")
    expect(await question.partA(input)).to.equal(26397)
  })

  it('part B main', async () => {
    const input = await getInputStrings(10, "input")
    expect(await question.partB(input)).to.equal(3539961434)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(10, "sample_input")
    expect(await question.partB(input)).to.equal(288957)
  })
})
