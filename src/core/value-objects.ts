type ValueObjectProps = Record<string, any>

export abstract class ValueObject<Props extends ValueObjectProps> {
  protected props: Props

  protected constructor(props: Props) {
    this.props = Object.freeze(props)
  }

  public equals(valueObject: ValueObject<Props>) {
    if (valueObject === this) {
      return true
    }

    return Object.keys(valueObject.props).every(
      (key) => this.props[key] === valueObject.props[key],
    )
  }
}
