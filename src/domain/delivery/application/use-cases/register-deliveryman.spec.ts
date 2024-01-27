import { faker } from '@faker-js/faker'

import { makeDeliveryMan } from '@/test/factories/make-deliveryman'
import { InMemoryDeliveryManRepository } from '@/test/repositories/in-memory-deliveryman-repository'

import { CPF } from '../../enterprise/value-objects/cpf'
import { RegisterDeliveryManUseCase } from './register-deliveryman'

let inMemoryDeliveryManRepository: InMemoryDeliveryManRepository
let sut: RegisterDeliveryManUseCase

describe('Register DeliveryMan UseCase', () => {
  beforeAll(() => {
    inMemoryDeliveryManRepository = new InMemoryDeliveryManRepository()
    sut = new RegisterDeliveryManUseCase(inMemoryDeliveryManRepository)
  })

  it('should not be able to register deliveryman if already exists', async () => {
    const deliveryMan = makeDeliveryMan()

    await inMemoryDeliveryManRepository.create(deliveryMan)

    const result = await sut.execute({
      cpf: deliveryMan.cpf.value,
      name: faker.person.fullName(),
      password: faker.internet.password(),
    })

    return expect(result.isLeft()).toEqual(true)
  })

  it('should not be able to register deliveryman with invalid cpf', async () => {
    const result = await sut.execute({
      cpf: 'invalid',
      name: faker.person.fullName(),
      password: faker.internet.password(),
    })

    return expect(result.isLeft()).toEqual(true)
  })

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  it.skip('should be able to create a new deliveryman', async () => {})
})
