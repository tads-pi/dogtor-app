export const ALLOWED_TYPES = ["Consulta", "Vacina", "Cirurgia", "Exame", "Banho", "Tosa", "Outro"]

export const PAYMENT_TYPE_PENDING = "PENDENTE"
export const PAYMENT_TYPE_PAID = "PAGO"
export const PAYMENT_TYPE_CANCELED = "CANCELADO"
export const ALLOWED_PAYMENT_STATUS = [PAYMENT_TYPE_PENDING, PAYMENT_TYPE_PAID, PAYMENT_TYPE_CANCELED]

export const DEFAULT_FLOW = "default"
export const REGISTER_PET_FLOW = "register_pet"
export const FLOWS = [
    DEFAULT_FLOW,
    REGISTER_PET_FLOW,
]