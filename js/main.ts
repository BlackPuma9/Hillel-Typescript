//I Version
type TreeNode = {
  value: number
  child?: TreeNode | null
}

const createTree = (num: number): TreeNode => {
  if (num === 1) {
    return { value: 1, child: null }
  }

  return {
    value: num,
    child: createTree(num - 1),
  }
}

const res = createTree(3)
console.log(res)

//II Version
// const createTree = (
//   num: number,
// ): { value: number; child?: ReturnType<typeof createTree> | null } => {
//   const tree = { value: num }
//
//   if (num > 1) {
//     tree.child = createTree(num - 1)
//   } else if (num === 1) {
//     tree.child = null
//   }
//
//   return tree
// }
//
// const res2 = createTree(3)
// console.log(res2)
