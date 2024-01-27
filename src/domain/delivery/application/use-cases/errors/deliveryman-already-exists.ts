import type { UseCaseError } from '@/core/errors/use-case-error'

export class DeliveryManAlreadyExistsError
  extends Error
  implements UseCaseError
{
  constructor() {
    super('Delivery Man Already Exists')
  }
}
