// 207. 课程表
// https://leetcode-cn.com/problems/course-schedule/
var canFinish = function(numCourses, prerequisites) {
    let graph = new Array(numCourses);
    for(let i=0; i < numCourses; i++) {
        graph[i] = [];
    }
    let visited = new Array(numCourses).fill(false);
    for(let i = 0; i < prerequisites.length; i++){
        graph[prerequisites[i][1]].push(prerequisites[i][0]);
    }

    function dfs(course){
        if(visited[course]) return false;
        
        visited[course] = true;;
        for(let i = 0; i < graph[course].length; i++){
            if(!dfs(graph[course][i])) return false;
        }
        visited[course] = false;
        return true;
    }

    for(let i = 0; i < numCourses; i++){
        if(!dfs(i)) return false;
    }
    return true;
};
// 210. 课程表 II
// https://leetcode-cn.com/problems/course-schedule-ii/
var findOrder = function(numCourses, prerequisites) {
    const adjList = new Map();
    const pending = new Set();
    const visited = new Set();
    const result = [];
    
    for(let [course, pre] of prerequisites) {
        adjList.set(pre, (adjList.get(pre) || new Set()).add(course));
    }
    
    for(let c = 0; c < numCourses; c++) {
        if(callDFS(c)) return [];
    }
    
    function callDFS(node) {
        if(pending.has(node)) return true;
        if(visited.has(node)) return;
        pending.add(node);
        
        for(let next of (adjList.get(node) || [])) {
            if(callDFS(next)) return true;
        }
        
        pending.delete(node);
        visited.add(node);
        result.push(node);
    }
    
    return result.reverse();
};