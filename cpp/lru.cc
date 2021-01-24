//
//  lru.cpp
//  addon
//
//  Created by zhang.dezhong on 2020/9/28.
//

#include <stdio.h>
#include <list>
#include <unordered_map>

using namespace std;

class LRUCache {
public:
    LRUCache(int capacity) : _capacity(capacity) {}
    
    int get(int key) {
        auto it = cache.find(key);
        if(it == cache.end()) return -1;
        touch(it);
        return it->second.first;
    }
    
    void put(int key, int value) {
        auto it = cache.find(key);
        if(it != cache.end())  {
            touch(it);
        } else {
            if(int(cache.size()) == _capacity) {
                cache.erase(used.back());
                used.pop_back();
            }
            used.push_front(key);
        }
        cache[key] = { value, used.begin() };
    }
private:
    typedef std::list<int> LI;
    typedef std::pair<int, LI::iterator> PII;
    typedef std::unordered_map<int, PII> HIPII;

    void touch(HIPII::iterator it) {
        int key =  it->first;
        used.erase(it->second.second);
        used.push_front(key);
        it->second.second = used.begin();
    }

    HIPII cache;
    LI used;
    int _capacity;
};
