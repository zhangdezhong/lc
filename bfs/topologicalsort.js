// 1136. 平行课程
// https://leetcode-cn.com/problems/parallel-courses/
var minimumSemesters = function(n, relations) {
    let graph = new Array(n);
    for (let i = 0; i < n; i++) {
        graph[i] = new Array();
    }
    let inDegree = new Array(n).fill(0);
    for (let relation of relations) {
        graph[relation[0] - 1].push(relation[1] - 1);
        inDegree[relation[1] - 1]++;
    }
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] == 0) {
            queue.push(i);
        }
    }
    let level = 0;
    let cnt = 0;
    while (queue.length) {
        let len = queue.length;
        level++;
        cnt += len;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            for (let dest of graph[cur]) {
                inDegree[dest]--;
                if (inDegree[dest] == 0) {
                    queue.push(dest);
                }
            }
        }
    }
    return cnt != n ? -1 : level;
}
// 207. 课程表
// https://leetcode-cn.com/problems/course-schedule/
var canFinish = function(numCourses, prerequisites) {
    let edges = new Array(numCourses);
    for (let i = 0; i < numCourses; i++) {
        edges[i] = [];
    }
    let indeg = new Array(numCourses).fill(false);
    for (let pre of prerequisites) {
        edges[pre[1]].push(pre[0]);
        indeg[pre[0]]++;
    }
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indeg[i] == 0) {
            queue.push(i);
        }
    }
    let visited = 0;
    while (queue.length) {
        visited++;
        let cur = queue.shift();
        for (let v of edges[cur]) {
            indeg[v]--;
            if (indeg[v] == 0) {
                queue.push(v);
            }
        }
    }
    return visited ==  numCourses;
}
// 210. 课程表 II
// https://leetcode-cn.com/problems/course-schedule-ii/
var findOrder = function(numCourses, prerequisites) {
    let graph = new Array(numCourses);
    for (let i = 0; i < graph.length; i++) {
        graph[i] = new Array();
    }
    let indeg = new Array(numCourses).fill(0);
    for (let pre of prerequisites) {
        graph[pre[1]].push(pre[0]);
        indeg[pre[0]]++;
    }
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indeg[i] == 0) {
            queue.push(i);
        }
    }
    let result = [];
    while (queue.length) {
        let cur = queue.shift();
        result.push(cur);
        for (let v of graph[cur]) {
            indeg[v]--;
            if (indeg[v] == 0) {
                queue.push(v);
            }
        }
    }
    return result.length != numCourses ? [] : result;
}