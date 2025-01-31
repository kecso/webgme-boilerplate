# Configuration

Overwrite/append the default webgme configuration in `config.default.js`.
The avaliable configurations are listed.

When adding your own paths, make sure to either use `__dirname` or a relative path which will be resolved for your repository's root.
(N.B. below `__dirname` and `..` resolves to the webgme repository-root.)


```
config = {
        addOn: {
            enable: false,
            basePaths: [path.join(__dirname, '../src/addon/core')]
        },

        authentication: {
            enable: false,
            allowGuests: false,
            guestAccount: 'anonymous',
            logOutUrl: '/',
            salts: 10
        },

        blob: {
            type: 'FS', //'FS', 'S3'
            fsDir: './blob-local-storage',
            s3: {}
        },

        client: {
            appDir: path.join(__dirname, '../src/client'),
            // Used in client/WebGME.js to load initial project.
            defaultProject: {
                name: null,
                branch: null,
                node: null
            }
        },

        debug: false,

        executor: {
            enable: false,
            nonce: null,
            outputDir: './',
            workerRefreshInterval: 5000
        },

        log: {
            level: 1, // 5 = ALL, 4 = DEBUG, 3 = INFO, 2 = WARNING, 1 = ERROR, 0 = OFF
            file: 'server.log'
        },

        mongo: {
            uri: 'mongodb://127.0.0.1:27017/multi',
            options: {
                db: {
                    w: 1,
                    native_parser: true
                },
                server: {
                    auto_reconnect: true,
                    socketOptions: {keepAlive: 1},
                    poolSize: 20
                }
            }
        },

        plugin: {
            allowServerExecution: false,
            basePaths: [path.join(__dirname, '../src/plugin/coreplugins')]
        },

        requirejsPaths: {},

        rest: {
            secure: false,
            components: {}
        },

        server: {
            port: 8888,
            maxWorkers: 10,
            sessionCookieId: 'webgmeSid',
            sessionCookieSecret: 'meWebGMEez',
            https: {
                enable: false,
                certificateFile: path.join(__dirname, '../certificates/sample-cert.pem'),
                keyFile: path.join(__dirname, '../certificates/sample-key.pem')
            }
        },

        socketIO: {
            reconnect: false,
            'connect timeout': 10,
            'reconnection delay': 1,
            'force new connection': true,
            transports: ['websocket']
        },

        storage: {
            autoPersist: true, // core setting
            cache: 2000,
            clientCacheSize: 2000, // overwrites cache on client
            keyType: 'plainSHA1', // 'rand160Bits', 'ZSSHA', 'plainSHA1',
            failSafe: 'memory',
            failSafeFrequency: 10000,
            timeout: 10000
        },

        visualization: {
            decoratorPaths: [path.join(__dirname, '../src/client/decorators')],
            visualizerDescriptors: [path.join(__dirname, '../src/client/js/Visualizers.json')]
        }
    };
```
