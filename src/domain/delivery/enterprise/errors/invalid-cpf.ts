export class InvalidCPFError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidCPFError'
  }
}
