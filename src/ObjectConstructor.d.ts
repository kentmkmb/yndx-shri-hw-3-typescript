declare interface ObjectConstructor {
    keys<T>(o: T): (keyof T)[];
}
