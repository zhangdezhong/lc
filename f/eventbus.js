Vue.prototype.$on = function (event, fn) {
  if (Array.isArray(event)) {
    for (let i = 0, l = event.length; i < l; i++) {
      this.$on(event[i], fn)
    }
  } else {
    (this._events[event] || (this._events[event] = [])).push(fn)
  }
}

Vue.prototype.$once = function (event, fn) {
  const self = this
  function on () {
    self.$off(event, on)
    fn.apply(self, arguments)
  }
  on.fn = fn
  this.$on(event, on);
}

Vue.prototype.$off = function (event, fn) {
  if (!arguments.length) {
    this._events = Object.create(null)
    return;
  }
  if (Array.isArray(event)) {
    for (let i = 0, l = event.length; i < l; i++) {
      this.$off(event[i], fn)
    }
    return
  }
  const cbs = this._events[event]
  if (!cbs) {
    return
  }
  if (!fn) {
    this._events[event] = null
    return
  }
  let cb
  let i = cbs.length
  while (i--) {
    cb = cbs[i]
    if (cb === fn || cb.fn === fn) {
      cbs.splice(i, 1)
      break
    }
  }
}

Vue.prototype.$emit = function (event) {
  let cbs = vm._events[event]
  if (cbs) {
    const args = [].slice.call(arguments, 1);
    for (let i = 0, l = cbs.length; i < l; i++) {
      args ? cbs[i].apply(this, args) : cbs[i].call(this);
    }
  }
}