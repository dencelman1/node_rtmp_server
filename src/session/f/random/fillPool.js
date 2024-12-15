import {getRandomValues} from 'crypto';

export default (
    function(bs) {
        var
          p = false,
          c = this.constructor,
          pool = c.pool,
          po = c.poolOffset
        ;
        return (
          (p = (!pool || pool.length < bs))
          &&
          (
            pool = c.pool = Buffer.allocUnsafe(bs * 128)
          ),
          (
            c.poolOffset = (
              (p || (po + bs > pool.length))
              ? (
                getRandomValues(pool),
                0
              )
              : ( po + bs )
            )
          )
        )
    }
)