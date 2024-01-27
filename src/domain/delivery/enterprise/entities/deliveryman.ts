import { Entity } from '@/core/entities/entity'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id'
import type { Optional } from '@/core/types/optional'

import { CPF } from '../value-objects/cpf'

export interface DeliveryManProps {
  name: string
  cpf: CPF
  password: string
  createdAt: Date
  updatedAt?: Date
}

export class DeliveryMan extends Entity<DeliveryManProps> {
  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
  }

  get cpf() {
    return this.props.cpf
  }

  set cpf(cpf: CPF) {
    this.props.cpf = cpf
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(
    props: Optional<DeliveryManProps, 'createdAt'>,
    id?: UniqueEntityID,
  ): DeliveryMan {
    return new DeliveryMan(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
  }
}
