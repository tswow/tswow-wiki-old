---
title: Array
---


## Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `T` |

## Indexable

▪ [n: `number`]: `T`

## Properties

{: .api-section }
### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

___

{: .api-section }
### [unscopables]

{: .code-example }
`[unscopables](): Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** 
`Object`

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

___

{: .api-section }
### concat

{: .code-example }
`concat(...items): T[]`

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `...items` | `ConcatArray`<`T`\>[] | Additional arrays and/or items to add to the end of the array. |

**Returns:** 
`T`[]

___

{: .api-section }
### copyWithin

{: .code-example }
`copyWithin(target, start, end?): T[]`

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

**Returns:** 
`T`[]

___

{: .api-section }
### entries

{: .code-example }
`entries(): IterableIterator<[number, T]>`

Returns an iterable of key, value pairs for every entry in the array

**Returns:** 
`IterableIterator`<[`number`, `T`]\>

___

{: .api-section }
### every

{: .code-example }
`every<S>(predicate, thisArg?): this is S[]`

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `S` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** 
this is S[]

___

{: .api-section }
### fill

{: .code-example }
`fill(value, start?, end?): T[]`

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `value` | `T` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

**Returns:** 
`T`[]

___

{: .api-section }
### filter

{: .code-example }
`filter<S>(predicate, thisArg?): S[]`

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `S` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** 
`S`[]

___

{: .api-section }
### find

{: .code-example }
`find<S>(predicate, thisArg?): S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `S` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `predicate` | (`this`: `void`, `value`: `T`, `index`: `number`, `obj`: `T`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** 
`S`

___

{: .api-section }
### findDefault

{: .code-example }
`findDefault(def, callback): T`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `def` | `T` |
| `callback` | (`value`: `T`, `index`: `int32`, `arr`: `T`[]) => `boolean` |

**Returns:** 
`T`

___

{: .api-section }
### findIndex

{: .code-example }
`findIndex(predicate, thisArg?): number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `predicate` | (`value`: `T`, `index`: `number`, `obj`: `T`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** 
`number`

___

{: .api-section }
### flat

{: .code-example }
`flat<A, D>(this, depth?): FlatArray<A, D>[]`

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

**Returns:** 
`FlatArray`<`A`, `D`\>[]

___

{: .api-section }
### flatMap

{: .code-example }
`flatMap<U, This>(callback, thisArg?): U[]`

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `callback` | (`this`: `This`, `value`: `T`, `index`: `number`, `array`: `T`[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** 
`U`[]

___

{: .api-section }
### forEach

{: .code-example }
`forEach(callbackfn, thisArg?): void`

Performs the specified action for each element in an array.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** 
`void`

___

{: .api-section }
### get

{: .code-example }
`get(index): T`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `number` |

**Returns:** 
`T`

___

{: .api-section }
### includes

{: .code-example }
`includes(searchElement, fromIndex?): boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `searchElement` | `T` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

**Returns:** 
`boolean`

___

{: .api-section }
### indexOf

{: .code-example }
`indexOf(searchElement, fromIndex?): number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `searchElement` | `T` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** 
`number`

___

{: .api-section }
### join

{: .code-example }
`join(separator?): string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

**Returns:** 
`string`

___

{: .api-section }
### keys

{: .code-example }
`keys(): IterableIterator<number>`

Returns an iterable of keys in the array

**Returns:** 
`IterableIterator`<`number`\>

___

{: .api-section }
### lastIndexOf

{: .code-example }
`lastIndexOf(searchElement, fromIndex?): number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `searchElement` | `T` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

**Returns:** 
`number`

___

{: .api-section }
### map

{: .code-example }
`map<U>(callbackfn, thisArg?): U[]`

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `U` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** 
`U`[]

___

{: .api-section }
### pop

{: .code-example }
`pop(): T`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

**Returns:** 
`T`

___

{: .api-section }
### push

{: .code-example }
`push(...items): number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `...items` | `T`[] | New elements to add to the array. |

**Returns:** 
`number`

___

{: .api-section }
### reduce

{: .code-example }
`reduce(callbackfn): T`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `T` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

**Returns:** 
`T`

___

{: .api-section }
### reduceRight

{: .code-example }
`reduceRight(callbackfn): T`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `T` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

**Returns:** 
`T`

___

{: .api-section }
### reserve

{: .code-example }
`reserve(amount): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `amount` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### reverse

{: .code-example }
`reverse(): T[]`

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

**Returns:** 
`T`[]

___

{: .api-section }
### set

{: .code-example }
`set(index, value): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `number` |
| `value` | `T` |

**Returns:** 
`any`

___

{: .api-section }
### shift

{: .code-example }
`shift(): T`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

**Returns:** 
`T`

___

{: .api-section }
### slice

{: .code-example }
`slice(start?, end?): T[]`

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

**Returns:** 
`T`[]

___

{: .api-section }
### some

{: .code-example }
`some(predicate, thisArg?): boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** 
`boolean`

___

{: .api-section }
### sort

{: .code-example }
`sort(compareFn?): T[]`

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `compareFn?` | (`a`: `T`, `b`: `T`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

**Returns:** 
`T`[]

___

{: .api-section }
### splice

{: .code-example }
`splice(start, deleteCount?): T[]`

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

**Returns:** 
`T`[]

An array containing the elements that were deleted.

___

{: .api-section }
### toLocaleString

{: .code-example }
`toLocaleString(): string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

**Returns:** 
`string`

___

{: .api-section }
### toString

{: .code-example }
`toString(): string`

Returns a string representation of an array.

**Returns:** 
`string`

___

{: .api-section }
### unshift

{: .code-example }
`unshift(...items): number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `...items` | `T`[] | Elements to insert at the start of the array. |

**Returns:** 
`number`

___

{: .api-section }
### values

{: .code-example }
`values(): IterableIterator<T>`

Returns an iterable of values in the array

**Returns:** 
`IterableIterator`<`T`\>

