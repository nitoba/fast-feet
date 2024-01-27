import { type Either, left, right } from '@/core/logic/either'

import { DeliveryMan } from '../../enterprise/entities/deliveryman'
import type { InvalidCPFError } from '../../enterprise/errors/invalid-cpf'
import { CPF } from '../../enterprise/value-objects/cpf'
import type { DeliveryManRepository } from '../repositories/deliveryman-repository'
import { DeliveryManAlreadyExistsError } from './errors/deliveryman-already-exists'

interface RegisterDeliveryManUseCaseRequest {
  cpf: string
  name: string
  password: string
}

type RegisterDeliveryManUseCaseResponse = Either<
  DeliveryManAlreadyExistsError | InvalidCPFError,
  void
>

export class RegisterDeliveryManUseCase {
  constructor(private readonly deliverymanRepository: DeliveryManRepository) {}

  async execute({
    cpf,
    name,
    password,
  }: RegisterDeliveryManUseCaseRequest): Promise<RegisterDeliveryManUseCaseResponse> {
    const deliverymanExists = await this.deliverymanRepository.findByCpf(cpf)

    if (deliverymanExists) {
      return left(new DeliveryManAlreadyExistsError())
    }

    const cpfValue = CPF.create(cpf)

    if (cpfValue.isLeft()) {
      return left(cpfValue.value)
    }

    // TODO: handle with password hash

    const deliveryMan = DeliveryMan.create({
      cpf: cpfValue.value,
      name,
      password,
    })

    await this.deliverymanRepository.create(deliveryMan)

    return right(undefined)
  }
}
