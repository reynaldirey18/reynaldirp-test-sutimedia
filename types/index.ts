export type Modify<T, R> = Omit<T, keyof R> & R;
export type Combine<T, R> = T & R;