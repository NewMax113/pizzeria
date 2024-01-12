import { IPizza } from "../components/types/types"

export let useUpdate = (target: any[], piz: IPizza[], version: number) => {
    let z = target.map((y) => piz.filter(x => version == 1 ? x.category.includes(y) : x.id == y.id))
    let s: IPizza[] = []
    let c = z.map((x, i) => x.map(y => s.push(y)))
    s = [...new Set(s)]
    return s
}
