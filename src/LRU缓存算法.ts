class LRUCache {

  private cacheMap: Map<number, ILinkedNode> = new Map();
  private cacheList: DoubleLinkedList = new DoubleLinkedList();

  constructor(
    private capacity: number
  ) { }

  get(key: number): number {
    let cacheMap = this.cacheMap;
    if (cacheMap.has(key)) {
      // 更新
      // 删除节点并更新，是否使用
      let oldNode = cacheMap.get(key)!;

      this.put(key, oldNode.value);

      return oldNode.value;
    }

    // 不存在
    return -1;
  }

  put(key: number, value: number): void {

    const cacheMap = this.cacheMap;

    // 如果已经存在key，删除
    if (cacheMap.has(key)) {
      let node = cacheMap.get(key)!;

      node.value = value;

      this.cacheList.delete(node);
      this.cacheList.insertAsHead(node);
      return;
    }

    // 如果容量需要删除的话
    if (cacheMap.size >= this.capacity) {
      let node = this.cacheList.deleteTail();
      cacheMap.delete(node.key);
    }
    let node = createNode(key, value);
    cacheMap.set(key, node);
    this.cacheList.insertAsHead(node);

  }
}