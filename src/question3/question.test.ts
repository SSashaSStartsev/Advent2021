import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputStrings } from '../helpers'

describe('Question 3', () => {
  it('part A main', async () => {
    const input = await getInputGrid(3, "input")
    expect(await question.partA(input)).to.equal(2648450)
  })

  it('part A sample', async () => {
    const input = await getInputGrid(3, "sample_input")
    expect(await question.partA(input)).to.equal(198)
  })

  it('part B main', async () => {
    const input = await getInputGrid(3, "input")
    const input2 = await getInputStrings(3, "input")
    expect(await question.partB(input, input2)).to.equal(2845944)
  })

  it('part B sample', async () => {
    const input = await getInputGrid(3, "sample_input")
    const input2 = await getInputStrings(3, "sample_input")
    expect(await question.partB(input, input2)).to.equal(230)
  })
})
