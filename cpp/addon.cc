#include <nan.h>
#include <vector>
#include "bag.cc"
#include "lru.cc"
#include "substr.cc"
#include "subarr.cc"
#include "tree.cc"
#include "nqueen.cc"

using namespace Nan;
using v8::FunctionTemplate;
using v8::String;
using v8::Function;

class Solution {
    public:
        vector<int> spiralOrder(vector<vector<int>>& matrix) {
            if( matrix.size() == 0) {
                return vector<int>({});
            }
            int h = matrix.size();
            int w = matrix[0].size();
            dfs(matrix,0,0,h,w);
            return res;
        }
        
        void dfs(vector<vector<int>>& matrix, int hb, int wb, int he, int we) {
            if( hb - he >= 0 || wb - we >= 0){
                return;
            }
            std::cout << hb << "," << wb << "," << he << "," << we << std::endl;
            for(int i = wb; i < we; i++){
                res.push_back(matrix[hb][i]);
            }
            for(int i = hb + 1; i < he; i++){
                res.push_back(matrix[i][we-1]);
            }
            if(he - hb > 1){
                for(int i=we-2;i>=wb;i--){
                    res.push_back(matrix[he-1][i]);
                }
            }
            if(we - wb > 1){
                for(int i = he - 2; i >= hb + 1; i--) {
                    res.push_back(matrix[i][wb]);
                }
            }
            dfs(matrix, hb + 1, wb + 1, he - 1, we - 1);
        }
    private:
        vector<int> res;
};

NAN_METHOD(Lru) {
    auto cache = std::make_shared<LRUCache>(3);
    cache->put(3, 4);
}

NAN_METHOD(Test) {
    auto tree = std::make_shared<Tree>();
    vector<string> vc = { "3", "5", "1", "6", "2", "0", "8", "null", "null", "7", "4" };
    
//    auto ttree = tree->deserializeBFS(vc);
    
//    auto result = tree->lowestCommonAncestor(ttree[0], ttree[3], ttree[4]);
//    std::cout << result->val << std::endl;
    
//    tree->serializeBFS(ttree[0]);
    
    auto substr = std::make_shared<SubStr>();
    
    substr->longestCommonSubsequence("yzq", "yrkz");
    
    auto subarr = std::make_shared<SubArr>();
    vector<int> arr = {-2, 1, -3, 4, -1, 3, -5, 1, 2};
    std::cout << subarr->MaxSubArray(arr) << std::endl;
}

NAN_MODULE_INIT(InitAll) {
    Set(target, New<String>("test").ToLocalChecked(), GetFunction(New<FunctionTemplate>(Test)).ToLocalChecked());
    Set(target, New<String>("lru").ToLocalChecked(), GetFunction(New<FunctionTemplate>(Lru)).ToLocalChecked());
}

NODE_MODULE(addon, InitAll)
