// type shim for nodejs' `require()` syntax
declare const require: (module: string) => any;
interface CreepMemory {
    // [x: string]: any
    role: string
    upgrading: boolean
    building: boolean
}
