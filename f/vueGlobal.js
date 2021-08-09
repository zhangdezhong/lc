function isUndef (v) {
    return v === undefined || v === null
}
function isPrimitive (value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}
function isObject (obj) {
    return obj !== null && typeof obj === 'object'
}

function defineReactive (obj, key, val, customSetter, shallow) {
    const dep = new Dep()
    const property = Object.getOwnPropertyDescriptor(obj, key)
    if (property && property.configurable === false) {
      return
    }

    const getter = property && property.get
    const setter = property && property.set
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key]
    }
  
    let childOb = !shallow && observe(val)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        const value = getter ? getter.call(obj) : val
        if (Dep.target) {
          dep.depend()
          if (childOb) {
            childOb.dep.depend()
            if (Array.isArray(value)) {
              dependArray(value)
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        const value = getter ? getter.call(obj) : val
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (process.env.NODE_ENV !== 'production' && customSetter) {
          customSetter()
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) return
        if (setter) {
          setter.call(obj, newVal)
        } else {
          val = newVal
        }
        childOb = !shallow && observe(newVal)
        dep.notify()
      }
    })
}
function set (target, key, val) {
    if (process.env.NODE_ENV !== 'production' &&
      (isUndef(target) || isPrimitive(target))
    ) {
      warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key)
      target.splice(key, 1, val)
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    const ob = target.__ob__
    if (target._isVue || (ob && ob.vmCount)) {
      process.env.NODE_ENV !== 'production' && warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      )
      return val
    }
    if (!ob) {
      target[key] = val
      return val
    }
    defineReactive(ob.value, key, val)
    ob.dep.notify()
    return val
}

function del(target, key) {
    if (process.env.NODE_ENV !== 'production' &&
      (isUndef(target) || isPrimitive(target))
    ) {
      warn(`Cannot delete reactive property on undefined, null, or primitive value: ${(target: any)}`)
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1)
      return
    }
    const ob = (target: any).__ob__
    if (target._isVue || (ob && ob.vmCount)) {
      process.env.NODE_ENV !== 'production' && warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      )
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key]
    if (!ob) {
      return
    }
    ob.dep.notify()
}



