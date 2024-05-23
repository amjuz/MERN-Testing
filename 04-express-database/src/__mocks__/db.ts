import { PrismaClient } from '@prisma/client'
import { vi } from 'vitest'
import { mockDeep } from 'vitest-mock-extended'

export const prisma = mockDeep<PrismaClient>();

// export const prisma =  {
//     sum: {
//         create: vi.fn()
//     }
// }