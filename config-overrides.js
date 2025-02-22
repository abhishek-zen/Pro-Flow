module.exports = function override(config){
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "buffer": require.resolve("buffer/"),
        "stream": require.resolve("stream-browserify"),
    });
    config.resolve.fallback = fallback;
    return config;
};