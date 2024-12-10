import {getRandomValues} from 'crypto';

export default (
    function(bs) {
        var
          p = false,
          c = this.constructor,
          pool = c.pool,
          poolOffset = c.poolOffset
        ;
        return (
          (p = (!pool || pool.length < bs))
          &&
          (
            pool = c.pool = Buffer.allocUnsafe(bs * this.POOL_SIZE_MULTIPLIER)
          ),
          (p || (poolOffset + bs > pool.length))
          ? (
            getRandomValues(pool),
            (c.poolOffset = 0)
          )
          : ( (c.poolOffset) += bs )
        )
    }
)