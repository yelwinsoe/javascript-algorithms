/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let interval = 1
  while (interval < lists.length) {
    const indexs = []
    for (let j = 0; j < lists.length; j++) {
      if (j % (interval * 2) === 0) indexs.push(j)
    }
    for (let i = 0; i < indexs.length; i++) {
      if (lists[indexs[i]] || lists[indexs[i] + interval]) {
        lists[indexs[i]] = merge2Lists(lists[indexs[i]], lists[indexs[i] + interval])
      }
    }
    interval *= 2
  }


  function merge2Lists(list1, list2) {

    if (list1 === null || list1 === undefined || list1.length === 0) return list2
    if (list2 === null || list2 === undefined || list2.length === 0) return list1

    if (list1.val < list2.val) {
      list1.next = merge2Lists(list1.next, list2)
      return list1
    } else {
      list2.next = merge2Lists(list1, list2.next)
      return list2
    }
  }

  if (lists.length <= 0) return null
  else return lists[0]
};