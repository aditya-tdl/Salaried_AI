
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model subscription_plan
 * 
 */
export type subscription_plan = $Result.DefaultSelection<Prisma.$subscription_planPayload>
/**
 * Model webinars
 * 
 */
export type webinars = $Result.DefaultSelection<Prisma.$webinarsPayload>
/**
 * Model user_webinar
 * 
 */
export type user_webinar = $Result.DefaultSelection<Prisma.$user_webinarPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const subscription_status: {
  CREATED: 'CREATED',
  AUTHENTICATED: 'AUTHENTICATED',
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type subscription_status = (typeof subscription_status)[keyof typeof subscription_status]


export const role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type role = (typeof role)[keyof typeof role]


export const WebinarType: {
  Free: 'Free',
  Paid: 'Paid'
};

export type WebinarType = (typeof WebinarType)[keyof typeof WebinarType]


export const WebinarRegistrationStatus: {
  REGISTERED: 'REGISTERED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type WebinarRegistrationStatus = (typeof WebinarRegistrationStatus)[keyof typeof WebinarRegistrationStatus]

}

export type subscription_status = $Enums.subscription_status

export const subscription_status: typeof $Enums.subscription_status

export type role = $Enums.role

export const role: typeof $Enums.role

export type WebinarType = $Enums.WebinarType

export const WebinarType: typeof $Enums.WebinarType

export type WebinarRegistrationStatus = $Enums.WebinarRegistrationStatus

export const WebinarRegistrationStatus: typeof $Enums.WebinarRegistrationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription_plan`: Exposes CRUD operations for the **subscription_plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscription_plans
    * const subscription_plans = await prisma.subscription_plan.findMany()
    * ```
    */
  get subscription_plan(): Prisma.subscription_planDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webinars`: Exposes CRUD operations for the **webinars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webinars
    * const webinars = await prisma.webinars.findMany()
    * ```
    */
  get webinars(): Prisma.webinarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_webinar`: Exposes CRUD operations for the **user_webinar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_webinars
    * const user_webinars = await prisma.user_webinar.findMany()
    * ```
    */
  get user_webinar(): Prisma.user_webinarDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    user: 'user',
    subscription_plan: 'subscription_plan',
    webinars: 'webinars',
    user_webinar: 'user_webinar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "subscription_plan" | "webinars" | "user_webinar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      subscription_plan: {
        payload: Prisma.$subscription_planPayload<ExtArgs>
        fields: Prisma.subscription_planFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subscription_planFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subscription_planFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload>
          }
          findFirst: {
            args: Prisma.subscription_planFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subscription_planFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload>
          }
          findMany: {
            args: Prisma.subscription_planFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload>[]
          }
          create: {
            args: Prisma.subscription_planCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload>
          }
          createMany: {
            args: Prisma.subscription_planCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subscription_planCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload>[]
          }
          delete: {
            args: Prisma.subscription_planDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload>
          }
          update: {
            args: Prisma.subscription_planUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload>
          }
          deleteMany: {
            args: Prisma.subscription_planDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subscription_planUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subscription_planUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload>[]
          }
          upsert: {
            args: Prisma.subscription_planUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscription_planPayload>
          }
          aggregate: {
            args: Prisma.Subscription_planAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription_plan>
          }
          groupBy: {
            args: Prisma.subscription_planGroupByArgs<ExtArgs>
            result: $Utils.Optional<Subscription_planGroupByOutputType>[]
          }
          count: {
            args: Prisma.subscription_planCountArgs<ExtArgs>
            result: $Utils.Optional<Subscription_planCountAggregateOutputType> | number
          }
        }
      }
      webinars: {
        payload: Prisma.$webinarsPayload<ExtArgs>
        fields: Prisma.webinarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.webinarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.webinarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload>
          }
          findFirst: {
            args: Prisma.webinarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.webinarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload>
          }
          findMany: {
            args: Prisma.webinarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload>[]
          }
          create: {
            args: Prisma.webinarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload>
          }
          createMany: {
            args: Prisma.webinarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.webinarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload>[]
          }
          delete: {
            args: Prisma.webinarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload>
          }
          update: {
            args: Prisma.webinarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload>
          }
          deleteMany: {
            args: Prisma.webinarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.webinarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.webinarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload>[]
          }
          upsert: {
            args: Prisma.webinarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webinarsPayload>
          }
          aggregate: {
            args: Prisma.WebinarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebinars>
          }
          groupBy: {
            args: Prisma.webinarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebinarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.webinarsCountArgs<ExtArgs>
            result: $Utils.Optional<WebinarsCountAggregateOutputType> | number
          }
        }
      }
      user_webinar: {
        payload: Prisma.$user_webinarPayload<ExtArgs>
        fields: Prisma.user_webinarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_webinarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_webinarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload>
          }
          findFirst: {
            args: Prisma.user_webinarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_webinarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload>
          }
          findMany: {
            args: Prisma.user_webinarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload>[]
          }
          create: {
            args: Prisma.user_webinarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload>
          }
          createMany: {
            args: Prisma.user_webinarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_webinarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload>[]
          }
          delete: {
            args: Prisma.user_webinarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload>
          }
          update: {
            args: Prisma.user_webinarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload>
          }
          deleteMany: {
            args: Prisma.user_webinarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_webinarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_webinarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload>[]
          }
          upsert: {
            args: Prisma.user_webinarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_webinarPayload>
          }
          aggregate: {
            args: Prisma.User_webinarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_webinar>
          }
          groupBy: {
            args: Prisma.user_webinarGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_webinarGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_webinarCountArgs<ExtArgs>
            result: $Utils.Optional<User_webinarCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    subscription_plan?: subscription_planOmit
    webinars?: webinarsOmit
    user_webinar?: user_webinarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user_webinars: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_webinars?: boolean | UserCountOutputTypeCountUser_webinarsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_webinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_webinarWhereInput
  }


  /**
   * Count Type WebinarsCountOutputType
   */

  export type WebinarsCountOutputType = {
    user_webinars: number
  }

  export type WebinarsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_webinars?: boolean | WebinarsCountOutputTypeCountUser_webinarsArgs
  }

  // Custom InputTypes
  /**
   * WebinarsCountOutputType without action
   */
  export type WebinarsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarsCountOutputType
     */
    select?: WebinarsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebinarsCountOutputType without action
   */
  export type WebinarsCountOutputTypeCountUser_webinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_webinarWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: string | null
    mobile: string | null
    password: string | null
    role: $Enums.role | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: string | null
    mobile: string | null
    password: string | null
    role: $Enums.role | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    gender: number
    mobile: number
    password: number
    role: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    mobile?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    mobile?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    mobile?: true
    password?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role: $Enums.role
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    mobile?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    subscription?: boolean | user$subscriptionArgs<ExtArgs>
    user_webinars?: boolean | user$user_webinarsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    mobile?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    mobile?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    mobile?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "gender" | "mobile" | "password" | "role" | "created_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | user$subscriptionArgs<ExtArgs>
    user_webinars?: boolean | user$user_webinarsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      subscription: Prisma.$subscription_planPayload<ExtArgs> | null
      user_webinars: Prisma.$user_webinarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      gender: string
      mobile: string
      password: string
      role: $Enums.role
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends user$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, user$subscriptionArgs<ExtArgs>>): Prisma__subscription_planClient<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_webinars<T extends user$user_webinarsArgs<ExtArgs> = {}>(args?: Subset<T, user$user_webinarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly gender: FieldRef<"user", 'String'>
    readonly mobile: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'role'>
    readonly created_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.subscription
   */
  export type user$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
    where?: subscription_planWhereInput
  }

  /**
   * user.user_webinars
   */
  export type user$user_webinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    where?: user_webinarWhereInput
    orderBy?: user_webinarOrderByWithRelationInput | user_webinarOrderByWithRelationInput[]
    cursor?: user_webinarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_webinarScalarFieldEnum | User_webinarScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model subscription_plan
   */

  export type AggregateSubscription_plan = {
    _count: Subscription_planCountAggregateOutputType | null
    _avg: Subscription_planAvgAggregateOutputType | null
    _sum: Subscription_planSumAggregateOutputType | null
    _min: Subscription_planMinAggregateOutputType | null
    _max: Subscription_planMaxAggregateOutputType | null
  }

  export type Subscription_planAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Subscription_planSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Subscription_planMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    razorpay_plan_id: string | null
    razorpay_subscription_id: string | null
    razorpay_customer_id: string | null
    status: $Enums.subscription_status | null
    start_at: Date | null
    end_at: Date | null
    next_charge_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Subscription_planMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    razorpay_plan_id: string | null
    razorpay_subscription_id: string | null
    razorpay_customer_id: string | null
    status: $Enums.subscription_status | null
    start_at: Date | null
    end_at: Date | null
    next_charge_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Subscription_planCountAggregateOutputType = {
    id: number
    user_id: number
    razorpay_plan_id: number
    razorpay_subscription_id: number
    razorpay_customer_id: number
    status: number
    start_at: number
    end_at: number
    next_charge_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Subscription_planAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Subscription_planSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Subscription_planMinAggregateInputType = {
    id?: true
    user_id?: true
    razorpay_plan_id?: true
    razorpay_subscription_id?: true
    razorpay_customer_id?: true
    status?: true
    start_at?: true
    end_at?: true
    next_charge_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Subscription_planMaxAggregateInputType = {
    id?: true
    user_id?: true
    razorpay_plan_id?: true
    razorpay_subscription_id?: true
    razorpay_customer_id?: true
    status?: true
    start_at?: true
    end_at?: true
    next_charge_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Subscription_planCountAggregateInputType = {
    id?: true
    user_id?: true
    razorpay_plan_id?: true
    razorpay_subscription_id?: true
    razorpay_customer_id?: true
    status?: true
    start_at?: true
    end_at?: true
    next_charge_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Subscription_planAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscription_plan to aggregate.
     */
    where?: subscription_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscription_plans to fetch.
     */
    orderBy?: subscription_planOrderByWithRelationInput | subscription_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subscription_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscription_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscription_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subscription_plans
    **/
    _count?: true | Subscription_planCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Subscription_planAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Subscription_planSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Subscription_planMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Subscription_planMaxAggregateInputType
  }

  export type GetSubscription_planAggregateType<T extends Subscription_planAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription_plan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription_plan[P]>
      : GetScalarType<T[P], AggregateSubscription_plan[P]>
  }




  export type subscription_planGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscription_planWhereInput
    orderBy?: subscription_planOrderByWithAggregationInput | subscription_planOrderByWithAggregationInput[]
    by: Subscription_planScalarFieldEnum[] | Subscription_planScalarFieldEnum
    having?: subscription_planScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Subscription_planCountAggregateInputType | true
    _avg?: Subscription_planAvgAggregateInputType
    _sum?: Subscription_planSumAggregateInputType
    _min?: Subscription_planMinAggregateInputType
    _max?: Subscription_planMaxAggregateInputType
  }

  export type Subscription_planGroupByOutputType = {
    id: number
    user_id: number
    razorpay_plan_id: string
    razorpay_subscription_id: string
    razorpay_customer_id: string | null
    status: $Enums.subscription_status
    start_at: Date | null
    end_at: Date | null
    next_charge_at: Date | null
    created_at: Date
    updated_at: Date
    _count: Subscription_planCountAggregateOutputType | null
    _avg: Subscription_planAvgAggregateOutputType | null
    _sum: Subscription_planSumAggregateOutputType | null
    _min: Subscription_planMinAggregateOutputType | null
    _max: Subscription_planMaxAggregateOutputType | null
  }

  type GetSubscription_planGroupByPayload<T extends subscription_planGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Subscription_planGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Subscription_planGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Subscription_planGroupByOutputType[P]>
            : GetScalarType<T[P], Subscription_planGroupByOutputType[P]>
        }
      >
    >


  export type subscription_planSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    razorpay_plan_id?: boolean
    razorpay_subscription_id?: boolean
    razorpay_customer_id?: boolean
    status?: boolean
    start_at?: boolean
    end_at?: boolean
    next_charge_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription_plan"]>

  export type subscription_planSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    razorpay_plan_id?: boolean
    razorpay_subscription_id?: boolean
    razorpay_customer_id?: boolean
    status?: boolean
    start_at?: boolean
    end_at?: boolean
    next_charge_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription_plan"]>

  export type subscription_planSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    razorpay_plan_id?: boolean
    razorpay_subscription_id?: boolean
    razorpay_customer_id?: boolean
    status?: boolean
    start_at?: boolean
    end_at?: boolean
    next_charge_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription_plan"]>

  export type subscription_planSelectScalar = {
    id?: boolean
    user_id?: boolean
    razorpay_plan_id?: boolean
    razorpay_subscription_id?: boolean
    razorpay_customer_id?: boolean
    status?: boolean
    start_at?: boolean
    end_at?: boolean
    next_charge_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type subscription_planOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "razorpay_plan_id" | "razorpay_subscription_id" | "razorpay_customer_id" | "status" | "start_at" | "end_at" | "next_charge_at" | "created_at" | "updated_at", ExtArgs["result"]["subscription_plan"]>
  export type subscription_planInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type subscription_planIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type subscription_planIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $subscription_planPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subscription_plan"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      razorpay_plan_id: string
      razorpay_subscription_id: string
      razorpay_customer_id: string | null
      status: $Enums.subscription_status
      start_at: Date | null
      end_at: Date | null
      next_charge_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["subscription_plan"]>
    composites: {}
  }

  type subscription_planGetPayload<S extends boolean | null | undefined | subscription_planDefaultArgs> = $Result.GetResult<Prisma.$subscription_planPayload, S>

  type subscription_planCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subscription_planFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Subscription_planCountAggregateInputType | true
    }

  export interface subscription_planDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subscription_plan'], meta: { name: 'subscription_plan' } }
    /**
     * Find zero or one Subscription_plan that matches the filter.
     * @param {subscription_planFindUniqueArgs} args - Arguments to find a Subscription_plan
     * @example
     * // Get one Subscription_plan
     * const subscription_plan = await prisma.subscription_plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subscription_planFindUniqueArgs>(args: SelectSubset<T, subscription_planFindUniqueArgs<ExtArgs>>): Prisma__subscription_planClient<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription_plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subscription_planFindUniqueOrThrowArgs} args - Arguments to find a Subscription_plan
     * @example
     * // Get one Subscription_plan
     * const subscription_plan = await prisma.subscription_plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subscription_planFindUniqueOrThrowArgs>(args: SelectSubset<T, subscription_planFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subscription_planClient<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription_plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_planFindFirstArgs} args - Arguments to find a Subscription_plan
     * @example
     * // Get one Subscription_plan
     * const subscription_plan = await prisma.subscription_plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subscription_planFindFirstArgs>(args?: SelectSubset<T, subscription_planFindFirstArgs<ExtArgs>>): Prisma__subscription_planClient<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription_plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_planFindFirstOrThrowArgs} args - Arguments to find a Subscription_plan
     * @example
     * // Get one Subscription_plan
     * const subscription_plan = await prisma.subscription_plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subscription_planFindFirstOrThrowArgs>(args?: SelectSubset<T, subscription_planFindFirstOrThrowArgs<ExtArgs>>): Prisma__subscription_planClient<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscription_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_planFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscription_plans
     * const subscription_plans = await prisma.subscription_plan.findMany()
     * 
     * // Get first 10 Subscription_plans
     * const subscription_plans = await prisma.subscription_plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscription_planWithIdOnly = await prisma.subscription_plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subscription_planFindManyArgs>(args?: SelectSubset<T, subscription_planFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription_plan.
     * @param {subscription_planCreateArgs} args - Arguments to create a Subscription_plan.
     * @example
     * // Create one Subscription_plan
     * const Subscription_plan = await prisma.subscription_plan.create({
     *   data: {
     *     // ... data to create a Subscription_plan
     *   }
     * })
     * 
     */
    create<T extends subscription_planCreateArgs>(args: SelectSubset<T, subscription_planCreateArgs<ExtArgs>>): Prisma__subscription_planClient<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscription_plans.
     * @param {subscription_planCreateManyArgs} args - Arguments to create many Subscription_plans.
     * @example
     * // Create many Subscription_plans
     * const subscription_plan = await prisma.subscription_plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subscription_planCreateManyArgs>(args?: SelectSubset<T, subscription_planCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscription_plans and returns the data saved in the database.
     * @param {subscription_planCreateManyAndReturnArgs} args - Arguments to create many Subscription_plans.
     * @example
     * // Create many Subscription_plans
     * const subscription_plan = await prisma.subscription_plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscription_plans and only return the `id`
     * const subscription_planWithIdOnly = await prisma.subscription_plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subscription_planCreateManyAndReturnArgs>(args?: SelectSubset<T, subscription_planCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription_plan.
     * @param {subscription_planDeleteArgs} args - Arguments to delete one Subscription_plan.
     * @example
     * // Delete one Subscription_plan
     * const Subscription_plan = await prisma.subscription_plan.delete({
     *   where: {
     *     // ... filter to delete one Subscription_plan
     *   }
     * })
     * 
     */
    delete<T extends subscription_planDeleteArgs>(args: SelectSubset<T, subscription_planDeleteArgs<ExtArgs>>): Prisma__subscription_planClient<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription_plan.
     * @param {subscription_planUpdateArgs} args - Arguments to update one Subscription_plan.
     * @example
     * // Update one Subscription_plan
     * const subscription_plan = await prisma.subscription_plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subscription_planUpdateArgs>(args: SelectSubset<T, subscription_planUpdateArgs<ExtArgs>>): Prisma__subscription_planClient<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscription_plans.
     * @param {subscription_planDeleteManyArgs} args - Arguments to filter Subscription_plans to delete.
     * @example
     * // Delete a few Subscription_plans
     * const { count } = await prisma.subscription_plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subscription_planDeleteManyArgs>(args?: SelectSubset<T, subscription_planDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscription_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_planUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscription_plans
     * const subscription_plan = await prisma.subscription_plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subscription_planUpdateManyArgs>(args: SelectSubset<T, subscription_planUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscription_plans and returns the data updated in the database.
     * @param {subscription_planUpdateManyAndReturnArgs} args - Arguments to update many Subscription_plans.
     * @example
     * // Update many Subscription_plans
     * const subscription_plan = await prisma.subscription_plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscription_plans and only return the `id`
     * const subscription_planWithIdOnly = await prisma.subscription_plan.updateManyAndReturn({
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
    updateManyAndReturn<T extends subscription_planUpdateManyAndReturnArgs>(args: SelectSubset<T, subscription_planUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription_plan.
     * @param {subscription_planUpsertArgs} args - Arguments to update or create a Subscription_plan.
     * @example
     * // Update or create a Subscription_plan
     * const subscription_plan = await prisma.subscription_plan.upsert({
     *   create: {
     *     // ... data to create a Subscription_plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription_plan we want to update
     *   }
     * })
     */
    upsert<T extends subscription_planUpsertArgs>(args: SelectSubset<T, subscription_planUpsertArgs<ExtArgs>>): Prisma__subscription_planClient<$Result.GetResult<Prisma.$subscription_planPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscription_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_planCountArgs} args - Arguments to filter Subscription_plans to count.
     * @example
     * // Count the number of Subscription_plans
     * const count = await prisma.subscription_plan.count({
     *   where: {
     *     // ... the filter for the Subscription_plans we want to count
     *   }
     * })
    **/
    count<T extends subscription_planCountArgs>(
      args?: Subset<T, subscription_planCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Subscription_planCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subscription_planAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Subscription_planAggregateArgs>(args: Subset<T, Subscription_planAggregateArgs>): Prisma.PrismaPromise<GetSubscription_planAggregateType<T>>

    /**
     * Group by Subscription_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_planGroupByArgs} args - Group by arguments.
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
      T extends subscription_planGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscription_planGroupByArgs['orderBy'] }
        : { orderBy?: subscription_planGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subscription_planGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscription_planGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subscription_plan model
   */
  readonly fields: subscription_planFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscription_plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscription_planClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the subscription_plan model
   */
  interface subscription_planFieldRefs {
    readonly id: FieldRef<"subscription_plan", 'Int'>
    readonly user_id: FieldRef<"subscription_plan", 'Int'>
    readonly razorpay_plan_id: FieldRef<"subscription_plan", 'String'>
    readonly razorpay_subscription_id: FieldRef<"subscription_plan", 'String'>
    readonly razorpay_customer_id: FieldRef<"subscription_plan", 'String'>
    readonly status: FieldRef<"subscription_plan", 'subscription_status'>
    readonly start_at: FieldRef<"subscription_plan", 'DateTime'>
    readonly end_at: FieldRef<"subscription_plan", 'DateTime'>
    readonly next_charge_at: FieldRef<"subscription_plan", 'DateTime'>
    readonly created_at: FieldRef<"subscription_plan", 'DateTime'>
    readonly updated_at: FieldRef<"subscription_plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subscription_plan findUnique
   */
  export type subscription_planFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
    /**
     * Filter, which subscription_plan to fetch.
     */
    where: subscription_planWhereUniqueInput
  }

  /**
   * subscription_plan findUniqueOrThrow
   */
  export type subscription_planFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
    /**
     * Filter, which subscription_plan to fetch.
     */
    where: subscription_planWhereUniqueInput
  }

  /**
   * subscription_plan findFirst
   */
  export type subscription_planFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
    /**
     * Filter, which subscription_plan to fetch.
     */
    where?: subscription_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscription_plans to fetch.
     */
    orderBy?: subscription_planOrderByWithRelationInput | subscription_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscription_plans.
     */
    cursor?: subscription_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscription_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscription_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscription_plans.
     */
    distinct?: Subscription_planScalarFieldEnum | Subscription_planScalarFieldEnum[]
  }

  /**
   * subscription_plan findFirstOrThrow
   */
  export type subscription_planFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
    /**
     * Filter, which subscription_plan to fetch.
     */
    where?: subscription_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscription_plans to fetch.
     */
    orderBy?: subscription_planOrderByWithRelationInput | subscription_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscription_plans.
     */
    cursor?: subscription_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscription_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscription_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscription_plans.
     */
    distinct?: Subscription_planScalarFieldEnum | Subscription_planScalarFieldEnum[]
  }

  /**
   * subscription_plan findMany
   */
  export type subscription_planFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
    /**
     * Filter, which subscription_plans to fetch.
     */
    where?: subscription_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscription_plans to fetch.
     */
    orderBy?: subscription_planOrderByWithRelationInput | subscription_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subscription_plans.
     */
    cursor?: subscription_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscription_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscription_plans.
     */
    skip?: number
    distinct?: Subscription_planScalarFieldEnum | Subscription_planScalarFieldEnum[]
  }

  /**
   * subscription_plan create
   */
  export type subscription_planCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
    /**
     * The data needed to create a subscription_plan.
     */
    data: XOR<subscription_planCreateInput, subscription_planUncheckedCreateInput>
  }

  /**
   * subscription_plan createMany
   */
  export type subscription_planCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscription_plans.
     */
    data: subscription_planCreateManyInput | subscription_planCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subscription_plan createManyAndReturn
   */
  export type subscription_planCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * The data used to create many subscription_plans.
     */
    data: subscription_planCreateManyInput | subscription_planCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subscription_plan update
   */
  export type subscription_planUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
    /**
     * The data needed to update a subscription_plan.
     */
    data: XOR<subscription_planUpdateInput, subscription_planUncheckedUpdateInput>
    /**
     * Choose, which subscription_plan to update.
     */
    where: subscription_planWhereUniqueInput
  }

  /**
   * subscription_plan updateMany
   */
  export type subscription_planUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscription_plans.
     */
    data: XOR<subscription_planUpdateManyMutationInput, subscription_planUncheckedUpdateManyInput>
    /**
     * Filter which subscription_plans to update
     */
    where?: subscription_planWhereInput
    /**
     * Limit how many subscription_plans to update.
     */
    limit?: number
  }

  /**
   * subscription_plan updateManyAndReturn
   */
  export type subscription_planUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * The data used to update subscription_plans.
     */
    data: XOR<subscription_planUpdateManyMutationInput, subscription_planUncheckedUpdateManyInput>
    /**
     * Filter which subscription_plans to update
     */
    where?: subscription_planWhereInput
    /**
     * Limit how many subscription_plans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subscription_plan upsert
   */
  export type subscription_planUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
    /**
     * The filter to search for the subscription_plan to update in case it exists.
     */
    where: subscription_planWhereUniqueInput
    /**
     * In case the subscription_plan found by the `where` argument doesn't exist, create a new subscription_plan with this data.
     */
    create: XOR<subscription_planCreateInput, subscription_planUncheckedCreateInput>
    /**
     * In case the subscription_plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscription_planUpdateInput, subscription_planUncheckedUpdateInput>
  }

  /**
   * subscription_plan delete
   */
  export type subscription_planDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
    /**
     * Filter which subscription_plan to delete.
     */
    where: subscription_planWhereUniqueInput
  }

  /**
   * subscription_plan deleteMany
   */
  export type subscription_planDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscription_plans to delete
     */
    where?: subscription_planWhereInput
    /**
     * Limit how many subscription_plans to delete.
     */
    limit?: number
  }

  /**
   * subscription_plan without action
   */
  export type subscription_planDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plan
     */
    select?: subscription_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription_plan
     */
    omit?: subscription_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscription_planInclude<ExtArgs> | null
  }


  /**
   * Model webinars
   */

  export type AggregateWebinars = {
    _count: WebinarsCountAggregateOutputType | null
    _avg: WebinarsAvgAggregateOutputType | null
    _sum: WebinarsSumAggregateOutputType | null
    _min: WebinarsMinAggregateOutputType | null
    _max: WebinarsMaxAggregateOutputType | null
  }

  export type WebinarsAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    price: Decimal | null
    capacity: number | null
  }

  export type WebinarsSumAggregateOutputType = {
    id: bigint | null
    duration: number | null
    price: Decimal | null
    capacity: number | null
  }

  export type WebinarsMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    agenda: string | null
    speakers: string | null
    duration: number | null
    platform: string | null
    link: string | null
    type: $Enums.WebinarType | null
    price: Decimal | null
    capacity: number | null
    created_at: Date | null
    image_key: string | null
    image_url: string | null
    updated_at: Date | null
    webinar_date: Date | null
    webinar_time: Date | null
  }

  export type WebinarsMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    agenda: string | null
    speakers: string | null
    duration: number | null
    platform: string | null
    link: string | null
    type: $Enums.WebinarType | null
    price: Decimal | null
    capacity: number | null
    created_at: Date | null
    image_key: string | null
    image_url: string | null
    updated_at: Date | null
    webinar_date: Date | null
    webinar_time: Date | null
  }

  export type WebinarsCountAggregateOutputType = {
    id: number
    title: number
    agenda: number
    speakers: number
    duration: number
    platform: number
    link: number
    type: number
    price: number
    capacity: number
    created_at: number
    image_key: number
    image_url: number
    updated_at: number
    webinar_date: number
    webinar_time: number
    _all: number
  }


  export type WebinarsAvgAggregateInputType = {
    id?: true
    duration?: true
    price?: true
    capacity?: true
  }

  export type WebinarsSumAggregateInputType = {
    id?: true
    duration?: true
    price?: true
    capacity?: true
  }

  export type WebinarsMinAggregateInputType = {
    id?: true
    title?: true
    agenda?: true
    speakers?: true
    duration?: true
    platform?: true
    link?: true
    type?: true
    price?: true
    capacity?: true
    created_at?: true
    image_key?: true
    image_url?: true
    updated_at?: true
    webinar_date?: true
    webinar_time?: true
  }

  export type WebinarsMaxAggregateInputType = {
    id?: true
    title?: true
    agenda?: true
    speakers?: true
    duration?: true
    platform?: true
    link?: true
    type?: true
    price?: true
    capacity?: true
    created_at?: true
    image_key?: true
    image_url?: true
    updated_at?: true
    webinar_date?: true
    webinar_time?: true
  }

  export type WebinarsCountAggregateInputType = {
    id?: true
    title?: true
    agenda?: true
    speakers?: true
    duration?: true
    platform?: true
    link?: true
    type?: true
    price?: true
    capacity?: true
    created_at?: true
    image_key?: true
    image_url?: true
    updated_at?: true
    webinar_date?: true
    webinar_time?: true
    _all?: true
  }

  export type WebinarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webinars to aggregate.
     */
    where?: webinarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webinars to fetch.
     */
    orderBy?: webinarsOrderByWithRelationInput | webinarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: webinarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webinars
    **/
    _count?: true | WebinarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebinarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebinarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebinarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebinarsMaxAggregateInputType
  }

  export type GetWebinarsAggregateType<T extends WebinarsAggregateArgs> = {
        [P in keyof T & keyof AggregateWebinars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebinars[P]>
      : GetScalarType<T[P], AggregateWebinars[P]>
  }




  export type webinarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webinarsWhereInput
    orderBy?: webinarsOrderByWithAggregationInput | webinarsOrderByWithAggregationInput[]
    by: WebinarsScalarFieldEnum[] | WebinarsScalarFieldEnum
    having?: webinarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebinarsCountAggregateInputType | true
    _avg?: WebinarsAvgAggregateInputType
    _sum?: WebinarsSumAggregateInputType
    _min?: WebinarsMinAggregateInputType
    _max?: WebinarsMaxAggregateInputType
  }

  export type WebinarsGroupByOutputType = {
    id: bigint
    title: string
    agenda: string | null
    speakers: string | null
    duration: number
    platform: string
    link: string | null
    type: $Enums.WebinarType
    price: Decimal | null
    capacity: number
    created_at: Date
    image_key: string | null
    image_url: string | null
    updated_at: Date
    webinar_date: Date
    webinar_time: Date
    _count: WebinarsCountAggregateOutputType | null
    _avg: WebinarsAvgAggregateOutputType | null
    _sum: WebinarsSumAggregateOutputType | null
    _min: WebinarsMinAggregateOutputType | null
    _max: WebinarsMaxAggregateOutputType | null
  }

  type GetWebinarsGroupByPayload<T extends webinarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebinarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebinarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebinarsGroupByOutputType[P]>
            : GetScalarType<T[P], WebinarsGroupByOutputType[P]>
        }
      >
    >


  export type webinarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    agenda?: boolean
    speakers?: boolean
    duration?: boolean
    platform?: boolean
    link?: boolean
    type?: boolean
    price?: boolean
    capacity?: boolean
    created_at?: boolean
    image_key?: boolean
    image_url?: boolean
    updated_at?: boolean
    webinar_date?: boolean
    webinar_time?: boolean
    user_webinars?: boolean | webinars$user_webinarsArgs<ExtArgs>
    _count?: boolean | WebinarsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinars"]>

  export type webinarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    agenda?: boolean
    speakers?: boolean
    duration?: boolean
    platform?: boolean
    link?: boolean
    type?: boolean
    price?: boolean
    capacity?: boolean
    created_at?: boolean
    image_key?: boolean
    image_url?: boolean
    updated_at?: boolean
    webinar_date?: boolean
    webinar_time?: boolean
  }, ExtArgs["result"]["webinars"]>

  export type webinarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    agenda?: boolean
    speakers?: boolean
    duration?: boolean
    platform?: boolean
    link?: boolean
    type?: boolean
    price?: boolean
    capacity?: boolean
    created_at?: boolean
    image_key?: boolean
    image_url?: boolean
    updated_at?: boolean
    webinar_date?: boolean
    webinar_time?: boolean
  }, ExtArgs["result"]["webinars"]>

  export type webinarsSelectScalar = {
    id?: boolean
    title?: boolean
    agenda?: boolean
    speakers?: boolean
    duration?: boolean
    platform?: boolean
    link?: boolean
    type?: boolean
    price?: boolean
    capacity?: boolean
    created_at?: boolean
    image_key?: boolean
    image_url?: boolean
    updated_at?: boolean
    webinar_date?: boolean
    webinar_time?: boolean
  }

  export type webinarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "agenda" | "speakers" | "duration" | "platform" | "link" | "type" | "price" | "capacity" | "created_at" | "image_key" | "image_url" | "updated_at" | "webinar_date" | "webinar_time", ExtArgs["result"]["webinars"]>
  export type webinarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_webinars?: boolean | webinars$user_webinarsArgs<ExtArgs>
    _count?: boolean | WebinarsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type webinarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type webinarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $webinarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "webinars"
    objects: {
      user_webinars: Prisma.$user_webinarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      agenda: string | null
      speakers: string | null
      duration: number
      platform: string
      link: string | null
      type: $Enums.WebinarType
      price: Prisma.Decimal | null
      capacity: number
      created_at: Date
      image_key: string | null
      image_url: string | null
      updated_at: Date
      webinar_date: Date
      webinar_time: Date
    }, ExtArgs["result"]["webinars"]>
    composites: {}
  }

  type webinarsGetPayload<S extends boolean | null | undefined | webinarsDefaultArgs> = $Result.GetResult<Prisma.$webinarsPayload, S>

  type webinarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<webinarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebinarsCountAggregateInputType | true
    }

  export interface webinarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['webinars'], meta: { name: 'webinars' } }
    /**
     * Find zero or one Webinars that matches the filter.
     * @param {webinarsFindUniqueArgs} args - Arguments to find a Webinars
     * @example
     * // Get one Webinars
     * const webinars = await prisma.webinars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends webinarsFindUniqueArgs>(args: SelectSubset<T, webinarsFindUniqueArgs<ExtArgs>>): Prisma__webinarsClient<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Webinars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {webinarsFindUniqueOrThrowArgs} args - Arguments to find a Webinars
     * @example
     * // Get one Webinars
     * const webinars = await prisma.webinars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends webinarsFindUniqueOrThrowArgs>(args: SelectSubset<T, webinarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__webinarsClient<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webinars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webinarsFindFirstArgs} args - Arguments to find a Webinars
     * @example
     * // Get one Webinars
     * const webinars = await prisma.webinars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends webinarsFindFirstArgs>(args?: SelectSubset<T, webinarsFindFirstArgs<ExtArgs>>): Prisma__webinarsClient<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webinars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webinarsFindFirstOrThrowArgs} args - Arguments to find a Webinars
     * @example
     * // Get one Webinars
     * const webinars = await prisma.webinars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends webinarsFindFirstOrThrowArgs>(args?: SelectSubset<T, webinarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__webinarsClient<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Webinars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webinarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webinars
     * const webinars = await prisma.webinars.findMany()
     * 
     * // Get first 10 Webinars
     * const webinars = await prisma.webinars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webinarsWithIdOnly = await prisma.webinars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends webinarsFindManyArgs>(args?: SelectSubset<T, webinarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Webinars.
     * @param {webinarsCreateArgs} args - Arguments to create a Webinars.
     * @example
     * // Create one Webinars
     * const Webinars = await prisma.webinars.create({
     *   data: {
     *     // ... data to create a Webinars
     *   }
     * })
     * 
     */
    create<T extends webinarsCreateArgs>(args: SelectSubset<T, webinarsCreateArgs<ExtArgs>>): Prisma__webinarsClient<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Webinars.
     * @param {webinarsCreateManyArgs} args - Arguments to create many Webinars.
     * @example
     * // Create many Webinars
     * const webinars = await prisma.webinars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends webinarsCreateManyArgs>(args?: SelectSubset<T, webinarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Webinars and returns the data saved in the database.
     * @param {webinarsCreateManyAndReturnArgs} args - Arguments to create many Webinars.
     * @example
     * // Create many Webinars
     * const webinars = await prisma.webinars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Webinars and only return the `id`
     * const webinarsWithIdOnly = await prisma.webinars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends webinarsCreateManyAndReturnArgs>(args?: SelectSubset<T, webinarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Webinars.
     * @param {webinarsDeleteArgs} args - Arguments to delete one Webinars.
     * @example
     * // Delete one Webinars
     * const Webinars = await prisma.webinars.delete({
     *   where: {
     *     // ... filter to delete one Webinars
     *   }
     * })
     * 
     */
    delete<T extends webinarsDeleteArgs>(args: SelectSubset<T, webinarsDeleteArgs<ExtArgs>>): Prisma__webinarsClient<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Webinars.
     * @param {webinarsUpdateArgs} args - Arguments to update one Webinars.
     * @example
     * // Update one Webinars
     * const webinars = await prisma.webinars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends webinarsUpdateArgs>(args: SelectSubset<T, webinarsUpdateArgs<ExtArgs>>): Prisma__webinarsClient<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Webinars.
     * @param {webinarsDeleteManyArgs} args - Arguments to filter Webinars to delete.
     * @example
     * // Delete a few Webinars
     * const { count } = await prisma.webinars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends webinarsDeleteManyArgs>(args?: SelectSubset<T, webinarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webinarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webinars
     * const webinars = await prisma.webinars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends webinarsUpdateManyArgs>(args: SelectSubset<T, webinarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webinars and returns the data updated in the database.
     * @param {webinarsUpdateManyAndReturnArgs} args - Arguments to update many Webinars.
     * @example
     * // Update many Webinars
     * const webinars = await prisma.webinars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Webinars and only return the `id`
     * const webinarsWithIdOnly = await prisma.webinars.updateManyAndReturn({
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
    updateManyAndReturn<T extends webinarsUpdateManyAndReturnArgs>(args: SelectSubset<T, webinarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Webinars.
     * @param {webinarsUpsertArgs} args - Arguments to update or create a Webinars.
     * @example
     * // Update or create a Webinars
     * const webinars = await prisma.webinars.upsert({
     *   create: {
     *     // ... data to create a Webinars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webinars we want to update
     *   }
     * })
     */
    upsert<T extends webinarsUpsertArgs>(args: SelectSubset<T, webinarsUpsertArgs<ExtArgs>>): Prisma__webinarsClient<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webinarsCountArgs} args - Arguments to filter Webinars to count.
     * @example
     * // Count the number of Webinars
     * const count = await prisma.webinars.count({
     *   where: {
     *     // ... the filter for the Webinars we want to count
     *   }
     * })
    **/
    count<T extends webinarsCountArgs>(
      args?: Subset<T, webinarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebinarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebinarsAggregateArgs>(args: Subset<T, WebinarsAggregateArgs>): Prisma.PrismaPromise<GetWebinarsAggregateType<T>>

    /**
     * Group by Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webinarsGroupByArgs} args - Group by arguments.
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
      T extends webinarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: webinarsGroupByArgs['orderBy'] }
        : { orderBy?: webinarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, webinarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebinarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the webinars model
   */
  readonly fields: webinarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for webinars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__webinarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_webinars<T extends webinars$user_webinarsArgs<ExtArgs> = {}>(args?: Subset<T, webinars$user_webinarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the webinars model
   */
  interface webinarsFieldRefs {
    readonly id: FieldRef<"webinars", 'BigInt'>
    readonly title: FieldRef<"webinars", 'String'>
    readonly agenda: FieldRef<"webinars", 'String'>
    readonly speakers: FieldRef<"webinars", 'String'>
    readonly duration: FieldRef<"webinars", 'Int'>
    readonly platform: FieldRef<"webinars", 'String'>
    readonly link: FieldRef<"webinars", 'String'>
    readonly type: FieldRef<"webinars", 'WebinarType'>
    readonly price: FieldRef<"webinars", 'Decimal'>
    readonly capacity: FieldRef<"webinars", 'Int'>
    readonly created_at: FieldRef<"webinars", 'DateTime'>
    readonly image_key: FieldRef<"webinars", 'String'>
    readonly image_url: FieldRef<"webinars", 'String'>
    readonly updated_at: FieldRef<"webinars", 'DateTime'>
    readonly webinar_date: FieldRef<"webinars", 'DateTime'>
    readonly webinar_time: FieldRef<"webinars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * webinars findUnique
   */
  export type webinarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webinarsInclude<ExtArgs> | null
    /**
     * Filter, which webinars to fetch.
     */
    where: webinarsWhereUniqueInput
  }

  /**
   * webinars findUniqueOrThrow
   */
  export type webinarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webinarsInclude<ExtArgs> | null
    /**
     * Filter, which webinars to fetch.
     */
    where: webinarsWhereUniqueInput
  }

  /**
   * webinars findFirst
   */
  export type webinarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webinarsInclude<ExtArgs> | null
    /**
     * Filter, which webinars to fetch.
     */
    where?: webinarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webinars to fetch.
     */
    orderBy?: webinarsOrderByWithRelationInput | webinarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webinars.
     */
    cursor?: webinarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webinars.
     */
    distinct?: WebinarsScalarFieldEnum | WebinarsScalarFieldEnum[]
  }

  /**
   * webinars findFirstOrThrow
   */
  export type webinarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webinarsInclude<ExtArgs> | null
    /**
     * Filter, which webinars to fetch.
     */
    where?: webinarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webinars to fetch.
     */
    orderBy?: webinarsOrderByWithRelationInput | webinarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webinars.
     */
    cursor?: webinarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webinars.
     */
    distinct?: WebinarsScalarFieldEnum | WebinarsScalarFieldEnum[]
  }

  /**
   * webinars findMany
   */
  export type webinarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webinarsInclude<ExtArgs> | null
    /**
     * Filter, which webinars to fetch.
     */
    where?: webinarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webinars to fetch.
     */
    orderBy?: webinarsOrderByWithRelationInput | webinarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webinars.
     */
    cursor?: webinarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webinars.
     */
    skip?: number
    distinct?: WebinarsScalarFieldEnum | WebinarsScalarFieldEnum[]
  }

  /**
   * webinars create
   */
  export type webinarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webinarsInclude<ExtArgs> | null
    /**
     * The data needed to create a webinars.
     */
    data: XOR<webinarsCreateInput, webinarsUncheckedCreateInput>
  }

  /**
   * webinars createMany
   */
  export type webinarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many webinars.
     */
    data: webinarsCreateManyInput | webinarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * webinars createManyAndReturn
   */
  export type webinarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * The data used to create many webinars.
     */
    data: webinarsCreateManyInput | webinarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * webinars update
   */
  export type webinarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webinarsInclude<ExtArgs> | null
    /**
     * The data needed to update a webinars.
     */
    data: XOR<webinarsUpdateInput, webinarsUncheckedUpdateInput>
    /**
     * Choose, which webinars to update.
     */
    where: webinarsWhereUniqueInput
  }

  /**
   * webinars updateMany
   */
  export type webinarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update webinars.
     */
    data: XOR<webinarsUpdateManyMutationInput, webinarsUncheckedUpdateManyInput>
    /**
     * Filter which webinars to update
     */
    where?: webinarsWhereInput
    /**
     * Limit how many webinars to update.
     */
    limit?: number
  }

  /**
   * webinars updateManyAndReturn
   */
  export type webinarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * The data used to update webinars.
     */
    data: XOR<webinarsUpdateManyMutationInput, webinarsUncheckedUpdateManyInput>
    /**
     * Filter which webinars to update
     */
    where?: webinarsWhereInput
    /**
     * Limit how many webinars to update.
     */
    limit?: number
  }

  /**
   * webinars upsert
   */
  export type webinarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webinarsInclude<ExtArgs> | null
    /**
     * The filter to search for the webinars to update in case it exists.
     */
    where: webinarsWhereUniqueInput
    /**
     * In case the webinars found by the `where` argument doesn't exist, create a new webinars with this data.
     */
    create: XOR<webinarsCreateInput, webinarsUncheckedCreateInput>
    /**
     * In case the webinars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<webinarsUpdateInput, webinarsUncheckedUpdateInput>
  }

  /**
   * webinars delete
   */
  export type webinarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webinarsInclude<ExtArgs> | null
    /**
     * Filter which webinars to delete.
     */
    where: webinarsWhereUniqueInput
  }

  /**
   * webinars deleteMany
   */
  export type webinarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webinars to delete
     */
    where?: webinarsWhereInput
    /**
     * Limit how many webinars to delete.
     */
    limit?: number
  }

  /**
   * webinars.user_webinars
   */
  export type webinars$user_webinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    where?: user_webinarWhereInput
    orderBy?: user_webinarOrderByWithRelationInput | user_webinarOrderByWithRelationInput[]
    cursor?: user_webinarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_webinarScalarFieldEnum | User_webinarScalarFieldEnum[]
  }

  /**
   * webinars without action
   */
  export type webinarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webinars
     */
    select?: webinarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webinars
     */
    omit?: webinarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webinarsInclude<ExtArgs> | null
  }


  /**
   * Model user_webinar
   */

  export type AggregateUser_webinar = {
    _count: User_webinarCountAggregateOutputType | null
    _avg: User_webinarAvgAggregateOutputType | null
    _sum: User_webinarSumAggregateOutputType | null
    _min: User_webinarMinAggregateOutputType | null
    _max: User_webinarMaxAggregateOutputType | null
  }

  export type User_webinarAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    webinar_id: number | null
  }

  export type User_webinarSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    webinar_id: bigint | null
  }

  export type User_webinarMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    webinar_id: bigint | null
    joined_at: Date | null
    status: $Enums.WebinarRegistrationStatus | null
  }

  export type User_webinarMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    webinar_id: bigint | null
    joined_at: Date | null
    status: $Enums.WebinarRegistrationStatus | null
  }

  export type User_webinarCountAggregateOutputType = {
    id: number
    user_id: number
    webinar_id: number
    joined_at: number
    status: number
    _all: number
  }


  export type User_webinarAvgAggregateInputType = {
    id?: true
    user_id?: true
    webinar_id?: true
  }

  export type User_webinarSumAggregateInputType = {
    id?: true
    user_id?: true
    webinar_id?: true
  }

  export type User_webinarMinAggregateInputType = {
    id?: true
    user_id?: true
    webinar_id?: true
    joined_at?: true
    status?: true
  }

  export type User_webinarMaxAggregateInputType = {
    id?: true
    user_id?: true
    webinar_id?: true
    joined_at?: true
    status?: true
  }

  export type User_webinarCountAggregateInputType = {
    id?: true
    user_id?: true
    webinar_id?: true
    joined_at?: true
    status?: true
    _all?: true
  }

  export type User_webinarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_webinar to aggregate.
     */
    where?: user_webinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_webinars to fetch.
     */
    orderBy?: user_webinarOrderByWithRelationInput | user_webinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_webinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_webinars
    **/
    _count?: true | User_webinarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_webinarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_webinarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_webinarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_webinarMaxAggregateInputType
  }

  export type GetUser_webinarAggregateType<T extends User_webinarAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_webinar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_webinar[P]>
      : GetScalarType<T[P], AggregateUser_webinar[P]>
  }




  export type user_webinarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_webinarWhereInput
    orderBy?: user_webinarOrderByWithAggregationInput | user_webinarOrderByWithAggregationInput[]
    by: User_webinarScalarFieldEnum[] | User_webinarScalarFieldEnum
    having?: user_webinarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_webinarCountAggregateInputType | true
    _avg?: User_webinarAvgAggregateInputType
    _sum?: User_webinarSumAggregateInputType
    _min?: User_webinarMinAggregateInputType
    _max?: User_webinarMaxAggregateInputType
  }

  export type User_webinarGroupByOutputType = {
    id: number
    user_id: number
    webinar_id: bigint
    joined_at: Date
    status: $Enums.WebinarRegistrationStatus
    _count: User_webinarCountAggregateOutputType | null
    _avg: User_webinarAvgAggregateOutputType | null
    _sum: User_webinarSumAggregateOutputType | null
    _min: User_webinarMinAggregateOutputType | null
    _max: User_webinarMaxAggregateOutputType | null
  }

  type GetUser_webinarGroupByPayload<T extends user_webinarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_webinarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_webinarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_webinarGroupByOutputType[P]>
            : GetScalarType<T[P], User_webinarGroupByOutputType[P]>
        }
      >
    >


  export type user_webinarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    webinar_id?: boolean
    joined_at?: boolean
    status?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    webinar?: boolean | webinarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_webinar"]>

  export type user_webinarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    webinar_id?: boolean
    joined_at?: boolean
    status?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    webinar?: boolean | webinarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_webinar"]>

  export type user_webinarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    webinar_id?: boolean
    joined_at?: boolean
    status?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    webinar?: boolean | webinarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_webinar"]>

  export type user_webinarSelectScalar = {
    id?: boolean
    user_id?: boolean
    webinar_id?: boolean
    joined_at?: boolean
    status?: boolean
  }

  export type user_webinarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "webinar_id" | "joined_at" | "status", ExtArgs["result"]["user_webinar"]>
  export type user_webinarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    webinar?: boolean | webinarsDefaultArgs<ExtArgs>
  }
  export type user_webinarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    webinar?: boolean | webinarsDefaultArgs<ExtArgs>
  }
  export type user_webinarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    webinar?: boolean | webinarsDefaultArgs<ExtArgs>
  }

  export type $user_webinarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_webinar"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      webinar: Prisma.$webinarsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      webinar_id: bigint
      joined_at: Date
      status: $Enums.WebinarRegistrationStatus
    }, ExtArgs["result"]["user_webinar"]>
    composites: {}
  }

  type user_webinarGetPayload<S extends boolean | null | undefined | user_webinarDefaultArgs> = $Result.GetResult<Prisma.$user_webinarPayload, S>

  type user_webinarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_webinarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_webinarCountAggregateInputType | true
    }

  export interface user_webinarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_webinar'], meta: { name: 'user_webinar' } }
    /**
     * Find zero or one User_webinar that matches the filter.
     * @param {user_webinarFindUniqueArgs} args - Arguments to find a User_webinar
     * @example
     * // Get one User_webinar
     * const user_webinar = await prisma.user_webinar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_webinarFindUniqueArgs>(args: SelectSubset<T, user_webinarFindUniqueArgs<ExtArgs>>): Prisma__user_webinarClient<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_webinar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_webinarFindUniqueOrThrowArgs} args - Arguments to find a User_webinar
     * @example
     * // Get one User_webinar
     * const user_webinar = await prisma.user_webinar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_webinarFindUniqueOrThrowArgs>(args: SelectSubset<T, user_webinarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_webinarClient<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_webinar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_webinarFindFirstArgs} args - Arguments to find a User_webinar
     * @example
     * // Get one User_webinar
     * const user_webinar = await prisma.user_webinar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_webinarFindFirstArgs>(args?: SelectSubset<T, user_webinarFindFirstArgs<ExtArgs>>): Prisma__user_webinarClient<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_webinar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_webinarFindFirstOrThrowArgs} args - Arguments to find a User_webinar
     * @example
     * // Get one User_webinar
     * const user_webinar = await prisma.user_webinar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_webinarFindFirstOrThrowArgs>(args?: SelectSubset<T, user_webinarFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_webinarClient<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_webinars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_webinarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_webinars
     * const user_webinars = await prisma.user_webinar.findMany()
     * 
     * // Get first 10 User_webinars
     * const user_webinars = await prisma.user_webinar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_webinarWithIdOnly = await prisma.user_webinar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_webinarFindManyArgs>(args?: SelectSubset<T, user_webinarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_webinar.
     * @param {user_webinarCreateArgs} args - Arguments to create a User_webinar.
     * @example
     * // Create one User_webinar
     * const User_webinar = await prisma.user_webinar.create({
     *   data: {
     *     // ... data to create a User_webinar
     *   }
     * })
     * 
     */
    create<T extends user_webinarCreateArgs>(args: SelectSubset<T, user_webinarCreateArgs<ExtArgs>>): Prisma__user_webinarClient<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_webinars.
     * @param {user_webinarCreateManyArgs} args - Arguments to create many User_webinars.
     * @example
     * // Create many User_webinars
     * const user_webinar = await prisma.user_webinar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_webinarCreateManyArgs>(args?: SelectSubset<T, user_webinarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_webinars and returns the data saved in the database.
     * @param {user_webinarCreateManyAndReturnArgs} args - Arguments to create many User_webinars.
     * @example
     * // Create many User_webinars
     * const user_webinar = await prisma.user_webinar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_webinars and only return the `id`
     * const user_webinarWithIdOnly = await prisma.user_webinar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_webinarCreateManyAndReturnArgs>(args?: SelectSubset<T, user_webinarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_webinar.
     * @param {user_webinarDeleteArgs} args - Arguments to delete one User_webinar.
     * @example
     * // Delete one User_webinar
     * const User_webinar = await prisma.user_webinar.delete({
     *   where: {
     *     // ... filter to delete one User_webinar
     *   }
     * })
     * 
     */
    delete<T extends user_webinarDeleteArgs>(args: SelectSubset<T, user_webinarDeleteArgs<ExtArgs>>): Prisma__user_webinarClient<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_webinar.
     * @param {user_webinarUpdateArgs} args - Arguments to update one User_webinar.
     * @example
     * // Update one User_webinar
     * const user_webinar = await prisma.user_webinar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_webinarUpdateArgs>(args: SelectSubset<T, user_webinarUpdateArgs<ExtArgs>>): Prisma__user_webinarClient<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_webinars.
     * @param {user_webinarDeleteManyArgs} args - Arguments to filter User_webinars to delete.
     * @example
     * // Delete a few User_webinars
     * const { count } = await prisma.user_webinar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_webinarDeleteManyArgs>(args?: SelectSubset<T, user_webinarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_webinarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_webinars
     * const user_webinar = await prisma.user_webinar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_webinarUpdateManyArgs>(args: SelectSubset<T, user_webinarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_webinars and returns the data updated in the database.
     * @param {user_webinarUpdateManyAndReturnArgs} args - Arguments to update many User_webinars.
     * @example
     * // Update many User_webinars
     * const user_webinar = await prisma.user_webinar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_webinars and only return the `id`
     * const user_webinarWithIdOnly = await prisma.user_webinar.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_webinarUpdateManyAndReturnArgs>(args: SelectSubset<T, user_webinarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_webinar.
     * @param {user_webinarUpsertArgs} args - Arguments to update or create a User_webinar.
     * @example
     * // Update or create a User_webinar
     * const user_webinar = await prisma.user_webinar.upsert({
     *   create: {
     *     // ... data to create a User_webinar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_webinar we want to update
     *   }
     * })
     */
    upsert<T extends user_webinarUpsertArgs>(args: SelectSubset<T, user_webinarUpsertArgs<ExtArgs>>): Prisma__user_webinarClient<$Result.GetResult<Prisma.$user_webinarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_webinarCountArgs} args - Arguments to filter User_webinars to count.
     * @example
     * // Count the number of User_webinars
     * const count = await prisma.user_webinar.count({
     *   where: {
     *     // ... the filter for the User_webinars we want to count
     *   }
     * })
    **/
    count<T extends user_webinarCountArgs>(
      args?: Subset<T, user_webinarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_webinarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_webinar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_webinarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_webinarAggregateArgs>(args: Subset<T, User_webinarAggregateArgs>): Prisma.PrismaPromise<GetUser_webinarAggregateType<T>>

    /**
     * Group by User_webinar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_webinarGroupByArgs} args - Group by arguments.
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
      T extends user_webinarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_webinarGroupByArgs['orderBy'] }
        : { orderBy?: user_webinarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_webinarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_webinarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_webinar model
   */
  readonly fields: user_webinarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_webinar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_webinarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    webinar<T extends webinarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, webinarsDefaultArgs<ExtArgs>>): Prisma__webinarsClient<$Result.GetResult<Prisma.$webinarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_webinar model
   */
  interface user_webinarFieldRefs {
    readonly id: FieldRef<"user_webinar", 'Int'>
    readonly user_id: FieldRef<"user_webinar", 'Int'>
    readonly webinar_id: FieldRef<"user_webinar", 'BigInt'>
    readonly joined_at: FieldRef<"user_webinar", 'DateTime'>
    readonly status: FieldRef<"user_webinar", 'WebinarRegistrationStatus'>
  }
    

  // Custom InputTypes
  /**
   * user_webinar findUnique
   */
  export type user_webinarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    /**
     * Filter, which user_webinar to fetch.
     */
    where: user_webinarWhereUniqueInput
  }

  /**
   * user_webinar findUniqueOrThrow
   */
  export type user_webinarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    /**
     * Filter, which user_webinar to fetch.
     */
    where: user_webinarWhereUniqueInput
  }

  /**
   * user_webinar findFirst
   */
  export type user_webinarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    /**
     * Filter, which user_webinar to fetch.
     */
    where?: user_webinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_webinars to fetch.
     */
    orderBy?: user_webinarOrderByWithRelationInput | user_webinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_webinars.
     */
    cursor?: user_webinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_webinars.
     */
    distinct?: User_webinarScalarFieldEnum | User_webinarScalarFieldEnum[]
  }

  /**
   * user_webinar findFirstOrThrow
   */
  export type user_webinarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    /**
     * Filter, which user_webinar to fetch.
     */
    where?: user_webinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_webinars to fetch.
     */
    orderBy?: user_webinarOrderByWithRelationInput | user_webinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_webinars.
     */
    cursor?: user_webinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_webinars.
     */
    distinct?: User_webinarScalarFieldEnum | User_webinarScalarFieldEnum[]
  }

  /**
   * user_webinar findMany
   */
  export type user_webinarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    /**
     * Filter, which user_webinars to fetch.
     */
    where?: user_webinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_webinars to fetch.
     */
    orderBy?: user_webinarOrderByWithRelationInput | user_webinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_webinars.
     */
    cursor?: user_webinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_webinars.
     */
    skip?: number
    distinct?: User_webinarScalarFieldEnum | User_webinarScalarFieldEnum[]
  }

  /**
   * user_webinar create
   */
  export type user_webinarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    /**
     * The data needed to create a user_webinar.
     */
    data: XOR<user_webinarCreateInput, user_webinarUncheckedCreateInput>
  }

  /**
   * user_webinar createMany
   */
  export type user_webinarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_webinars.
     */
    data: user_webinarCreateManyInput | user_webinarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_webinar createManyAndReturn
   */
  export type user_webinarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * The data used to create many user_webinars.
     */
    data: user_webinarCreateManyInput | user_webinarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_webinar update
   */
  export type user_webinarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    /**
     * The data needed to update a user_webinar.
     */
    data: XOR<user_webinarUpdateInput, user_webinarUncheckedUpdateInput>
    /**
     * Choose, which user_webinar to update.
     */
    where: user_webinarWhereUniqueInput
  }

  /**
   * user_webinar updateMany
   */
  export type user_webinarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_webinars.
     */
    data: XOR<user_webinarUpdateManyMutationInput, user_webinarUncheckedUpdateManyInput>
    /**
     * Filter which user_webinars to update
     */
    where?: user_webinarWhereInput
    /**
     * Limit how many user_webinars to update.
     */
    limit?: number
  }

  /**
   * user_webinar updateManyAndReturn
   */
  export type user_webinarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * The data used to update user_webinars.
     */
    data: XOR<user_webinarUpdateManyMutationInput, user_webinarUncheckedUpdateManyInput>
    /**
     * Filter which user_webinars to update
     */
    where?: user_webinarWhereInput
    /**
     * Limit how many user_webinars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_webinar upsert
   */
  export type user_webinarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    /**
     * The filter to search for the user_webinar to update in case it exists.
     */
    where: user_webinarWhereUniqueInput
    /**
     * In case the user_webinar found by the `where` argument doesn't exist, create a new user_webinar with this data.
     */
    create: XOR<user_webinarCreateInput, user_webinarUncheckedCreateInput>
    /**
     * In case the user_webinar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_webinarUpdateInput, user_webinarUncheckedUpdateInput>
  }

  /**
   * user_webinar delete
   */
  export type user_webinarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
    /**
     * Filter which user_webinar to delete.
     */
    where: user_webinarWhereUniqueInput
  }

  /**
   * user_webinar deleteMany
   */
  export type user_webinarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_webinars to delete
     */
    where?: user_webinarWhereInput
    /**
     * Limit how many user_webinars to delete.
     */
    limit?: number
  }

  /**
   * user_webinar without action
   */
  export type user_webinarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_webinar
     */
    select?: user_webinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_webinar
     */
    omit?: user_webinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_webinarInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    gender: 'gender',
    mobile: 'mobile',
    password: 'password',
    role: 'role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Subscription_planScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    razorpay_plan_id: 'razorpay_plan_id',
    razorpay_subscription_id: 'razorpay_subscription_id',
    razorpay_customer_id: 'razorpay_customer_id',
    status: 'status',
    start_at: 'start_at',
    end_at: 'end_at',
    next_charge_at: 'next_charge_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Subscription_planScalarFieldEnum = (typeof Subscription_planScalarFieldEnum)[keyof typeof Subscription_planScalarFieldEnum]


  export const WebinarsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    agenda: 'agenda',
    speakers: 'speakers',
    duration: 'duration',
    platform: 'platform',
    link: 'link',
    type: 'type',
    price: 'price',
    capacity: 'capacity',
    created_at: 'created_at',
    image_key: 'image_key',
    image_url: 'image_url',
    updated_at: 'updated_at',
    webinar_date: 'webinar_date',
    webinar_time: 'webinar_time'
  };

  export type WebinarsScalarFieldEnum = (typeof WebinarsScalarFieldEnum)[keyof typeof WebinarsScalarFieldEnum]


  export const User_webinarScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    webinar_id: 'webinar_id',
    joined_at: 'joined_at',
    status: 'status'
  };

  export type User_webinarScalarFieldEnum = (typeof User_webinarScalarFieldEnum)[keyof typeof User_webinarScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'role[]'
   */
  export type ListEnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'subscription_status'
   */
  export type Enumsubscription_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscription_status'>
    


  /**
   * Reference to a field of type 'subscription_status[]'
   */
  export type ListEnumsubscription_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscription_status[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'WebinarType'
   */
  export type EnumWebinarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebinarType'>
    


  /**
   * Reference to a field of type 'WebinarType[]'
   */
  export type ListEnumWebinarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebinarType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'WebinarRegistrationStatus'
   */
  export type EnumWebinarRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebinarRegistrationStatus'>
    


  /**
   * Reference to a field of type 'WebinarRegistrationStatus[]'
   */
  export type ListEnumWebinarRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebinarRegistrationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    gender?: StringFilter<"user"> | string
    mobile?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumroleFilter<"user"> | $Enums.role
    created_at?: DateTimeFilter<"user"> | Date | string
    subscription?: XOR<Subscription_planNullableScalarRelationFilter, subscription_planWhereInput> | null
    user_webinars?: User_webinarListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    subscription?: subscription_planOrderByWithRelationInput
    user_webinars?: user_webinarOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    mobile?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    gender?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumroleFilter<"user"> | $Enums.role
    created_at?: DateTimeFilter<"user"> | Date | string
    subscription?: XOR<Subscription_planNullableScalarRelationFilter, subscription_planWhereInput> | null
    user_webinars?: User_webinarListRelationFilter
  }, "id" | "email" | "mobile">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    gender?: StringWithAggregatesFilter<"user"> | string
    mobile?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: EnumroleWithAggregatesFilter<"user"> | $Enums.role
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type subscription_planWhereInput = {
    AND?: subscription_planWhereInput | subscription_planWhereInput[]
    OR?: subscription_planWhereInput[]
    NOT?: subscription_planWhereInput | subscription_planWhereInput[]
    id?: IntFilter<"subscription_plan"> | number
    user_id?: IntFilter<"subscription_plan"> | number
    razorpay_plan_id?: StringFilter<"subscription_plan"> | string
    razorpay_subscription_id?: StringFilter<"subscription_plan"> | string
    razorpay_customer_id?: StringNullableFilter<"subscription_plan"> | string | null
    status?: Enumsubscription_statusFilter<"subscription_plan"> | $Enums.subscription_status
    start_at?: DateTimeNullableFilter<"subscription_plan"> | Date | string | null
    end_at?: DateTimeNullableFilter<"subscription_plan"> | Date | string | null
    next_charge_at?: DateTimeNullableFilter<"subscription_plan"> | Date | string | null
    created_at?: DateTimeFilter<"subscription_plan"> | Date | string
    updated_at?: DateTimeFilter<"subscription_plan"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type subscription_planOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    razorpay_plan_id?: SortOrder
    razorpay_subscription_id?: SortOrder
    razorpay_customer_id?: SortOrderInput | SortOrder
    status?: SortOrder
    start_at?: SortOrderInput | SortOrder
    end_at?: SortOrderInput | SortOrder
    next_charge_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type subscription_planWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    razorpay_subscription_id?: string
    AND?: subscription_planWhereInput | subscription_planWhereInput[]
    OR?: subscription_planWhereInput[]
    NOT?: subscription_planWhereInput | subscription_planWhereInput[]
    razorpay_plan_id?: StringFilter<"subscription_plan"> | string
    razorpay_customer_id?: StringNullableFilter<"subscription_plan"> | string | null
    status?: Enumsubscription_statusFilter<"subscription_plan"> | $Enums.subscription_status
    start_at?: DateTimeNullableFilter<"subscription_plan"> | Date | string | null
    end_at?: DateTimeNullableFilter<"subscription_plan"> | Date | string | null
    next_charge_at?: DateTimeNullableFilter<"subscription_plan"> | Date | string | null
    created_at?: DateTimeFilter<"subscription_plan"> | Date | string
    updated_at?: DateTimeFilter<"subscription_plan"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "user_id" | "razorpay_subscription_id">

  export type subscription_planOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    razorpay_plan_id?: SortOrder
    razorpay_subscription_id?: SortOrder
    razorpay_customer_id?: SortOrderInput | SortOrder
    status?: SortOrder
    start_at?: SortOrderInput | SortOrder
    end_at?: SortOrderInput | SortOrder
    next_charge_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: subscription_planCountOrderByAggregateInput
    _avg?: subscription_planAvgOrderByAggregateInput
    _max?: subscription_planMaxOrderByAggregateInput
    _min?: subscription_planMinOrderByAggregateInput
    _sum?: subscription_planSumOrderByAggregateInput
  }

  export type subscription_planScalarWhereWithAggregatesInput = {
    AND?: subscription_planScalarWhereWithAggregatesInput | subscription_planScalarWhereWithAggregatesInput[]
    OR?: subscription_planScalarWhereWithAggregatesInput[]
    NOT?: subscription_planScalarWhereWithAggregatesInput | subscription_planScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subscription_plan"> | number
    user_id?: IntWithAggregatesFilter<"subscription_plan"> | number
    razorpay_plan_id?: StringWithAggregatesFilter<"subscription_plan"> | string
    razorpay_subscription_id?: StringWithAggregatesFilter<"subscription_plan"> | string
    razorpay_customer_id?: StringNullableWithAggregatesFilter<"subscription_plan"> | string | null
    status?: Enumsubscription_statusWithAggregatesFilter<"subscription_plan"> | $Enums.subscription_status
    start_at?: DateTimeNullableWithAggregatesFilter<"subscription_plan"> | Date | string | null
    end_at?: DateTimeNullableWithAggregatesFilter<"subscription_plan"> | Date | string | null
    next_charge_at?: DateTimeNullableWithAggregatesFilter<"subscription_plan"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"subscription_plan"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"subscription_plan"> | Date | string
  }

  export type webinarsWhereInput = {
    AND?: webinarsWhereInput | webinarsWhereInput[]
    OR?: webinarsWhereInput[]
    NOT?: webinarsWhereInput | webinarsWhereInput[]
    id?: BigIntFilter<"webinars"> | bigint | number
    title?: StringFilter<"webinars"> | string
    agenda?: StringNullableFilter<"webinars"> | string | null
    speakers?: StringNullableFilter<"webinars"> | string | null
    duration?: IntFilter<"webinars"> | number
    platform?: StringFilter<"webinars"> | string
    link?: StringNullableFilter<"webinars"> | string | null
    type?: EnumWebinarTypeFilter<"webinars"> | $Enums.WebinarType
    price?: DecimalNullableFilter<"webinars"> | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFilter<"webinars"> | number
    created_at?: DateTimeFilter<"webinars"> | Date | string
    image_key?: StringNullableFilter<"webinars"> | string | null
    image_url?: StringNullableFilter<"webinars"> | string | null
    updated_at?: DateTimeFilter<"webinars"> | Date | string
    webinar_date?: DateTimeFilter<"webinars"> | Date | string
    webinar_time?: DateTimeFilter<"webinars"> | Date | string
    user_webinars?: User_webinarListRelationFilter
  }

  export type webinarsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    agenda?: SortOrderInput | SortOrder
    speakers?: SortOrderInput | SortOrder
    duration?: SortOrder
    platform?: SortOrder
    link?: SortOrderInput | SortOrder
    type?: SortOrder
    price?: SortOrderInput | SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
    image_key?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    webinar_date?: SortOrder
    webinar_time?: SortOrder
    user_webinars?: user_webinarOrderByRelationAggregateInput
  }

  export type webinarsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: webinarsWhereInput | webinarsWhereInput[]
    OR?: webinarsWhereInput[]
    NOT?: webinarsWhereInput | webinarsWhereInput[]
    title?: StringFilter<"webinars"> | string
    agenda?: StringNullableFilter<"webinars"> | string | null
    speakers?: StringNullableFilter<"webinars"> | string | null
    duration?: IntFilter<"webinars"> | number
    platform?: StringFilter<"webinars"> | string
    link?: StringNullableFilter<"webinars"> | string | null
    type?: EnumWebinarTypeFilter<"webinars"> | $Enums.WebinarType
    price?: DecimalNullableFilter<"webinars"> | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFilter<"webinars"> | number
    created_at?: DateTimeFilter<"webinars"> | Date | string
    image_key?: StringNullableFilter<"webinars"> | string | null
    image_url?: StringNullableFilter<"webinars"> | string | null
    updated_at?: DateTimeFilter<"webinars"> | Date | string
    webinar_date?: DateTimeFilter<"webinars"> | Date | string
    webinar_time?: DateTimeFilter<"webinars"> | Date | string
    user_webinars?: User_webinarListRelationFilter
  }, "id">

  export type webinarsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    agenda?: SortOrderInput | SortOrder
    speakers?: SortOrderInput | SortOrder
    duration?: SortOrder
    platform?: SortOrder
    link?: SortOrderInput | SortOrder
    type?: SortOrder
    price?: SortOrderInput | SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
    image_key?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    webinar_date?: SortOrder
    webinar_time?: SortOrder
    _count?: webinarsCountOrderByAggregateInput
    _avg?: webinarsAvgOrderByAggregateInput
    _max?: webinarsMaxOrderByAggregateInput
    _min?: webinarsMinOrderByAggregateInput
    _sum?: webinarsSumOrderByAggregateInput
  }

  export type webinarsScalarWhereWithAggregatesInput = {
    AND?: webinarsScalarWhereWithAggregatesInput | webinarsScalarWhereWithAggregatesInput[]
    OR?: webinarsScalarWhereWithAggregatesInput[]
    NOT?: webinarsScalarWhereWithAggregatesInput | webinarsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"webinars"> | bigint | number
    title?: StringWithAggregatesFilter<"webinars"> | string
    agenda?: StringNullableWithAggregatesFilter<"webinars"> | string | null
    speakers?: StringNullableWithAggregatesFilter<"webinars"> | string | null
    duration?: IntWithAggregatesFilter<"webinars"> | number
    platform?: StringWithAggregatesFilter<"webinars"> | string
    link?: StringNullableWithAggregatesFilter<"webinars"> | string | null
    type?: EnumWebinarTypeWithAggregatesFilter<"webinars"> | $Enums.WebinarType
    price?: DecimalNullableWithAggregatesFilter<"webinars"> | Decimal | DecimalJsLike | number | string | null
    capacity?: IntWithAggregatesFilter<"webinars"> | number
    created_at?: DateTimeWithAggregatesFilter<"webinars"> | Date | string
    image_key?: StringNullableWithAggregatesFilter<"webinars"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"webinars"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"webinars"> | Date | string
    webinar_date?: DateTimeWithAggregatesFilter<"webinars"> | Date | string
    webinar_time?: DateTimeWithAggregatesFilter<"webinars"> | Date | string
  }

  export type user_webinarWhereInput = {
    AND?: user_webinarWhereInput | user_webinarWhereInput[]
    OR?: user_webinarWhereInput[]
    NOT?: user_webinarWhereInput | user_webinarWhereInput[]
    id?: IntFilter<"user_webinar"> | number
    user_id?: IntFilter<"user_webinar"> | number
    webinar_id?: BigIntFilter<"user_webinar"> | bigint | number
    joined_at?: DateTimeFilter<"user_webinar"> | Date | string
    status?: EnumWebinarRegistrationStatusFilter<"user_webinar"> | $Enums.WebinarRegistrationStatus
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    webinar?: XOR<WebinarsScalarRelationFilter, webinarsWhereInput>
  }

  export type user_webinarOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    webinar_id?: SortOrder
    joined_at?: SortOrder
    status?: SortOrder
    user?: userOrderByWithRelationInput
    webinar?: webinarsOrderByWithRelationInput
  }

  export type user_webinarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_webinar_id?: user_webinarUser_idWebinar_idCompoundUniqueInput
    AND?: user_webinarWhereInput | user_webinarWhereInput[]
    OR?: user_webinarWhereInput[]
    NOT?: user_webinarWhereInput | user_webinarWhereInput[]
    user_id?: IntFilter<"user_webinar"> | number
    webinar_id?: BigIntFilter<"user_webinar"> | bigint | number
    joined_at?: DateTimeFilter<"user_webinar"> | Date | string
    status?: EnumWebinarRegistrationStatusFilter<"user_webinar"> | $Enums.WebinarRegistrationStatus
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    webinar?: XOR<WebinarsScalarRelationFilter, webinarsWhereInput>
  }, "id" | "user_id_webinar_id">

  export type user_webinarOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    webinar_id?: SortOrder
    joined_at?: SortOrder
    status?: SortOrder
    _count?: user_webinarCountOrderByAggregateInput
    _avg?: user_webinarAvgOrderByAggregateInput
    _max?: user_webinarMaxOrderByAggregateInput
    _min?: user_webinarMinOrderByAggregateInput
    _sum?: user_webinarSumOrderByAggregateInput
  }

  export type user_webinarScalarWhereWithAggregatesInput = {
    AND?: user_webinarScalarWhereWithAggregatesInput | user_webinarScalarWhereWithAggregatesInput[]
    OR?: user_webinarScalarWhereWithAggregatesInput[]
    NOT?: user_webinarScalarWhereWithAggregatesInput | user_webinarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_webinar"> | number
    user_id?: IntWithAggregatesFilter<"user_webinar"> | number
    webinar_id?: BigIntWithAggregatesFilter<"user_webinar"> | bigint | number
    joined_at?: DateTimeWithAggregatesFilter<"user_webinar"> | Date | string
    status?: EnumWebinarRegistrationStatusWithAggregatesFilter<"user_webinar"> | $Enums.WebinarRegistrationStatus
  }

  export type userCreateInput = {
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
    subscription?: subscription_planCreateNestedOneWithoutUserInput
    user_webinars?: user_webinarCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
    subscription?: subscription_planUncheckedCreateNestedOneWithoutUserInput
    user_webinars?: user_webinarUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: subscription_planUpdateOneWithoutUserNestedInput
    user_webinars?: user_webinarUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: subscription_planUncheckedUpdateOneWithoutUserNestedInput
    user_webinars?: user_webinarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscription_planCreateInput = {
    razorpay_plan_id: string
    razorpay_subscription_id: string
    razorpay_customer_id?: string | null
    status?: $Enums.subscription_status
    start_at?: Date | string | null
    end_at?: Date | string | null
    next_charge_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutSubscriptionInput
  }

  export type subscription_planUncheckedCreateInput = {
    id?: number
    user_id: number
    razorpay_plan_id: string
    razorpay_subscription_id: string
    razorpay_customer_id?: string | null
    status?: $Enums.subscription_status
    start_at?: Date | string | null
    end_at?: Date | string | null
    next_charge_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscription_planUpdateInput = {
    razorpay_plan_id?: StringFieldUpdateOperationsInput | string
    razorpay_subscription_id?: StringFieldUpdateOperationsInput | string
    razorpay_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumsubscription_statusFieldUpdateOperationsInput | $Enums.subscription_status
    start_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_charge_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type subscription_planUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    razorpay_plan_id?: StringFieldUpdateOperationsInput | string
    razorpay_subscription_id?: StringFieldUpdateOperationsInput | string
    razorpay_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumsubscription_statusFieldUpdateOperationsInput | $Enums.subscription_status
    start_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_charge_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscription_planCreateManyInput = {
    id?: number
    user_id: number
    razorpay_plan_id: string
    razorpay_subscription_id: string
    razorpay_customer_id?: string | null
    status?: $Enums.subscription_status
    start_at?: Date | string | null
    end_at?: Date | string | null
    next_charge_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscription_planUpdateManyMutationInput = {
    razorpay_plan_id?: StringFieldUpdateOperationsInput | string
    razorpay_subscription_id?: StringFieldUpdateOperationsInput | string
    razorpay_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumsubscription_statusFieldUpdateOperationsInput | $Enums.subscription_status
    start_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_charge_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscription_planUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    razorpay_plan_id?: StringFieldUpdateOperationsInput | string
    razorpay_subscription_id?: StringFieldUpdateOperationsInput | string
    razorpay_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumsubscription_statusFieldUpdateOperationsInput | $Enums.subscription_status
    start_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_charge_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webinarsCreateInput = {
    id?: bigint | number
    title: string
    agenda?: string | null
    speakers?: string | null
    duration?: number
    platform?: string
    link?: string | null
    type?: $Enums.WebinarType
    price?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    created_at?: Date | string
    image_key?: string | null
    image_url?: string | null
    updated_at?: Date | string
    webinar_date: Date | string
    webinar_time: Date | string
    user_webinars?: user_webinarCreateNestedManyWithoutWebinarInput
  }

  export type webinarsUncheckedCreateInput = {
    id?: bigint | number
    title: string
    agenda?: string | null
    speakers?: string | null
    duration?: number
    platform?: string
    link?: string | null
    type?: $Enums.WebinarType
    price?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    created_at?: Date | string
    image_key?: string | null
    image_url?: string | null
    updated_at?: Date | string
    webinar_date: Date | string
    webinar_time: Date | string
    user_webinars?: user_webinarUncheckedCreateNestedManyWithoutWebinarInput
  }

  export type webinarsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    agenda?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumWebinarTypeFieldUpdateOperationsInput | $Enums.WebinarType
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_key?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_date?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_webinars?: user_webinarUpdateManyWithoutWebinarNestedInput
  }

  export type webinarsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    agenda?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumWebinarTypeFieldUpdateOperationsInput | $Enums.WebinarType
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_key?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_date?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_webinars?: user_webinarUncheckedUpdateManyWithoutWebinarNestedInput
  }

  export type webinarsCreateManyInput = {
    id?: bigint | number
    title: string
    agenda?: string | null
    speakers?: string | null
    duration?: number
    platform?: string
    link?: string | null
    type?: $Enums.WebinarType
    price?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    created_at?: Date | string
    image_key?: string | null
    image_url?: string | null
    updated_at?: Date | string
    webinar_date: Date | string
    webinar_time: Date | string
  }

  export type webinarsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    agenda?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumWebinarTypeFieldUpdateOperationsInput | $Enums.WebinarType
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_key?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_date?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webinarsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    agenda?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumWebinarTypeFieldUpdateOperationsInput | $Enums.WebinarType
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_key?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_date?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_webinarCreateInput = {
    joined_at?: Date | string
    status?: $Enums.WebinarRegistrationStatus
    user: userCreateNestedOneWithoutUser_webinarsInput
    webinar: webinarsCreateNestedOneWithoutUser_webinarsInput
  }

  export type user_webinarUncheckedCreateInput = {
    id?: number
    user_id: number
    webinar_id: bigint | number
    joined_at?: Date | string
    status?: $Enums.WebinarRegistrationStatus
  }

  export type user_webinarUpdateInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWebinarRegistrationStatusFieldUpdateOperationsInput | $Enums.WebinarRegistrationStatus
    user?: userUpdateOneRequiredWithoutUser_webinarsNestedInput
    webinar?: webinarsUpdateOneRequiredWithoutUser_webinarsNestedInput
  }

  export type user_webinarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    webinar_id?: BigIntFieldUpdateOperationsInput | bigint | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWebinarRegistrationStatusFieldUpdateOperationsInput | $Enums.WebinarRegistrationStatus
  }

  export type user_webinarCreateManyInput = {
    id?: number
    user_id: number
    webinar_id: bigint | number
    joined_at?: Date | string
    status?: $Enums.WebinarRegistrationStatus
  }

  export type user_webinarUpdateManyMutationInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWebinarRegistrationStatusFieldUpdateOperationsInput | $Enums.WebinarRegistrationStatus
  }

  export type user_webinarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    webinar_id?: BigIntFieldUpdateOperationsInput | bigint | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWebinarRegistrationStatusFieldUpdateOperationsInput | $Enums.WebinarRegistrationStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
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

  export type Subscription_planNullableScalarRelationFilter = {
    is?: subscription_planWhereInput | null
    isNot?: subscription_planWhereInput | null
  }

  export type User_webinarListRelationFilter = {
    every?: user_webinarWhereInput
    some?: user_webinarWhereInput
    none?: user_webinarWhereInput
  }

  export type user_webinarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumsubscription_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.subscription_status | Enumsubscription_statusFieldRefInput<$PrismaModel>
    in?: $Enums.subscription_status[] | ListEnumsubscription_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscription_status[] | ListEnumsubscription_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscription_statusFilter<$PrismaModel> | $Enums.subscription_status
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type subscription_planCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    razorpay_plan_id?: SortOrder
    razorpay_subscription_id?: SortOrder
    razorpay_customer_id?: SortOrder
    status?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    next_charge_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subscription_planAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type subscription_planMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    razorpay_plan_id?: SortOrder
    razorpay_subscription_id?: SortOrder
    razorpay_customer_id?: SortOrder
    status?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    next_charge_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subscription_planMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    razorpay_plan_id?: SortOrder
    razorpay_subscription_id?: SortOrder
    razorpay_customer_id?: SortOrder
    status?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    next_charge_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subscription_planSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumsubscription_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subscription_status | Enumsubscription_statusFieldRefInput<$PrismaModel>
    in?: $Enums.subscription_status[] | ListEnumsubscription_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscription_status[] | ListEnumsubscription_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscription_statusWithAggregatesFilter<$PrismaModel> | $Enums.subscription_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubscription_statusFilter<$PrismaModel>
    _max?: NestedEnumsubscription_statusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumWebinarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarType | EnumWebinarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarType[] | ListEnumWebinarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarType[] | ListEnumWebinarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarTypeFilter<$PrismaModel> | $Enums.WebinarType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type webinarsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    agenda?: SortOrder
    speakers?: SortOrder
    duration?: SortOrder
    platform?: SortOrder
    link?: SortOrder
    type?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
    image_key?: SortOrder
    image_url?: SortOrder
    updated_at?: SortOrder
    webinar_date?: SortOrder
    webinar_time?: SortOrder
  }

  export type webinarsAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
  }

  export type webinarsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    agenda?: SortOrder
    speakers?: SortOrder
    duration?: SortOrder
    platform?: SortOrder
    link?: SortOrder
    type?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
    image_key?: SortOrder
    image_url?: SortOrder
    updated_at?: SortOrder
    webinar_date?: SortOrder
    webinar_time?: SortOrder
  }

  export type webinarsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    agenda?: SortOrder
    speakers?: SortOrder
    duration?: SortOrder
    platform?: SortOrder
    link?: SortOrder
    type?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
    image_key?: SortOrder
    image_url?: SortOrder
    updated_at?: SortOrder
    webinar_date?: SortOrder
    webinar_time?: SortOrder
  }

  export type webinarsSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumWebinarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarType | EnumWebinarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarType[] | ListEnumWebinarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarType[] | ListEnumWebinarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarTypeWithAggregatesFilter<$PrismaModel> | $Enums.WebinarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebinarTypeFilter<$PrismaModel>
    _max?: NestedEnumWebinarTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumWebinarRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarRegistrationStatus | EnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarRegistrationStatus[] | ListEnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarRegistrationStatus[] | ListEnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarRegistrationStatusFilter<$PrismaModel> | $Enums.WebinarRegistrationStatus
  }

  export type WebinarsScalarRelationFilter = {
    is?: webinarsWhereInput
    isNot?: webinarsWhereInput
  }

  export type user_webinarUser_idWebinar_idCompoundUniqueInput = {
    user_id: number
    webinar_id: bigint | number
  }

  export type user_webinarCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    webinar_id?: SortOrder
    joined_at?: SortOrder
    status?: SortOrder
  }

  export type user_webinarAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    webinar_id?: SortOrder
  }

  export type user_webinarMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    webinar_id?: SortOrder
    joined_at?: SortOrder
    status?: SortOrder
  }

  export type user_webinarMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    webinar_id?: SortOrder
    joined_at?: SortOrder
    status?: SortOrder
  }

  export type user_webinarSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    webinar_id?: SortOrder
  }

  export type EnumWebinarRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarRegistrationStatus | EnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarRegistrationStatus[] | ListEnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarRegistrationStatus[] | ListEnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebinarRegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebinarRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumWebinarRegistrationStatusFilter<$PrismaModel>
  }

  export type subscription_planCreateNestedOneWithoutUserInput = {
    create?: XOR<subscription_planCreateWithoutUserInput, subscription_planUncheckedCreateWithoutUserInput>
    connectOrCreate?: subscription_planCreateOrConnectWithoutUserInput
    connect?: subscription_planWhereUniqueInput
  }

  export type user_webinarCreateNestedManyWithoutUserInput = {
    create?: XOR<user_webinarCreateWithoutUserInput, user_webinarUncheckedCreateWithoutUserInput> | user_webinarCreateWithoutUserInput[] | user_webinarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_webinarCreateOrConnectWithoutUserInput | user_webinarCreateOrConnectWithoutUserInput[]
    createMany?: user_webinarCreateManyUserInputEnvelope
    connect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
  }

  export type subscription_planUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<subscription_planCreateWithoutUserInput, subscription_planUncheckedCreateWithoutUserInput>
    connectOrCreate?: subscription_planCreateOrConnectWithoutUserInput
    connect?: subscription_planWhereUniqueInput
  }

  export type user_webinarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_webinarCreateWithoutUserInput, user_webinarUncheckedCreateWithoutUserInput> | user_webinarCreateWithoutUserInput[] | user_webinarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_webinarCreateOrConnectWithoutUserInput | user_webinarCreateOrConnectWithoutUserInput[]
    createMany?: user_webinarCreateManyUserInputEnvelope
    connect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type subscription_planUpdateOneWithoutUserNestedInput = {
    create?: XOR<subscription_planCreateWithoutUserInput, subscription_planUncheckedCreateWithoutUserInput>
    connectOrCreate?: subscription_planCreateOrConnectWithoutUserInput
    upsert?: subscription_planUpsertWithoutUserInput
    disconnect?: subscription_planWhereInput | boolean
    delete?: subscription_planWhereInput | boolean
    connect?: subscription_planWhereUniqueInput
    update?: XOR<XOR<subscription_planUpdateToOneWithWhereWithoutUserInput, subscription_planUpdateWithoutUserInput>, subscription_planUncheckedUpdateWithoutUserInput>
  }

  export type user_webinarUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_webinarCreateWithoutUserInput, user_webinarUncheckedCreateWithoutUserInput> | user_webinarCreateWithoutUserInput[] | user_webinarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_webinarCreateOrConnectWithoutUserInput | user_webinarCreateOrConnectWithoutUserInput[]
    upsert?: user_webinarUpsertWithWhereUniqueWithoutUserInput | user_webinarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_webinarCreateManyUserInputEnvelope
    set?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    disconnect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    delete?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    connect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    update?: user_webinarUpdateWithWhereUniqueWithoutUserInput | user_webinarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_webinarUpdateManyWithWhereWithoutUserInput | user_webinarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_webinarScalarWhereInput | user_webinarScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type subscription_planUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<subscription_planCreateWithoutUserInput, subscription_planUncheckedCreateWithoutUserInput>
    connectOrCreate?: subscription_planCreateOrConnectWithoutUserInput
    upsert?: subscription_planUpsertWithoutUserInput
    disconnect?: subscription_planWhereInput | boolean
    delete?: subscription_planWhereInput | boolean
    connect?: subscription_planWhereUniqueInput
    update?: XOR<XOR<subscription_planUpdateToOneWithWhereWithoutUserInput, subscription_planUpdateWithoutUserInput>, subscription_planUncheckedUpdateWithoutUserInput>
  }

  export type user_webinarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_webinarCreateWithoutUserInput, user_webinarUncheckedCreateWithoutUserInput> | user_webinarCreateWithoutUserInput[] | user_webinarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_webinarCreateOrConnectWithoutUserInput | user_webinarCreateOrConnectWithoutUserInput[]
    upsert?: user_webinarUpsertWithWhereUniqueWithoutUserInput | user_webinarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_webinarCreateManyUserInputEnvelope
    set?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    disconnect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    delete?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    connect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    update?: user_webinarUpdateWithWhereUniqueWithoutUserInput | user_webinarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_webinarUpdateManyWithWhereWithoutUserInput | user_webinarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_webinarScalarWhereInput | user_webinarScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<userCreateWithoutSubscriptionInput, userUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: userCreateOrConnectWithoutSubscriptionInput
    connect?: userWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumsubscription_statusFieldUpdateOperationsInput = {
    set?: $Enums.subscription_status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<userCreateWithoutSubscriptionInput, userUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: userCreateOrConnectWithoutSubscriptionInput
    upsert?: userUpsertWithoutSubscriptionInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSubscriptionInput, userUpdateWithoutSubscriptionInput>, userUncheckedUpdateWithoutSubscriptionInput>
  }

  export type user_webinarCreateNestedManyWithoutWebinarInput = {
    create?: XOR<user_webinarCreateWithoutWebinarInput, user_webinarUncheckedCreateWithoutWebinarInput> | user_webinarCreateWithoutWebinarInput[] | user_webinarUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: user_webinarCreateOrConnectWithoutWebinarInput | user_webinarCreateOrConnectWithoutWebinarInput[]
    createMany?: user_webinarCreateManyWebinarInputEnvelope
    connect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
  }

  export type user_webinarUncheckedCreateNestedManyWithoutWebinarInput = {
    create?: XOR<user_webinarCreateWithoutWebinarInput, user_webinarUncheckedCreateWithoutWebinarInput> | user_webinarCreateWithoutWebinarInput[] | user_webinarUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: user_webinarCreateOrConnectWithoutWebinarInput | user_webinarCreateOrConnectWithoutWebinarInput[]
    createMany?: user_webinarCreateManyWebinarInputEnvelope
    connect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumWebinarTypeFieldUpdateOperationsInput = {
    set?: $Enums.WebinarType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type user_webinarUpdateManyWithoutWebinarNestedInput = {
    create?: XOR<user_webinarCreateWithoutWebinarInput, user_webinarUncheckedCreateWithoutWebinarInput> | user_webinarCreateWithoutWebinarInput[] | user_webinarUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: user_webinarCreateOrConnectWithoutWebinarInput | user_webinarCreateOrConnectWithoutWebinarInput[]
    upsert?: user_webinarUpsertWithWhereUniqueWithoutWebinarInput | user_webinarUpsertWithWhereUniqueWithoutWebinarInput[]
    createMany?: user_webinarCreateManyWebinarInputEnvelope
    set?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    disconnect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    delete?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    connect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    update?: user_webinarUpdateWithWhereUniqueWithoutWebinarInput | user_webinarUpdateWithWhereUniqueWithoutWebinarInput[]
    updateMany?: user_webinarUpdateManyWithWhereWithoutWebinarInput | user_webinarUpdateManyWithWhereWithoutWebinarInput[]
    deleteMany?: user_webinarScalarWhereInput | user_webinarScalarWhereInput[]
  }

  export type user_webinarUncheckedUpdateManyWithoutWebinarNestedInput = {
    create?: XOR<user_webinarCreateWithoutWebinarInput, user_webinarUncheckedCreateWithoutWebinarInput> | user_webinarCreateWithoutWebinarInput[] | user_webinarUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: user_webinarCreateOrConnectWithoutWebinarInput | user_webinarCreateOrConnectWithoutWebinarInput[]
    upsert?: user_webinarUpsertWithWhereUniqueWithoutWebinarInput | user_webinarUpsertWithWhereUniqueWithoutWebinarInput[]
    createMany?: user_webinarCreateManyWebinarInputEnvelope
    set?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    disconnect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    delete?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    connect?: user_webinarWhereUniqueInput | user_webinarWhereUniqueInput[]
    update?: user_webinarUpdateWithWhereUniqueWithoutWebinarInput | user_webinarUpdateWithWhereUniqueWithoutWebinarInput[]
    updateMany?: user_webinarUpdateManyWithWhereWithoutWebinarInput | user_webinarUpdateManyWithWhereWithoutWebinarInput[]
    deleteMany?: user_webinarScalarWhereInput | user_webinarScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUser_webinarsInput = {
    create?: XOR<userCreateWithoutUser_webinarsInput, userUncheckedCreateWithoutUser_webinarsInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_webinarsInput
    connect?: userWhereUniqueInput
  }

  export type webinarsCreateNestedOneWithoutUser_webinarsInput = {
    create?: XOR<webinarsCreateWithoutUser_webinarsInput, webinarsUncheckedCreateWithoutUser_webinarsInput>
    connectOrCreate?: webinarsCreateOrConnectWithoutUser_webinarsInput
    connect?: webinarsWhereUniqueInput
  }

  export type EnumWebinarRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebinarRegistrationStatus
  }

  export type userUpdateOneRequiredWithoutUser_webinarsNestedInput = {
    create?: XOR<userCreateWithoutUser_webinarsInput, userUncheckedCreateWithoutUser_webinarsInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_webinarsInput
    upsert?: userUpsertWithoutUser_webinarsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_webinarsInput, userUpdateWithoutUser_webinarsInput>, userUncheckedUpdateWithoutUser_webinarsInput>
  }

  export type webinarsUpdateOneRequiredWithoutUser_webinarsNestedInput = {
    create?: XOR<webinarsCreateWithoutUser_webinarsInput, webinarsUncheckedCreateWithoutUser_webinarsInput>
    connectOrCreate?: webinarsCreateOrConnectWithoutUser_webinarsInput
    upsert?: webinarsUpsertWithoutUser_webinarsInput
    connect?: webinarsWhereUniqueInput
    update?: XOR<XOR<webinarsUpdateToOneWithWhereWithoutUser_webinarsInput, webinarsUpdateWithoutUser_webinarsInput>, webinarsUncheckedUpdateWithoutUser_webinarsInput>
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

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumsubscription_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.subscription_status | Enumsubscription_statusFieldRefInput<$PrismaModel>
    in?: $Enums.subscription_status[] | ListEnumsubscription_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscription_status[] | ListEnumsubscription_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscription_statusFilter<$PrismaModel> | $Enums.subscription_status
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumsubscription_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subscription_status | Enumsubscription_statusFieldRefInput<$PrismaModel>
    in?: $Enums.subscription_status[] | ListEnumsubscription_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscription_status[] | ListEnumsubscription_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscription_statusWithAggregatesFilter<$PrismaModel> | $Enums.subscription_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubscription_statusFilter<$PrismaModel>
    _max?: NestedEnumsubscription_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumWebinarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarType | EnumWebinarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarType[] | ListEnumWebinarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarType[] | ListEnumWebinarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarTypeFilter<$PrismaModel> | $Enums.WebinarType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumWebinarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarType | EnumWebinarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarType[] | ListEnumWebinarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarType[] | ListEnumWebinarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarTypeWithAggregatesFilter<$PrismaModel> | $Enums.WebinarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebinarTypeFilter<$PrismaModel>
    _max?: NestedEnumWebinarTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumWebinarRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarRegistrationStatus | EnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarRegistrationStatus[] | ListEnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarRegistrationStatus[] | ListEnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarRegistrationStatusFilter<$PrismaModel> | $Enums.WebinarRegistrationStatus
  }

  export type NestedEnumWebinarRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarRegistrationStatus | EnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarRegistrationStatus[] | ListEnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarRegistrationStatus[] | ListEnumWebinarRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebinarRegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebinarRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumWebinarRegistrationStatusFilter<$PrismaModel>
  }

  export type subscription_planCreateWithoutUserInput = {
    razorpay_plan_id: string
    razorpay_subscription_id: string
    razorpay_customer_id?: string | null
    status?: $Enums.subscription_status
    start_at?: Date | string | null
    end_at?: Date | string | null
    next_charge_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscription_planUncheckedCreateWithoutUserInput = {
    id?: number
    razorpay_plan_id: string
    razorpay_subscription_id: string
    razorpay_customer_id?: string | null
    status?: $Enums.subscription_status
    start_at?: Date | string | null
    end_at?: Date | string | null
    next_charge_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscription_planCreateOrConnectWithoutUserInput = {
    where: subscription_planWhereUniqueInput
    create: XOR<subscription_planCreateWithoutUserInput, subscription_planUncheckedCreateWithoutUserInput>
  }

  export type user_webinarCreateWithoutUserInput = {
    joined_at?: Date | string
    status?: $Enums.WebinarRegistrationStatus
    webinar: webinarsCreateNestedOneWithoutUser_webinarsInput
  }

  export type user_webinarUncheckedCreateWithoutUserInput = {
    id?: number
    webinar_id: bigint | number
    joined_at?: Date | string
    status?: $Enums.WebinarRegistrationStatus
  }

  export type user_webinarCreateOrConnectWithoutUserInput = {
    where: user_webinarWhereUniqueInput
    create: XOR<user_webinarCreateWithoutUserInput, user_webinarUncheckedCreateWithoutUserInput>
  }

  export type user_webinarCreateManyUserInputEnvelope = {
    data: user_webinarCreateManyUserInput | user_webinarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type subscription_planUpsertWithoutUserInput = {
    update: XOR<subscription_planUpdateWithoutUserInput, subscription_planUncheckedUpdateWithoutUserInput>
    create: XOR<subscription_planCreateWithoutUserInput, subscription_planUncheckedCreateWithoutUserInput>
    where?: subscription_planWhereInput
  }

  export type subscription_planUpdateToOneWithWhereWithoutUserInput = {
    where?: subscription_planWhereInput
    data: XOR<subscription_planUpdateWithoutUserInput, subscription_planUncheckedUpdateWithoutUserInput>
  }

  export type subscription_planUpdateWithoutUserInput = {
    razorpay_plan_id?: StringFieldUpdateOperationsInput | string
    razorpay_subscription_id?: StringFieldUpdateOperationsInput | string
    razorpay_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumsubscription_statusFieldUpdateOperationsInput | $Enums.subscription_status
    start_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_charge_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscription_planUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    razorpay_plan_id?: StringFieldUpdateOperationsInput | string
    razorpay_subscription_id?: StringFieldUpdateOperationsInput | string
    razorpay_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumsubscription_statusFieldUpdateOperationsInput | $Enums.subscription_status
    start_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_charge_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_webinarUpsertWithWhereUniqueWithoutUserInput = {
    where: user_webinarWhereUniqueInput
    update: XOR<user_webinarUpdateWithoutUserInput, user_webinarUncheckedUpdateWithoutUserInput>
    create: XOR<user_webinarCreateWithoutUserInput, user_webinarUncheckedCreateWithoutUserInput>
  }

  export type user_webinarUpdateWithWhereUniqueWithoutUserInput = {
    where: user_webinarWhereUniqueInput
    data: XOR<user_webinarUpdateWithoutUserInput, user_webinarUncheckedUpdateWithoutUserInput>
  }

  export type user_webinarUpdateManyWithWhereWithoutUserInput = {
    where: user_webinarScalarWhereInput
    data: XOR<user_webinarUpdateManyMutationInput, user_webinarUncheckedUpdateManyWithoutUserInput>
  }

  export type user_webinarScalarWhereInput = {
    AND?: user_webinarScalarWhereInput | user_webinarScalarWhereInput[]
    OR?: user_webinarScalarWhereInput[]
    NOT?: user_webinarScalarWhereInput | user_webinarScalarWhereInput[]
    id?: IntFilter<"user_webinar"> | number
    user_id?: IntFilter<"user_webinar"> | number
    webinar_id?: BigIntFilter<"user_webinar"> | bigint | number
    joined_at?: DateTimeFilter<"user_webinar"> | Date | string
    status?: EnumWebinarRegistrationStatusFilter<"user_webinar"> | $Enums.WebinarRegistrationStatus
  }

  export type userCreateWithoutSubscriptionInput = {
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
    user_webinars?: user_webinarCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
    user_webinars?: user_webinarUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSubscriptionInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSubscriptionInput, userUncheckedCreateWithoutSubscriptionInput>
  }

  export type userUpsertWithoutSubscriptionInput = {
    update: XOR<userUpdateWithoutSubscriptionInput, userUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<userCreateWithoutSubscriptionInput, userUncheckedCreateWithoutSubscriptionInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSubscriptionInput, userUncheckedUpdateWithoutSubscriptionInput>
  }

  export type userUpdateWithoutSubscriptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_webinars?: user_webinarUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_webinars?: user_webinarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_webinarCreateWithoutWebinarInput = {
    joined_at?: Date | string
    status?: $Enums.WebinarRegistrationStatus
    user: userCreateNestedOneWithoutUser_webinarsInput
  }

  export type user_webinarUncheckedCreateWithoutWebinarInput = {
    id?: number
    user_id: number
    joined_at?: Date | string
    status?: $Enums.WebinarRegistrationStatus
  }

  export type user_webinarCreateOrConnectWithoutWebinarInput = {
    where: user_webinarWhereUniqueInput
    create: XOR<user_webinarCreateWithoutWebinarInput, user_webinarUncheckedCreateWithoutWebinarInput>
  }

  export type user_webinarCreateManyWebinarInputEnvelope = {
    data: user_webinarCreateManyWebinarInput | user_webinarCreateManyWebinarInput[]
    skipDuplicates?: boolean
  }

  export type user_webinarUpsertWithWhereUniqueWithoutWebinarInput = {
    where: user_webinarWhereUniqueInput
    update: XOR<user_webinarUpdateWithoutWebinarInput, user_webinarUncheckedUpdateWithoutWebinarInput>
    create: XOR<user_webinarCreateWithoutWebinarInput, user_webinarUncheckedCreateWithoutWebinarInput>
  }

  export type user_webinarUpdateWithWhereUniqueWithoutWebinarInput = {
    where: user_webinarWhereUniqueInput
    data: XOR<user_webinarUpdateWithoutWebinarInput, user_webinarUncheckedUpdateWithoutWebinarInput>
  }

  export type user_webinarUpdateManyWithWhereWithoutWebinarInput = {
    where: user_webinarScalarWhereInput
    data: XOR<user_webinarUpdateManyMutationInput, user_webinarUncheckedUpdateManyWithoutWebinarInput>
  }

  export type userCreateWithoutUser_webinarsInput = {
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
    subscription?: subscription_planCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_webinarsInput = {
    id?: number
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
    subscription?: subscription_planUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_webinarsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_webinarsInput, userUncheckedCreateWithoutUser_webinarsInput>
  }

  export type webinarsCreateWithoutUser_webinarsInput = {
    id?: bigint | number
    title: string
    agenda?: string | null
    speakers?: string | null
    duration?: number
    platform?: string
    link?: string | null
    type?: $Enums.WebinarType
    price?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    created_at?: Date | string
    image_key?: string | null
    image_url?: string | null
    updated_at?: Date | string
    webinar_date: Date | string
    webinar_time: Date | string
  }

  export type webinarsUncheckedCreateWithoutUser_webinarsInput = {
    id?: bigint | number
    title: string
    agenda?: string | null
    speakers?: string | null
    duration?: number
    platform?: string
    link?: string | null
    type?: $Enums.WebinarType
    price?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    created_at?: Date | string
    image_key?: string | null
    image_url?: string | null
    updated_at?: Date | string
    webinar_date: Date | string
    webinar_time: Date | string
  }

  export type webinarsCreateOrConnectWithoutUser_webinarsInput = {
    where: webinarsWhereUniqueInput
    create: XOR<webinarsCreateWithoutUser_webinarsInput, webinarsUncheckedCreateWithoutUser_webinarsInput>
  }

  export type userUpsertWithoutUser_webinarsInput = {
    update: XOR<userUpdateWithoutUser_webinarsInput, userUncheckedUpdateWithoutUser_webinarsInput>
    create: XOR<userCreateWithoutUser_webinarsInput, userUncheckedCreateWithoutUser_webinarsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_webinarsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_webinarsInput, userUncheckedUpdateWithoutUser_webinarsInput>
  }

  export type userUpdateWithoutUser_webinarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: subscription_planUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_webinarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: subscription_planUncheckedUpdateOneWithoutUserNestedInput
  }

  export type webinarsUpsertWithoutUser_webinarsInput = {
    update: XOR<webinarsUpdateWithoutUser_webinarsInput, webinarsUncheckedUpdateWithoutUser_webinarsInput>
    create: XOR<webinarsCreateWithoutUser_webinarsInput, webinarsUncheckedCreateWithoutUser_webinarsInput>
    where?: webinarsWhereInput
  }

  export type webinarsUpdateToOneWithWhereWithoutUser_webinarsInput = {
    where?: webinarsWhereInput
    data: XOR<webinarsUpdateWithoutUser_webinarsInput, webinarsUncheckedUpdateWithoutUser_webinarsInput>
  }

  export type webinarsUpdateWithoutUser_webinarsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    agenda?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumWebinarTypeFieldUpdateOperationsInput | $Enums.WebinarType
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_key?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_date?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webinarsUncheckedUpdateWithoutUser_webinarsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    agenda?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumWebinarTypeFieldUpdateOperationsInput | $Enums.WebinarType
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_key?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_date?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_webinarCreateManyUserInput = {
    id?: number
    webinar_id: bigint | number
    joined_at?: Date | string
    status?: $Enums.WebinarRegistrationStatus
  }

  export type user_webinarUpdateWithoutUserInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWebinarRegistrationStatusFieldUpdateOperationsInput | $Enums.WebinarRegistrationStatus
    webinar?: webinarsUpdateOneRequiredWithoutUser_webinarsNestedInput
  }

  export type user_webinarUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    webinar_id?: BigIntFieldUpdateOperationsInput | bigint | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWebinarRegistrationStatusFieldUpdateOperationsInput | $Enums.WebinarRegistrationStatus
  }

  export type user_webinarUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    webinar_id?: BigIntFieldUpdateOperationsInput | bigint | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWebinarRegistrationStatusFieldUpdateOperationsInput | $Enums.WebinarRegistrationStatus
  }

  export type user_webinarCreateManyWebinarInput = {
    id?: number
    user_id: number
    joined_at?: Date | string
    status?: $Enums.WebinarRegistrationStatus
  }

  export type user_webinarUpdateWithoutWebinarInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWebinarRegistrationStatusFieldUpdateOperationsInput | $Enums.WebinarRegistrationStatus
    user?: userUpdateOneRequiredWithoutUser_webinarsNestedInput
  }

  export type user_webinarUncheckedUpdateWithoutWebinarInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWebinarRegistrationStatusFieldUpdateOperationsInput | $Enums.WebinarRegistrationStatus
  }

  export type user_webinarUncheckedUpdateManyWithoutWebinarInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWebinarRegistrationStatusFieldUpdateOperationsInput | $Enums.WebinarRegistrationStatus
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