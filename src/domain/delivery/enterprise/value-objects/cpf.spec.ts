import { CPF } from './cpf'

describe('CPF Value Object', () => {
  it('should not be able to create CPF with invalid CPF', () => {
    const result = CPF.create('invalid')
    const result2 = CPF.create('123.456.789.10')
    const result3 = CPF.create('123.456-789-10')

    expect(result.isLeft()).toEqual(true)
    expect(result2.isLeft()).toEqual(true)
    expect(result3.isLeft()).toEqual(true)
  })

  it('should be able to create CPF with valid CPF', () => {
    const result = CPF.create('123.456.789-10')

    expect(result.isRight()).toEqual(true)
  })
})
