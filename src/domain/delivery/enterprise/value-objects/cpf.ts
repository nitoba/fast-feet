import { type Either, left, right } from '@/core/logic/either'

import { InvalidCPFError } from '../errors/invalid-cpf'

export class CPF {
  public value: string

  private constructor(value: string) {
    this.value = value
  }

  static create(value: string): Either<InvalidCPFError, CPF> {
    if (value.length !== 11) {
      return left(new InvalidCPFError('Invalid CPF!'))
    }

    return right(new CPF(value))
  }
}
