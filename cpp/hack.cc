//
//  hack.cpp
//  addon
//
//  Created by zhang.dezhong on 2020/9/28.
#include <nan.h>
#include <iostream>
#include <fstream>
#include <vector>
#include <map>
#include <unordered_map>
#include <list>
#include <memory>

class MapPiWorker : public Nan::AsyncWorker {
    public:
        MapPiWorker(Nan::Callback* callback, std::string path)
            : AsyncWorker(callback), path(path) {}
        ~MapPiWorker() {}

        void Execute() {
            res.reserve(19000000);
            std::ifstream in(path);
            std::string row;
            while (std::getline (in, row)) {
                std::vector<std::string> tmp = split(row, ',');
                long time = strTime2unix(tmp[0]);
                std::string pair = tmp[1] + "," + tmp[2];
                if (sorted.find(time) != sorted.end()) {
                    sorted[time].push_back(pair);
                } else {
                    sorted.insert(std::pair<long, std::vector<std::string>>(time, { pair }));
                }
            }
            std::cout << "read time: " << (clock() - t1)/1000000 << std::endl;
            for (auto iter = sorted.begin(); iter != sorted.end(); iter++) {
                std::vector<std::string> vc = iter->second;
                for (size_t i = 0; i < vc.size(); i++) {
                    std::string pair = vc[i];
                    short status = 0;
                    if(res.find(pair) != res.end()) {
                        if(res.find(pair)->second.back() != status) {
                            res.find(pair)->second.push_back(status);
                        }
                    } else {
                        auto tmp = split(vc[i], ',');
                        pair = tmp[1] + "," + tmp[0];
                        status = 1;
                        if(res.find(pair) != res.end()) {
                            if(res.find(pair)->second.back() != status) {
                                res.find(pair)->second.push_back(status);
                            }
                        } else {
                            res.insert(std::pair<std::string, std::vector<short>>(pair, {status}));
                        }
                    }
                }
            }
            std::cout << "create res: " << (clock() - t1)/1000000 << std::endl;
            for (auto iter = res.begin(); iter != res.end(); iter++) {
                int rs = int(iter->second.size()/2);
                auto uidStrArr = split(iter->first, ',');
                setResult(uidStrArr[0], rs);
                setResult(uidStrArr[1], rs);
            }
            for (auto iter = result.begin(); iter != result.end(); iter++) {
                if(iter->second > 0) {
                    num1++;
                    if(iter->second > 4) {
                        num5++;
                    }
                }
            }
            num1 = num1*100/result.size();
            num5 = num5*100/result.size();
            std::cout << "result: "
                << float((clock() - t1)/1000000)
                << ", num1: " << num1
                << ", num5: " << num5
                << std::endl;
        }

        void setResult(std::string uid, int rs) {
            if (result.find(uid) != result.end()) {
                result[uid] = std::max(rs, result[uid]);
            } else {
                result.insert(std::pair<std::string, int>(uid, rs));
            }
        }

        void HandleOKCallback() {
            Nan::HandleScope scope;
            v8::Local<v8::Value> argv[] = {Nan::New<v8::Number>(num1),Nan::New<v8::Number>(num5) };
            callback->Call(2, argv, async_resource);
        }

    private:
        std::string path;
        int num1 = 0;
        int num5 = 0;
        std::map<long, std::vector<std::string>> sorted;
        std::unordered_map<std::string, std::vector<short>> res;
        std::unordered_map<std::string, int> result;
        clock_t t1 = clock();
        std::vector<std::string> split(const std::string& str, char delim) {
            std::vector<std::string> tokens;
            size_t prev = 0, pos = 0;
            do {
                pos = str.find(delim, prev);
                if (pos == std::string::npos) pos = str.length();
                std::string token = str.substr(prev, pos-prev);
                if (!token.empty()) tokens.push_back(token);
                prev = pos + 1;
            } while (pos < str.length() && prev < str.length());
            return tokens;
        }

        std::string removeStr(std::string str) {
            str.erase(std::remove_if(str.begin(), str.end(), [](char i) {
                return i == ' ' || i == ':' || i == '-';
            }), str.end());
            return str;
        }

        long strTime2unix(std::string timeStamp) {
            timeStamp = removeStr(timeStamp);
            return std::stol(timeStamp);
        }

        std::string trim(std::string& str) {
            size_t first = str.find_first_not_of(' ');
            if (first == std::string::npos)
                return "";
            size_t last = str.find_last_not_of(' ');
            return str.substr(first, (last-first+1));
        }
};
