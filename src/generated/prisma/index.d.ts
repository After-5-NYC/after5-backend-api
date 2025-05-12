
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model EventVenue
 * 
 */
export type EventVenue = $Result.DefaultSelection<Prisma.$EventVenuePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventVenue`: Exposes CRUD operations for the **EventVenue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventVenues
    * const eventVenues = await prisma.eventVenue.findMany()
    * ```
    */
  get eventVenue(): Prisma.EventVenueDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Event: 'Event',
    Venue: 'Venue',
    EventVenue: 'EventVenue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "event" | "venue" | "eventVenue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      EventVenue: {
        payload: Prisma.$EventVenuePayload<ExtArgs>
        fields: Prisma.EventVenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventVenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventVenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload>
          }
          findFirst: {
            args: Prisma.EventVenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventVenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload>
          }
          findMany: {
            args: Prisma.EventVenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload>[]
          }
          create: {
            args: Prisma.EventVenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload>
          }
          createMany: {
            args: Prisma.EventVenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventVenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload>[]
          }
          delete: {
            args: Prisma.EventVenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload>
          }
          update: {
            args: Prisma.EventVenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload>
          }
          deleteMany: {
            args: Prisma.EventVenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventVenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventVenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload>[]
          }
          upsert: {
            args: Prisma.EventVenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventVenuePayload>
          }
          aggregate: {
            args: Prisma.EventVenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventVenue>
          }
          groupBy: {
            args: Prisma.EventVenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventVenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventVenueCountArgs<ExtArgs>
            result: $Utils.Optional<EventVenueCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    event?: EventOmit
    venue?: VenueOmit
    eventVenue?: EventVenueOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    EventVenue: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventVenue?: boolean | EventCountOutputTypeCountEventVenueArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventVenueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventVenueWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    EventVenue: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventVenue?: boolean | VenueCountOutputTypeCountEventVenueArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountEventVenueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventVenueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    EventVenue?: boolean | Event$EventVenueArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventVenue?: boolean | Event$EventVenueArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      EventVenue: Prisma.$EventVenuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EventVenue<T extends Event$EventVenueArgs<ExtArgs> = {}>(args?: Subset<T, Event$EventVenueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.EventVenue
   */
  export type Event$EventVenueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    where?: EventVenueWhereInput
    orderBy?: EventVenueOrderByWithRelationInput | EventVenueOrderByWithRelationInput[]
    cursor?: EventVenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventVenueScalarFieldEnum | EventVenueScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    googlePlaceId: string | null
    createdAt: Date | null
  }

  export type VenueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    googlePlaceId: string | null
    createdAt: Date | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    state: number
    zip: number
    googlePlaceId: number
    createdAt: number
    _all: number
  }


  export type VenueMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    googlePlaceId?: true
    createdAt?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    googlePlaceId?: true
    createdAt?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    googlePlaceId?: true
    createdAt?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt: Date
    _count: VenueCountAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    googlePlaceId?: boolean
    createdAt?: boolean
    EventVenue?: boolean | Venue$EventVenueArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    googlePlaceId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    googlePlaceId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    googlePlaceId?: boolean
    createdAt?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "state" | "zip" | "googlePlaceId" | "createdAt", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventVenue?: boolean | Venue$EventVenueArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      EventVenue: Prisma.$EventVenuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      city: string
      state: string
      zip: string
      googlePlaceId: string
      createdAt: Date
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenueCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {VenueUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenueUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EventVenue<T extends Venue$EventVenueArgs<ExtArgs> = {}>(args?: Subset<T, Venue$EventVenueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'String'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly address: FieldRef<"Venue", 'String'>
    readonly city: FieldRef<"Venue", 'String'>
    readonly state: FieldRef<"Venue", 'String'>
    readonly zip: FieldRef<"Venue", 'String'>
    readonly googlePlaceId: FieldRef<"Venue", 'String'>
    readonly createdAt: FieldRef<"Venue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue createManyAndReturn
   */
  export type VenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue updateManyAndReturn
   */
  export type VenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue.EventVenue
   */
  export type Venue$EventVenueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    where?: EventVenueWhereInput
    orderBy?: EventVenueOrderByWithRelationInput | EventVenueOrderByWithRelationInput[]
    cursor?: EventVenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventVenueScalarFieldEnum | EventVenueScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model EventVenue
   */

  export type AggregateEventVenue = {
    _count: EventVenueCountAggregateOutputType | null
    _min: EventVenueMinAggregateOutputType | null
    _max: EventVenueMaxAggregateOutputType | null
  }

  export type EventVenueMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    venueId: string | null
  }

  export type EventVenueMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    venueId: string | null
  }

  export type EventVenueCountAggregateOutputType = {
    id: number
    eventId: number
    venueId: number
    _all: number
  }


  export type EventVenueMinAggregateInputType = {
    id?: true
    eventId?: true
    venueId?: true
  }

  export type EventVenueMaxAggregateInputType = {
    id?: true
    eventId?: true
    venueId?: true
  }

  export type EventVenueCountAggregateInputType = {
    id?: true
    eventId?: true
    venueId?: true
    _all?: true
  }

  export type EventVenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventVenue to aggregate.
     */
    where?: EventVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventVenues to fetch.
     */
    orderBy?: EventVenueOrderByWithRelationInput | EventVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventVenues
    **/
    _count?: true | EventVenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventVenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventVenueMaxAggregateInputType
  }

  export type GetEventVenueAggregateType<T extends EventVenueAggregateArgs> = {
        [P in keyof T & keyof AggregateEventVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventVenue[P]>
      : GetScalarType<T[P], AggregateEventVenue[P]>
  }




  export type EventVenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventVenueWhereInput
    orderBy?: EventVenueOrderByWithAggregationInput | EventVenueOrderByWithAggregationInput[]
    by: EventVenueScalarFieldEnum[] | EventVenueScalarFieldEnum
    having?: EventVenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventVenueCountAggregateInputType | true
    _min?: EventVenueMinAggregateInputType
    _max?: EventVenueMaxAggregateInputType
  }

  export type EventVenueGroupByOutputType = {
    id: string
    eventId: string
    venueId: string
    _count: EventVenueCountAggregateOutputType | null
    _min: EventVenueMinAggregateOutputType | null
    _max: EventVenueMaxAggregateOutputType | null
  }

  type GetEventVenueGroupByPayload<T extends EventVenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventVenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventVenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventVenueGroupByOutputType[P]>
            : GetScalarType<T[P], EventVenueGroupByOutputType[P]>
        }
      >
    >


  export type EventVenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    venueId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventVenue"]>

  export type EventVenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    venueId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventVenue"]>

  export type EventVenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    venueId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventVenue"]>

  export type EventVenueSelectScalar = {
    id?: boolean
    eventId?: boolean
    venueId?: boolean
  }

  export type EventVenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "venueId", ExtArgs["result"]["eventVenue"]>
  export type EventVenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type EventVenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type EventVenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $EventVenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventVenue"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      venue: Prisma.$VenuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      venueId: string
    }, ExtArgs["result"]["eventVenue"]>
    composites: {}
  }

  type EventVenueGetPayload<S extends boolean | null | undefined | EventVenueDefaultArgs> = $Result.GetResult<Prisma.$EventVenuePayload, S>

  type EventVenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventVenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventVenueCountAggregateInputType | true
    }

  export interface EventVenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventVenue'], meta: { name: 'EventVenue' } }
    /**
     * Find zero or one EventVenue that matches the filter.
     * @param {EventVenueFindUniqueArgs} args - Arguments to find a EventVenue
     * @example
     * // Get one EventVenue
     * const eventVenue = await prisma.eventVenue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventVenueFindUniqueArgs>(args: SelectSubset<T, EventVenueFindUniqueArgs<ExtArgs>>): Prisma__EventVenueClient<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventVenue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventVenueFindUniqueOrThrowArgs} args - Arguments to find a EventVenue
     * @example
     * // Get one EventVenue
     * const eventVenue = await prisma.eventVenue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventVenueFindUniqueOrThrowArgs>(args: SelectSubset<T, EventVenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventVenueClient<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventVenue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventVenueFindFirstArgs} args - Arguments to find a EventVenue
     * @example
     * // Get one EventVenue
     * const eventVenue = await prisma.eventVenue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventVenueFindFirstArgs>(args?: SelectSubset<T, EventVenueFindFirstArgs<ExtArgs>>): Prisma__EventVenueClient<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventVenue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventVenueFindFirstOrThrowArgs} args - Arguments to find a EventVenue
     * @example
     * // Get one EventVenue
     * const eventVenue = await prisma.eventVenue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventVenueFindFirstOrThrowArgs>(args?: SelectSubset<T, EventVenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventVenueClient<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventVenues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventVenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventVenues
     * const eventVenues = await prisma.eventVenue.findMany()
     * 
     * // Get first 10 EventVenues
     * const eventVenues = await prisma.eventVenue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventVenueWithIdOnly = await prisma.eventVenue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventVenueFindManyArgs>(args?: SelectSubset<T, EventVenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventVenue.
     * @param {EventVenueCreateArgs} args - Arguments to create a EventVenue.
     * @example
     * // Create one EventVenue
     * const EventVenue = await prisma.eventVenue.create({
     *   data: {
     *     // ... data to create a EventVenue
     *   }
     * })
     * 
     */
    create<T extends EventVenueCreateArgs>(args: SelectSubset<T, EventVenueCreateArgs<ExtArgs>>): Prisma__EventVenueClient<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventVenues.
     * @param {EventVenueCreateManyArgs} args - Arguments to create many EventVenues.
     * @example
     * // Create many EventVenues
     * const eventVenue = await prisma.eventVenue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventVenueCreateManyArgs>(args?: SelectSubset<T, EventVenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventVenues and returns the data saved in the database.
     * @param {EventVenueCreateManyAndReturnArgs} args - Arguments to create many EventVenues.
     * @example
     * // Create many EventVenues
     * const eventVenue = await prisma.eventVenue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventVenues and only return the `id`
     * const eventVenueWithIdOnly = await prisma.eventVenue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventVenueCreateManyAndReturnArgs>(args?: SelectSubset<T, EventVenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventVenue.
     * @param {EventVenueDeleteArgs} args - Arguments to delete one EventVenue.
     * @example
     * // Delete one EventVenue
     * const EventVenue = await prisma.eventVenue.delete({
     *   where: {
     *     // ... filter to delete one EventVenue
     *   }
     * })
     * 
     */
    delete<T extends EventVenueDeleteArgs>(args: SelectSubset<T, EventVenueDeleteArgs<ExtArgs>>): Prisma__EventVenueClient<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventVenue.
     * @param {EventVenueUpdateArgs} args - Arguments to update one EventVenue.
     * @example
     * // Update one EventVenue
     * const eventVenue = await prisma.eventVenue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventVenueUpdateArgs>(args: SelectSubset<T, EventVenueUpdateArgs<ExtArgs>>): Prisma__EventVenueClient<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventVenues.
     * @param {EventVenueDeleteManyArgs} args - Arguments to filter EventVenues to delete.
     * @example
     * // Delete a few EventVenues
     * const { count } = await prisma.eventVenue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventVenueDeleteManyArgs>(args?: SelectSubset<T, EventVenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventVenues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventVenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventVenues
     * const eventVenue = await prisma.eventVenue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventVenueUpdateManyArgs>(args: SelectSubset<T, EventVenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventVenues and returns the data updated in the database.
     * @param {EventVenueUpdateManyAndReturnArgs} args - Arguments to update many EventVenues.
     * @example
     * // Update many EventVenues
     * const eventVenue = await prisma.eventVenue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventVenues and only return the `id`
     * const eventVenueWithIdOnly = await prisma.eventVenue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventVenueUpdateManyAndReturnArgs>(args: SelectSubset<T, EventVenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventVenue.
     * @param {EventVenueUpsertArgs} args - Arguments to update or create a EventVenue.
     * @example
     * // Update or create a EventVenue
     * const eventVenue = await prisma.eventVenue.upsert({
     *   create: {
     *     // ... data to create a EventVenue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventVenue we want to update
     *   }
     * })
     */
    upsert<T extends EventVenueUpsertArgs>(args: SelectSubset<T, EventVenueUpsertArgs<ExtArgs>>): Prisma__EventVenueClient<$Result.GetResult<Prisma.$EventVenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventVenues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventVenueCountArgs} args - Arguments to filter EventVenues to count.
     * @example
     * // Count the number of EventVenues
     * const count = await prisma.eventVenue.count({
     *   where: {
     *     // ... the filter for the EventVenues we want to count
     *   }
     * })
    **/
    count<T extends EventVenueCountArgs>(
      args?: Subset<T, EventVenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventVenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventVenue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventVenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventVenueAggregateArgs>(args: Subset<T, EventVenueAggregateArgs>): Prisma.PrismaPromise<GetEventVenueAggregateType<T>>

    /**
     * Group by EventVenue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventVenueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventVenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventVenueGroupByArgs['orderBy'] }
        : { orderBy?: EventVenueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventVenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventVenue model
   */
  readonly fields: EventVenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventVenue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventVenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventVenue model
   */
  interface EventVenueFieldRefs {
    readonly id: FieldRef<"EventVenue", 'String'>
    readonly eventId: FieldRef<"EventVenue", 'String'>
    readonly venueId: FieldRef<"EventVenue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventVenue findUnique
   */
  export type EventVenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    /**
     * Filter, which EventVenue to fetch.
     */
    where: EventVenueWhereUniqueInput
  }

  /**
   * EventVenue findUniqueOrThrow
   */
  export type EventVenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    /**
     * Filter, which EventVenue to fetch.
     */
    where: EventVenueWhereUniqueInput
  }

  /**
   * EventVenue findFirst
   */
  export type EventVenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    /**
     * Filter, which EventVenue to fetch.
     */
    where?: EventVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventVenues to fetch.
     */
    orderBy?: EventVenueOrderByWithRelationInput | EventVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventVenues.
     */
    cursor?: EventVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventVenues.
     */
    distinct?: EventVenueScalarFieldEnum | EventVenueScalarFieldEnum[]
  }

  /**
   * EventVenue findFirstOrThrow
   */
  export type EventVenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    /**
     * Filter, which EventVenue to fetch.
     */
    where?: EventVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventVenues to fetch.
     */
    orderBy?: EventVenueOrderByWithRelationInput | EventVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventVenues.
     */
    cursor?: EventVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventVenues.
     */
    distinct?: EventVenueScalarFieldEnum | EventVenueScalarFieldEnum[]
  }

  /**
   * EventVenue findMany
   */
  export type EventVenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    /**
     * Filter, which EventVenues to fetch.
     */
    where?: EventVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventVenues to fetch.
     */
    orderBy?: EventVenueOrderByWithRelationInput | EventVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventVenues.
     */
    cursor?: EventVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventVenues.
     */
    skip?: number
    distinct?: EventVenueScalarFieldEnum | EventVenueScalarFieldEnum[]
  }

  /**
   * EventVenue create
   */
  export type EventVenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    /**
     * The data needed to create a EventVenue.
     */
    data: XOR<EventVenueCreateInput, EventVenueUncheckedCreateInput>
  }

  /**
   * EventVenue createMany
   */
  export type EventVenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventVenues.
     */
    data: EventVenueCreateManyInput | EventVenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventVenue createManyAndReturn
   */
  export type EventVenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * The data used to create many EventVenues.
     */
    data: EventVenueCreateManyInput | EventVenueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventVenue update
   */
  export type EventVenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    /**
     * The data needed to update a EventVenue.
     */
    data: XOR<EventVenueUpdateInput, EventVenueUncheckedUpdateInput>
    /**
     * Choose, which EventVenue to update.
     */
    where: EventVenueWhereUniqueInput
  }

  /**
   * EventVenue updateMany
   */
  export type EventVenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventVenues.
     */
    data: XOR<EventVenueUpdateManyMutationInput, EventVenueUncheckedUpdateManyInput>
    /**
     * Filter which EventVenues to update
     */
    where?: EventVenueWhereInput
    /**
     * Limit how many EventVenues to update.
     */
    limit?: number
  }

  /**
   * EventVenue updateManyAndReturn
   */
  export type EventVenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * The data used to update EventVenues.
     */
    data: XOR<EventVenueUpdateManyMutationInput, EventVenueUncheckedUpdateManyInput>
    /**
     * Filter which EventVenues to update
     */
    where?: EventVenueWhereInput
    /**
     * Limit how many EventVenues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventVenue upsert
   */
  export type EventVenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    /**
     * The filter to search for the EventVenue to update in case it exists.
     */
    where: EventVenueWhereUniqueInput
    /**
     * In case the EventVenue found by the `where` argument doesn't exist, create a new EventVenue with this data.
     */
    create: XOR<EventVenueCreateInput, EventVenueUncheckedCreateInput>
    /**
     * In case the EventVenue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventVenueUpdateInput, EventVenueUncheckedUpdateInput>
  }

  /**
   * EventVenue delete
   */
  export type EventVenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
    /**
     * Filter which EventVenue to delete.
     */
    where: EventVenueWhereUniqueInput
  }

  /**
   * EventVenue deleteMany
   */
  export type EventVenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventVenues to delete
     */
    where?: EventVenueWhereInput
    /**
     * Limit how many EventVenues to delete.
     */
    limit?: number
  }

  /**
   * EventVenue without action
   */
  export type EventVenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventVenue
     */
    select?: EventVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventVenue
     */
    omit?: EventVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventVenueInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    googlePlaceId: 'googlePlaceId',
    createdAt: 'createdAt'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const EventVenueScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    venueId: 'venueId'
  };

  export type EventVenueScalarFieldEnum = (typeof EventVenueScalarFieldEnum)[keyof typeof EventVenueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    EventVenue?: EventVenueListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    EventVenue?: EventVenueOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    EventVenue?: EventVenueListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    city?: StringFilter<"Venue"> | string
    state?: StringFilter<"Venue"> | string
    zip?: StringFilter<"Venue"> | string
    googlePlaceId?: StringFilter<"Venue"> | string
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    EventVenue?: EventVenueListRelationFilter
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    googlePlaceId?: SortOrder
    createdAt?: SortOrder
    EventVenue?: EventVenueOrderByRelationAggregateInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googlePlaceId?: string
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    city?: StringFilter<"Venue"> | string
    state?: StringFilter<"Venue"> | string
    zip?: StringFilter<"Venue"> | string
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    EventVenue?: EventVenueListRelationFilter
  }, "id" | "googlePlaceId">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    googlePlaceId?: SortOrder
    createdAt?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Venue"> | string
    name?: StringWithAggregatesFilter<"Venue"> | string
    address?: StringWithAggregatesFilter<"Venue"> | string
    city?: StringWithAggregatesFilter<"Venue"> | string
    state?: StringWithAggregatesFilter<"Venue"> | string
    zip?: StringWithAggregatesFilter<"Venue"> | string
    googlePlaceId?: StringWithAggregatesFilter<"Venue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Venue"> | Date | string
  }

  export type EventVenueWhereInput = {
    AND?: EventVenueWhereInput | EventVenueWhereInput[]
    OR?: EventVenueWhereInput[]
    NOT?: EventVenueWhereInput | EventVenueWhereInput[]
    id?: StringFilter<"EventVenue"> | string
    eventId?: StringFilter<"EventVenue"> | string
    venueId?: StringFilter<"EventVenue"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }

  export type EventVenueOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    venueId?: SortOrder
    event?: EventOrderByWithRelationInput
    venue?: VenueOrderByWithRelationInput
  }

  export type EventVenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventVenueWhereInput | EventVenueWhereInput[]
    OR?: EventVenueWhereInput[]
    NOT?: EventVenueWhereInput | EventVenueWhereInput[]
    eventId?: StringFilter<"EventVenue"> | string
    venueId?: StringFilter<"EventVenue"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }, "id">

  export type EventVenueOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    venueId?: SortOrder
    _count?: EventVenueCountOrderByAggregateInput
    _max?: EventVenueMaxOrderByAggregateInput
    _min?: EventVenueMinOrderByAggregateInput
  }

  export type EventVenueScalarWhereWithAggregatesInput = {
    AND?: EventVenueScalarWhereWithAggregatesInput | EventVenueScalarWhereWithAggregatesInput[]
    OR?: EventVenueScalarWhereWithAggregatesInput[]
    NOT?: EventVenueScalarWhereWithAggregatesInput | EventVenueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventVenue"> | string
    eventId?: StringWithAggregatesFilter<"EventVenue"> | string
    venueId?: StringWithAggregatesFilter<"EventVenue"> | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    EventVenue?: EventVenueCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    EventVenue?: EventVenueUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventVenue?: EventVenueUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventVenue?: EventVenueUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt?: Date | string
    EventVenue?: EventVenueCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt?: Date | string
    EventVenue?: EventVenueUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventVenue?: EventVenueUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventVenue?: EventVenueUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt?: Date | string
  }

  export type VenueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventVenueCreateInput = {
    id?: string
    event: EventCreateNestedOneWithoutEventVenueInput
    venue: VenueCreateNestedOneWithoutEventVenueInput
  }

  export type EventVenueUncheckedCreateInput = {
    id?: string
    eventId: string
    venueId: string
  }

  export type EventVenueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutEventVenueNestedInput
    venue?: VenueUpdateOneRequiredWithoutEventVenueNestedInput
  }

  export type EventVenueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
  }

  export type EventVenueCreateManyInput = {
    id?: string
    eventId: string
    venueId: string
  }

  export type EventVenueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type EventVenueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventVenueListRelationFilter = {
    every?: EventVenueWhereInput
    some?: EventVenueWhereInput
    none?: EventVenueWhereInput
  }

  export type EventVenueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    googlePlaceId?: SortOrder
    createdAt?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    googlePlaceId?: SortOrder
    createdAt?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    googlePlaceId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type EventVenueCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    venueId?: SortOrder
  }

  export type EventVenueMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    venueId?: SortOrder
  }

  export type EventVenueMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    venueId?: SortOrder
  }

  export type EventVenueCreateNestedManyWithoutEventInput = {
    create?: XOR<EventVenueCreateWithoutEventInput, EventVenueUncheckedCreateWithoutEventInput> | EventVenueCreateWithoutEventInput[] | EventVenueUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventVenueCreateOrConnectWithoutEventInput | EventVenueCreateOrConnectWithoutEventInput[]
    createMany?: EventVenueCreateManyEventInputEnvelope
    connect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
  }

  export type EventVenueUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventVenueCreateWithoutEventInput, EventVenueUncheckedCreateWithoutEventInput> | EventVenueCreateWithoutEventInput[] | EventVenueUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventVenueCreateOrConnectWithoutEventInput | EventVenueCreateOrConnectWithoutEventInput[]
    createMany?: EventVenueCreateManyEventInputEnvelope
    connect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventVenueUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventVenueCreateWithoutEventInput, EventVenueUncheckedCreateWithoutEventInput> | EventVenueCreateWithoutEventInput[] | EventVenueUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventVenueCreateOrConnectWithoutEventInput | EventVenueCreateOrConnectWithoutEventInput[]
    upsert?: EventVenueUpsertWithWhereUniqueWithoutEventInput | EventVenueUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventVenueCreateManyEventInputEnvelope
    set?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    disconnect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    delete?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    connect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    update?: EventVenueUpdateWithWhereUniqueWithoutEventInput | EventVenueUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventVenueUpdateManyWithWhereWithoutEventInput | EventVenueUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventVenueScalarWhereInput | EventVenueScalarWhereInput[]
  }

  export type EventVenueUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventVenueCreateWithoutEventInput, EventVenueUncheckedCreateWithoutEventInput> | EventVenueCreateWithoutEventInput[] | EventVenueUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventVenueCreateOrConnectWithoutEventInput | EventVenueCreateOrConnectWithoutEventInput[]
    upsert?: EventVenueUpsertWithWhereUniqueWithoutEventInput | EventVenueUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventVenueCreateManyEventInputEnvelope
    set?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    disconnect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    delete?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    connect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    update?: EventVenueUpdateWithWhereUniqueWithoutEventInput | EventVenueUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventVenueUpdateManyWithWhereWithoutEventInput | EventVenueUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventVenueScalarWhereInput | EventVenueScalarWhereInput[]
  }

  export type EventVenueCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventVenueCreateWithoutVenueInput, EventVenueUncheckedCreateWithoutVenueInput> | EventVenueCreateWithoutVenueInput[] | EventVenueUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventVenueCreateOrConnectWithoutVenueInput | EventVenueCreateOrConnectWithoutVenueInput[]
    createMany?: EventVenueCreateManyVenueInputEnvelope
    connect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
  }

  export type EventVenueUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventVenueCreateWithoutVenueInput, EventVenueUncheckedCreateWithoutVenueInput> | EventVenueCreateWithoutVenueInput[] | EventVenueUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventVenueCreateOrConnectWithoutVenueInput | EventVenueCreateOrConnectWithoutVenueInput[]
    createMany?: EventVenueCreateManyVenueInputEnvelope
    connect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
  }

  export type EventVenueUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventVenueCreateWithoutVenueInput, EventVenueUncheckedCreateWithoutVenueInput> | EventVenueCreateWithoutVenueInput[] | EventVenueUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventVenueCreateOrConnectWithoutVenueInput | EventVenueCreateOrConnectWithoutVenueInput[]
    upsert?: EventVenueUpsertWithWhereUniqueWithoutVenueInput | EventVenueUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventVenueCreateManyVenueInputEnvelope
    set?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    disconnect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    delete?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    connect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    update?: EventVenueUpdateWithWhereUniqueWithoutVenueInput | EventVenueUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventVenueUpdateManyWithWhereWithoutVenueInput | EventVenueUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventVenueScalarWhereInput | EventVenueScalarWhereInput[]
  }

  export type EventVenueUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventVenueCreateWithoutVenueInput, EventVenueUncheckedCreateWithoutVenueInput> | EventVenueCreateWithoutVenueInput[] | EventVenueUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventVenueCreateOrConnectWithoutVenueInput | EventVenueCreateOrConnectWithoutVenueInput[]
    upsert?: EventVenueUpsertWithWhereUniqueWithoutVenueInput | EventVenueUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventVenueCreateManyVenueInputEnvelope
    set?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    disconnect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    delete?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    connect?: EventVenueWhereUniqueInput | EventVenueWhereUniqueInput[]
    update?: EventVenueUpdateWithWhereUniqueWithoutVenueInput | EventVenueUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventVenueUpdateManyWithWhereWithoutVenueInput | EventVenueUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventVenueScalarWhereInput | EventVenueScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutEventVenueInput = {
    create?: XOR<EventCreateWithoutEventVenueInput, EventUncheckedCreateWithoutEventVenueInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventVenueInput
    connect?: EventWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutEventVenueInput = {
    create?: XOR<VenueCreateWithoutEventVenueInput, VenueUncheckedCreateWithoutEventVenueInput>
    connectOrCreate?: VenueCreateOrConnectWithoutEventVenueInput
    connect?: VenueWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutEventVenueNestedInput = {
    create?: XOR<EventCreateWithoutEventVenueInput, EventUncheckedCreateWithoutEventVenueInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventVenueInput
    upsert?: EventUpsertWithoutEventVenueInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventVenueInput, EventUpdateWithoutEventVenueInput>, EventUncheckedUpdateWithoutEventVenueInput>
  }

  export type VenueUpdateOneRequiredWithoutEventVenueNestedInput = {
    create?: XOR<VenueCreateWithoutEventVenueInput, VenueUncheckedCreateWithoutEventVenueInput>
    connectOrCreate?: VenueCreateOrConnectWithoutEventVenueInput
    upsert?: VenueUpsertWithoutEventVenueInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutEventVenueInput, VenueUpdateWithoutEventVenueInput>, VenueUncheckedUpdateWithoutEventVenueInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EventVenueCreateWithoutEventInput = {
    id?: string
    venue: VenueCreateNestedOneWithoutEventVenueInput
  }

  export type EventVenueUncheckedCreateWithoutEventInput = {
    id?: string
    venueId: string
  }

  export type EventVenueCreateOrConnectWithoutEventInput = {
    where: EventVenueWhereUniqueInput
    create: XOR<EventVenueCreateWithoutEventInput, EventVenueUncheckedCreateWithoutEventInput>
  }

  export type EventVenueCreateManyEventInputEnvelope = {
    data: EventVenueCreateManyEventInput | EventVenueCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventVenueUpsertWithWhereUniqueWithoutEventInput = {
    where: EventVenueWhereUniqueInput
    update: XOR<EventVenueUpdateWithoutEventInput, EventVenueUncheckedUpdateWithoutEventInput>
    create: XOR<EventVenueCreateWithoutEventInput, EventVenueUncheckedCreateWithoutEventInput>
  }

  export type EventVenueUpdateWithWhereUniqueWithoutEventInput = {
    where: EventVenueWhereUniqueInput
    data: XOR<EventVenueUpdateWithoutEventInput, EventVenueUncheckedUpdateWithoutEventInput>
  }

  export type EventVenueUpdateManyWithWhereWithoutEventInput = {
    where: EventVenueScalarWhereInput
    data: XOR<EventVenueUpdateManyMutationInput, EventVenueUncheckedUpdateManyWithoutEventInput>
  }

  export type EventVenueScalarWhereInput = {
    AND?: EventVenueScalarWhereInput | EventVenueScalarWhereInput[]
    OR?: EventVenueScalarWhereInput[]
    NOT?: EventVenueScalarWhereInput | EventVenueScalarWhereInput[]
    id?: StringFilter<"EventVenue"> | string
    eventId?: StringFilter<"EventVenue"> | string
    venueId?: StringFilter<"EventVenue"> | string
  }

  export type EventVenueCreateWithoutVenueInput = {
    id?: string
    event: EventCreateNestedOneWithoutEventVenueInput
  }

  export type EventVenueUncheckedCreateWithoutVenueInput = {
    id?: string
    eventId: string
  }

  export type EventVenueCreateOrConnectWithoutVenueInput = {
    where: EventVenueWhereUniqueInput
    create: XOR<EventVenueCreateWithoutVenueInput, EventVenueUncheckedCreateWithoutVenueInput>
  }

  export type EventVenueCreateManyVenueInputEnvelope = {
    data: EventVenueCreateManyVenueInput | EventVenueCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type EventVenueUpsertWithWhereUniqueWithoutVenueInput = {
    where: EventVenueWhereUniqueInput
    update: XOR<EventVenueUpdateWithoutVenueInput, EventVenueUncheckedUpdateWithoutVenueInput>
    create: XOR<EventVenueCreateWithoutVenueInput, EventVenueUncheckedCreateWithoutVenueInput>
  }

  export type EventVenueUpdateWithWhereUniqueWithoutVenueInput = {
    where: EventVenueWhereUniqueInput
    data: XOR<EventVenueUpdateWithoutVenueInput, EventVenueUncheckedUpdateWithoutVenueInput>
  }

  export type EventVenueUpdateManyWithWhereWithoutVenueInput = {
    where: EventVenueScalarWhereInput
    data: XOR<EventVenueUpdateManyMutationInput, EventVenueUncheckedUpdateManyWithoutVenueInput>
  }

  export type EventCreateWithoutEventVenueInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateWithoutEventVenueInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutEventVenueInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventVenueInput, EventUncheckedCreateWithoutEventVenueInput>
  }

  export type VenueCreateWithoutEventVenueInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt?: Date | string
  }

  export type VenueUncheckedCreateWithoutEventVenueInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt?: Date | string
  }

  export type VenueCreateOrConnectWithoutEventVenueInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutEventVenueInput, VenueUncheckedCreateWithoutEventVenueInput>
  }

  export type EventUpsertWithoutEventVenueInput = {
    update: XOR<EventUpdateWithoutEventVenueInput, EventUncheckedUpdateWithoutEventVenueInput>
    create: XOR<EventCreateWithoutEventVenueInput, EventUncheckedCreateWithoutEventVenueInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventVenueInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventVenueInput, EventUncheckedUpdateWithoutEventVenueInput>
  }

  export type EventUpdateWithoutEventVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutEventVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueUpsertWithoutEventVenueInput = {
    update: XOR<VenueUpdateWithoutEventVenueInput, VenueUncheckedUpdateWithoutEventVenueInput>
    create: XOR<VenueCreateWithoutEventVenueInput, VenueUncheckedCreateWithoutEventVenueInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutEventVenueInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutEventVenueInput, VenueUncheckedUpdateWithoutEventVenueInput>
  }

  export type VenueUpdateWithoutEventVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueUncheckedUpdateWithoutEventVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventVenueCreateManyEventInput = {
    id?: string
    venueId: string
  }

  export type EventVenueUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    venue?: VenueUpdateOneRequiredWithoutEventVenueNestedInput
  }

  export type EventVenueUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
  }

  export type EventVenueUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
  }

  export type EventVenueCreateManyVenueInput = {
    id?: string
    eventId: string
  }

  export type EventVenueUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutEventVenueNestedInput
  }

  export type EventVenueUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type EventVenueUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}