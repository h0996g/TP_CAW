const arrayMethods  = {
    first:function (array, n) {
        if (array == null || n<=0 )
        return [];
        if (n == null)
        return array[0];
        return array.slice(0, n);
        },
   last: function (array, n) {
        if (array == null)
        return [];
        if (n == null)
        return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0)); 
       //ou bien return array.splice(0,array.length-n)
        },
//    tp3
   echo_n_fois: function exf(s , n){

     for (var i = 0; i < n-1; i++) {
      s=s+s
     }
     return s
}
,
moyen:function moyenne(tab) {
     var somme = 0;
     for (var i = 0; i < tab.length; i++) {
       somme += tab[i];
     }
     return somme / tab.length;
   }
}
module.exports = arrayMethods;