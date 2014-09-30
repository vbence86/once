function once(fn) {
  return function F(){
    var args = [].slice.call(arguments);
    return F.i ? [][[]] : (F.i = 1, fn.apply(null, args));
  };
}
