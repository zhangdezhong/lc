{
  "targets": [
    {
      "target_name": "addon",
      "sources": [
        "./cpp/addon.cc",
        "./cpp/bag.cc",
        "./cpp/lru.cc",
        "./cpp/substr.cc",
        "./cpp/subarr.cc",
        "./cpp/slidingwindow.cc",
        "./cpp/nqueen.cc"
      ],
      "include_dirs": ["<!(node -e \"require('nan')\")"],
      'cflags!': ['-fno-exceptions'],
      'cflags_cc!': ['-fno-exceptions'],
      'conditions': [
        ['OS=="mac"', {
          'xcode_settings': {
            'GCC_ENABLE_CPP_EXCEPTIONS': 'YES'
          }
        }]
      ]
    }
  ]
}
