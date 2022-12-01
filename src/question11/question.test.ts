import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputNumbers } from '../helpers'

describe('Question 11', () => {
  it('part A main', async () => {
    const input = await getInputGrid(11, "input")
    expect(await question.partA(input)).to.equal(null)
  })

  it('part A sample', async () => {
    const input = await getInputGrid(11, "sample_input")
    expect(await question.partA(input)).to.equal(1656)
  })

  it('part B main', async () => {
    const input = await getInputGrid(11, "input")
    expect(await question.partB(input)).to.equal(null)
  })

  it('part B sample', async () => {
    const input = await getInputGrid(11, "sample_input")
    expect(await question.partB(input)).to.equal(null)
  })
})
