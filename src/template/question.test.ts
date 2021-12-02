import question from './question'
import { expect } from 'chai'
import { getInputNumbers } from '../helpers'

describe('Template', () => {
  it('part A main', async () => {
    const input = await getInputNumbers(1, "input")
    expect(await question.partA(input)).to.equal(514579)
  })

  it('part B main', async () => {
    const input = await getInputNumbers(1, "input")
    expect(await question.partB(input)).to.equal(241861950)
  })
})
