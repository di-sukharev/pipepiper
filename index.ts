type MaybePromise<T> = Promise<T> | T;

export function pipe<A, B>(
  ab: (a: A) => MaybePromise<B>
): (a: MaybePromise<A>) => Promise<B>;

export function pipe<A, B, C>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>
): (a: MaybePromise<A>) => Promise<C>;

export function pipe<A, B, C, D>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>
): (a: MaybePromise<A>) => Promise<D>;

export function pipe<A, B, C, D, E>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>
): (a: MaybePromise<A>) => Promise<E>;

export function pipe<A, B, C, D, E, F>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>
): (a: MaybePromise<A>) => Promise<F>;

export function pipe<A, B, C, D, E, F, G>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>,
  fg: (f: F) => MaybePromise<G>
): (a: MaybePromise<A>) => Promise<G>;

export function pipe<A, B, C, D, E, F, G, H>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>,
  fg: (f: F) => MaybePromise<G>,
  gh: (g: G) => MaybePromise<H>
): (a: MaybePromise<A>) => Promise<H>;

export function pipe<A, B, C, D, E, F, G, H, I>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>,
  fg: (f: F) => MaybePromise<G>,
  gh: (g: G) => MaybePromise<H>,
  hi: (h: H) => MaybePromise<I>
): (a: MaybePromise<A>) => Promise<I>;

export function pipe<A, B, C, D, E, F, G, H, I, J>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>,
  fg: (f: F) => MaybePromise<G>,
  gh: (g: G) => MaybePromise<H>,
  hi: (h: H) => MaybePromise<I>,
  ij: (i: I) => MaybePromise<J>
): (a: MaybePromise<A>) => Promise<J>;

export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>,
  fg: (f: F) => MaybePromise<G>,
  gh: (g: G) => MaybePromise<H>,
  hi: (h: H) => MaybePromise<I>,
  ij: (i: I) => MaybePromise<J>,
  jk: (j: J) => MaybePromise<K>
): (a: MaybePromise<A>) => Promise<K>;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>,
  fg: (f: F) => MaybePromise<G>,
  gh: (g: G) => MaybePromise<H>,
  hi: (h: H) => MaybePromise<I>,
  ij: (i: I) => MaybePromise<J>,
  jk: (j: J) => MaybePromise<K>,
  kl: (k: K) => MaybePromise<L>
): (a: MaybePromise<A>) => Promise<L>;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>,
  fg: (f: F) => MaybePromise<G>,
  gh: (g: G) => MaybePromise<H>,
  hi: (h: H) => MaybePromise<I>,
  ij: (i: I) => MaybePromise<J>,
  jk: (j: J) => MaybePromise<K>,
  kl: (k: K) => MaybePromise<L>,
  lm: (l: L) => MaybePromise<M>
): (a: MaybePromise<A>) => Promise<M>;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>,
  fg: (f: F) => MaybePromise<G>,
  gh: (g: G) => MaybePromise<H>,
  hi: (h: H) => MaybePromise<I>,
  ij: (i: I) => MaybePromise<J>,
  jk: (j: J) => MaybePromise<K>,
  kl: (k: K) => MaybePromise<L>,
  lm: (l: L) => MaybePromise<M>,
  mn: (m: M) => MaybePromise<N>
): (a: MaybePromise<A>) => Promise<N>;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>,
  fg: (f: F) => MaybePromise<G>,
  gh: (g: G) => MaybePromise<H>,
  hi: (h: H) => MaybePromise<I>,
  ij: (i: I) => MaybePromise<J>,
  jk: (j: J) => MaybePromise<K>,
  kl: (k: K) => MaybePromise<L>,
  lm: (l: L) => MaybePromise<M>,
  mn: (m: M) => MaybePromise<N>,
  no: (n: N) => MaybePromise<O>
): (a: MaybePromise<A>) => Promise<O>;

export function pipe(...fns: Function[]) {
  return (x: any) => fns.reduce(async (y, fn) => fn(await y), x);
}

export function fork<T extends object>(
  ...functions: Array<(context: T) => MaybePromise<T>>
): (context: T) => Promise<T> {
  return async (context: T): Promise<T> => {
    const results = await Promise.all(functions.map((fn) => fn(context)));

    return results.reduce((acc, result) => ({ ...acc, ...result }), context);
  };
}
