import { ValueObject } from './value-objects'

type CustomValueObjectProps = {
  value: string
}

class CustomValueObject extends ValueObject<CustomValueObjectProps> {
  private constructor(props: CustomValueObjectProps) {
    super(props)
  }

  get value(): string {
    return this.props.value
  }

  static create(value: string): CustomValueObject {
    return new CustomValueObject({ value })
  }
}

describe('Value object tests', () => {
  it('should create a value object', () => {
    const sut = CustomValueObject.create('test')

    expect(sut.value).toBe('test')
  })

  it('should be verify if two value objects is equals', () => {
    const sut = CustomValueObject.create('test')
    const sut2 = CustomValueObject.create('test')

    expect(sut.equals(sut2)).toBe(true)
  })

  it('should be verify if two value objects does not equals', () => {
    const sut = CustomValueObject.create('test')
    const sut2 = CustomValueObject.create('test2')

    expect(sut.equals(sut2)).toBe(false)
  })
})
