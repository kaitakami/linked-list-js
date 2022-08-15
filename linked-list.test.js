import { Node, LinkedList } from "./linked-list";

test("Node class", () => {
  expect(new Node()).toEqual({
    next: null,
    value: undefined,
  });
});

test("append function", () => {
  const testList = LinkedList();
  testList.append(3),
    testList.append(5),
    expect(testList.append(4)).toEqual({
      value: 3,
      next: { value: 5, next: { value: 4, next: null } },
    });
});

test("prepend function", () => {
  const testList = LinkedList();
  testList.prepend(3),
    testList.prepend(2),
    expect(testList.prepend(1)).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    });
});

test("prepend and append function", () => {
  const testList = LinkedList();
  testList.prepend(2),
    testList.append(3),
    testList.prepend(1),
    expect(testList.append(4)).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        },
      },
    });
});

test("size function", () => {
  const testList = LinkedList();
  testList.prepend(2),
    testList.append(3),
    testList.prepend(1),
    testList.append(4)
  expect(testList.size()).toEqual(4);
})

test("head function", () => {
  const testList = LinkedList();
  testList.append(1),
    testList.append(2),
    testList.append(3)
  expect(testList.returnHead()).toEqual({
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
      }
    }
  });
})

test("tail function", () => {
  const testList = LinkedList();
  testList.append(1),
    testList.append(2),
    testList.append(3)
  expect(testList.returnTail()).toEqual({
      value: 3,
      next: null
  });
})

test("indexAt function", () => {
  const testList = LinkedList();
  testList.append(1),
    testList.append(2),
    testList.append(3)
  expect(testList.indexAt(1)).toEqual({
      value: 2,
      next: {
        value: 3,
        next: null
      }
  });
})

test("indexAt function in last node", () => {
  const testList = LinkedList();
  testList.append(1),
    testList.append(2),
    testList.append(3)
  expect(testList.indexAt(2)).toEqual({
      value: 3,
      next: null
  });
})
