import question from './question'
import { expect } from 'chai'
import { getInputStrings } from '../helpers'

describe('Question 8', () => {
  it('part A main', async () => {
    const input = await getInputStrings(8, "input")
    expect(await question.partA(input)).to.equal(534)
  })

  it('part A sample', async () => {
    const input = await getInputStrings(8, "sample_input")
    expect(await question.partA(input)).to.equal(26)
  })

  it('part B main', async () => {
    const input = await getInputStrings(8, "input")
    expect(await question.partB(input)).to.equal(1070188)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(8, "sample_input")
    expect(await question.partB(input)).to.equal(61229)
  })
})
