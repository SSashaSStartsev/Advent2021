import question from './question'
import { expect } from 'chai'
import { getInputStrings } from '../helpers'

describe('Question 7', () => {
  it('part A main', async () => {
    const input = await getInputStrings(7, "input")
    expect(await question.partA(input)).to.equal(344297)
  })

  it('part A sample', async () => {
    const input = await getInputStrings(7, "sample_input")

    expect(await question.partA(input)).to.equal(37)
  })

  it('part B main', async () => {
    const input = await getInputStrings(7, "input")
    expect(await question.partB(input)).to.equal(97164301)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(7, "sample_input")
    expect(await question.partB(input)).to.equal(168)
  })
})
