module.exports = {
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
    ],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    esmodules: true,
                },
            },
        ],
        '@babel/preset-react',
    ],
}