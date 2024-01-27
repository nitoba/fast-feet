import type { DeliveryManRepository } from '@/domain/delivery/application/repositories/deliveryman-repository'
import type { DeliveryMan } from '@/domain/delivery/enterprise/entities/deliveryman'

export class InMemoryDeliveryManRepository implements DeliveryManRepository {
  items: DeliveryMan[] = []

  async create(deliveryman: DeliveryMan): Promise<void> {
    this.items.push(deliveryman)
  }

  async findByCpf(cpf: string): Promise<DeliveryMan | null> {
    const deliveryMan = this.items.find(
      (deliveryman) => deliveryman.cpf.value === cpf,
    )
    return deliveryMan ?? null
  }
}
