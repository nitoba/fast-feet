import type { DeliveryMan } from '../../enterprise/entities/deliveryman'

export abstract class DeliveryManRepository {
  abstract create(deliveryman: DeliveryMan): Promise<void>
  abstract findByCpf(cpf: string): Promise<DeliveryMan | null>
}
