class QuickUnionUF {
    constructor(N) {
        this.roots  = new Array(N);
        for(let i = 0; i < N; i++) {
            this.roots[i] = i;
        }
    }

    findRoot(i) {
        let root  = i;
        while(root  != this.roots[root]) {
            root = this.roots[i];
        }
        while(i != this.roots[i]) {
            let tmp = this.roots[i];
            this.roots[i] = root;
            i = tmp;
        }
        return root;
    }

    connected(p, q) {
        return this.findRoot(p) == this.findRoot(q);
    }

    union(p, q) {
        let proot = this.findRoot(p);
        let qroot = this.findRoot(q);
        this.roots[proot] = qroot;
    }
}
// 200
// https://leetcode-cn.com/problems/number-of-islands/
class UnionFind {
    constructor(grid) {  
        let m = grid.length;  
        let n = grid[0].length;  
        this.father = new Array(m*n);
        this.count = 0;
        for (let i = 0; i < m; i++) {  
            for (let j = 0; j < n; j++) {  
                if (grid[i][j] == '1') {
                    let id = i * n + j;
                    this.father[id] = id;
                    this.count++;
                }
            }  
        }  
    }
    union(node1, node2) {  
        let find1 = this.find(node1);
        let find2 = this.find(node2);
        if(find1 != find2) {
            this.father[find1] = find2;
            this.count--;
        }
    }
    find (node) {  
        if (this.father[node] == node) {  
            return node;
        }
        this.father[node] = this.find(this.father[node]);
        return this.father[node];
    }
}
    
function numIslands(grid) {
    if (!grid || !grid.length || !grid[0].length)  {
        return 0;
    }
    let distance = [[1,0],[-1,0],[0,1],[0,-1]];
    let uf = new UnionFind(grid);  
    let rows = grid.length;  
    let cols = grid[0].length;  
    for (let i = 0; i < rows; i++) {  
        for (let j = 0; j < cols; j++) {  
            if (grid[i][j] == '1') {  
                for (let d of distance) {
                    let x = i + d[0];
                    let y = j + d[1];
                    if (x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] == '1') {  
                        uf.union(i * cols + j, x * cols + y);  
                    }  
                }
            }  
        }  
    }  
    return uf.count;
}