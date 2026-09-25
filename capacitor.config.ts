import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {

appId: 'com.mastergroup.estimates',

appName: 'Master Group',

webDir: 'www',

bundledWebRuntime: false,

ios: {

contentInset: 'automatic'

},

server: {

iosScheme: 'https'

}

};

export default config;
