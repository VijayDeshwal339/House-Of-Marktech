class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

export default class Trie {
  constructor() {
    this.root = new TrieNode(); 
  }

  insert(word) {
    let node = this.root;
    for (let char of word.toLowerCase()) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode(); 
      }
      node = node.children[char];
    }
    node.isWord = true;
  }

  getWordsWithPrefix(prefix) {
    prefix = prefix.toLowerCase();
    let node = this.root;

    for (let char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }

    return this._dfs(node, prefix);
  }

  _dfs(node, prefix) {
    let results = [];
    if (node.isWord) results.push(prefix);

    for (let char in node.children) {
      results.push(...this._dfs(node.children[char], prefix + char));
    }

    return results;
  }
}
