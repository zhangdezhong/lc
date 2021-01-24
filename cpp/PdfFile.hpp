//
//  PdfFile.hpp
//  addon
//
//  Created by zhang.dezhong on 2020/12/11.
//

#ifndef PdfFile_hpp
#define PdfFile_hpp
#include <stdio.h>
#include <string>
#include "ResourceFile.hpp"

class PdfFile:public ResourceFile {
public:
    PdfFile(std::string filePath) : ResourceFile(filePath) {};
    void accept();
};

#endif /* PdfFile_hpp */
