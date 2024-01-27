import { faker } from '@faker-js/faker'

import type { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  DeliveryMan,
  type DeliveryManProps,
} from '@/domain/delivery/enterprise/entities/deliveryman'
import { CPF } from '@/domain/delivery/enterprise/value-objects/cpf'

export function makeDeliveryMan(
  override: Partial<DeliveryManProps> = {},
  id?: UniqueEntityID,
) {
  const deliveryMan = DeliveryMan.create(
    {
      name: faker.person.fullName(),
      password: faker.internet.password(),
      cpf: CPF.create('65444122529') as unknown as CPF,
      ...override,
    },
    id,
  )

  return deliveryMan
}
