import question from './question'
import { expect } from 'chai'
import { getInputNumbers } from '../helpers'

describe('Template', () => {
  it('part A main', async () => {
    const input = await getInputNumbers(1, "input")
    expect(await question.partA(input)).to.equal(null)
  })

  it('part A sample', async () => {
    const input = await getInputNumbers(1, "sample_input")
    expect(await question.partA(input)).to.equal(null)
  })

  it('part B main', async () => {
    const input = await getInputNumbers(1, "input")
    expect(await question.partB(input)).to.equal(null)
  })

  it('part B sample', async () => {
    const input = await getInputNumbers(1, "sample_input")
    expect(await question.partB(input)).to.equal(null)
  })
})
