//
//  ResourceFile.hpp
//  addon
//
//  Created by zhang.dezhong on 2020/12/10.
//

#ifndef ResourceFile_hpp
#define ResourceFile_hpp

#include <stdio.h>
#include <string>

class ResourceFile {
public:
    ResourceFile(std::string filePath);
    virtual void accept();
private:
    std::string filePath;
};

#endif /* ResourceFile_hpp */
