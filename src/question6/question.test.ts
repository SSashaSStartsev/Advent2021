import question from './question'
import { expect } from 'chai'
import { getInputNumbers, getInputStrings } from '../helpers'

describe('Question 6', () => {
  it('part A main', async () => {
    const input = await getInputStrings(6, "input")
    expect(await question.partA(input)).to.equal(362639)
  })

  it('part A sample', async () => {
    const input = await getInputStrings(6, "sample_input")
    expect(await question.partA(input)).to.equal(5934)
  })

  it('part B main', async () => {
    const input = await getInputStrings(6, "input")
    expect(await question.partB(input)).to.equal(1639854996917)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(6, "sample_input")
    expect(await question.partB(input)).to.equal(26984457539)
  })
})
