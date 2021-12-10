import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputNumbers } from '../helpers'

describe('Question 9', () => {
  it('part A main', async () => {
    const input = await getInputGrid(9, "input")
    expect(await question.partA(input)).to.equal(423)
  })

  it('part A sample', async () => {
    const input = await getInputGrid(9, "sample_input")
    expect(await question.partA(input)).to.equal(15)
  })

  it('part B main', async () => {
    const input = await getInputGrid(9, "input")
    expect(await question.partB(input)).to.equal(1198704)
  })

  it('part B sample', async () => {
    const input = await getInputGrid(9, "sample_input")
    expect(await question.partB(input)).to.equal(1134)
  })
})
