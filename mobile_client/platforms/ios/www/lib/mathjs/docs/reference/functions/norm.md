# Function norm

Calculate the norm of a number, vector or matrix.

The second parameter p is optional. If not provided, it defaults to 2.


## Syntax

```js
math.norm(x)
math.norm(x, p)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`x` | number &#124; BigNumber &#124; Complex &#124; Array &#124; Matrix |  Value for which to calculate the norm
`p` | number &#124; BigNumber &#124; string |  Vector space. Supported numbers include Infinity and -Infinity. Supported strings are: 'inf', '-inf', and 'fro' (The Frobenius norm) Default value: 2.

### Returns

Type | Description
---- | -----------
number &#124; BigNumber | the p-norm


## Examples

```js
math.abs(-3.5);                         // returns 3.5
math.norm(-3.5);                        // returns 3.5

math.norm(math.complex(3, -4));         // returns 5

math.norm([1, 2, -3], Infinity);        // returns 3
math.norm([1, 2, -3], -Infinity);       // returns 1

math.norm([3, 4], 2);                   // returns 5

math.norm([[1, 2], [3, 4]], 1)          // returns 6
math.norm([[1, 2], [3, 4]], 'inf');     // returns 7
math.norm([[1, 2], [3, 4]], 'fro');     // returns 5.477225575051661
```


## See also

[abs](abs.md),
[hypot](hypot.md)


<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->