import { Mutable } from "../../utils"

export const cores = ["mkxp-z", "fceumm", "genesis_plus_gx"] as const

export type Core = Mutable<(typeof cores)[number]>
