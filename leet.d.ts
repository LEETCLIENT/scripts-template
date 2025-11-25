// definitions file auto-generated
declare enum Category{COMBAT, MOVEMENT, PLAYER, RENDER, OTHER, }
declare enum Font{sfmedium, icons, }
declare interface ClientProvider{
notify(text: any, icon: Icon, duration_ms: number): void
getModules(): Module[]
rotateTo(angle: Angle): void
localRotation(): Angle
rotation(): Angle
settings(...settings: Setting): void
traceEntity(vec: Angle, distance: number, entity: Entity, walls: boolean): boolean
}
declare const Client: ClientProvider;

declare interface EventProvider{
type(name: string): any
set(provider: (event: Event) => void): void
is(obj: unknown, name: string): boolean
}
declare const Events: EventProvider;

declare interface ReflectProvider{
newInstance(clazz: string, ...args: any): any
findClass(obfName: string): any
call(clazzOrInstance: any, target: any | null, method: string, ...args: any): any
callStatic(clazz: string, method: string, ...args: any): any
callInstance(instance: any, method: string, ...args: any): any
getFieldValue(clazzOrInstance: any, instanceIfAny: any | null, field: string): any
setFieldValue(clazzOrInstance: any, instanceIfAny: any | null, field: string, value: any): void
}
declare const Reflect: ReflectProvider;

declare interface RenderProvider{
entry(stack: any): any
color(r: number, g: number, b: number, a: number): Color
string(text: string, id: Font, size: number, x: number, y: number, color: Color): void
lineBuffer(provider: any): any
width(text: string, id: Font, size: number): number
/** Draw a rectangle */ rect(x: number, y: number, width: number, height: number, round: number, color: Color): void
vertex(entry: any, x: number, y: number, z: number, color: Color, ...normal: number): RenderProvider
quadBuffer(provider: any): any
}
declare const Render: RenderProvider;

declare interface TimeProvider{
create(): Timer
}
declare const Time: TimeProvider;

declare interface Timer{
reset(): void
getTime(): number
reached(time: number, reset: boolean): boolean
}

declare interface HookProvider{
    hook(hook: Hooks.ELYTRA_RESOLVER | Hooks.AURA_POINT, solution: (target: Entity) => Vec3): void
    hook(hook: Hooks.AURA_ATTACK, solution: (target: Entity) => boolean): void
    hook(other: string, solution: (idk: any) => any): void

}
declare const Hook: HookProvider;

declare enum Hooks{ELYTRA_RESOLVER, AURA_ATTACK, AURA_POINT, AURA_ANGLE, }
declare interface GameProvider{
getTarget(): Entity
getLocal(): Entity
getLastTarget(): Entity
send(msg: string): void
getServerPos(e: Entity): Vec3
getPos(e: Entity): Vec3
getServerRot(e: Entity): Vec2
}
declare const Game: GameProvider;

declare interface DragProvider{
}
declare const Drag: DragProvider;

declare interface Color {
    getRGB(): number;
    getRed(): number;
    getGreen(): number;
    getBlue(): number;
}

declare type Setting = any // TODO
declare type Entity = any // TODO

declare interface Vec2 {
    x: number, y: number
    add(vec: Vec2): Vec2
    sub(vec: Vec2): Vec2
    mul(scalar: number): Vec2
    mul(vec: Vec2): Vec2
    div(scalar: number): Vec2
    div(vec: Vec2): Vec2
}

declare interface Vec3 {
    x: number, y: number, z: number
    add(vec: Vec3): Vec3
    sub(vec: Vec3): Vec3
    mul(scalar: number): Vec3
    mul(vec: Vec3): Vec3
    div(scalar: number): Vec3
    div(vec: Vec3): Vec3
}

declare interface Register {
    name: string
    authors: string[]
    category: Category
    tags?: number[]
    description?: string
}

declare type Event = any // TODO

declare function register(params: Register): void


declare interface Module{
getName(): string
isEnabled(): boolean
getKey(): number
getCategory(): Category
getRawName(): string
}

declare enum Icon{LOGO, FIGHT, MOVEMENT, RENDER, PLAYER, MISC, SCRIPT, SEARCH, CHECK, DOWN, UP, CUBE, GLOBE, PERSONS, GEAR, EXIT, ADD, REFRESH, MICROSOFT, STAR, CROSS, HOME, KEYBOARD, COMPASS, BACK, INFO, WARN, POTION, CLOCK, SPUTNIK, GROUP, LINK, }
