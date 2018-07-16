module.exports = {
    process() {
      return "module.exports = 'IMAGE_MOCK';";
    },
    getCacheKey() {
      return 'fileMock';
    },
  };