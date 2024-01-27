import { type Either, left, right } from '@/core/logic/either'
import { ValueObject } from '@/core/value-objects'

import { InvalidCPFError } from '../errors/invalid-cpf'

interface CPFProps {
  value: string
}
export class CPF extends ValueObject<CPFProps> {
  private constructor(props: CPFProps) {
    super(props)
  }

  get value() {
    return this.props.value
  }

  static create(value: string): Either<InvalidCPFError, CPF> {
    if (value.length !== 11) {
      return left(new InvalidCPFError('Invalid CPF!'))
    }

    return right(new CPF({ value }))
  }
}
