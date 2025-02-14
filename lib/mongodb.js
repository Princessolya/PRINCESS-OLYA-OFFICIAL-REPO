const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'OWNER_NUMBER', value: '94779912589,94717242063,94719367518' },
    { key: 'PREFIX', value: '.' },
    { key: 'BOT_VERSION', value: '1.0.1' },
    { key: 'AUTO_READ_CMD', value: 'true' }, 
    { key: 'AUTO_REACT', value: 'true' },
    { key: 'HEART_REACT', value: 'true' },
    { key: 'OWNER_REACT', value: 'true' },
    { key: 'ALWAYS_TYPING', value: 'false' },
    { key: 'ALWAYS_RECORDING', value: 'false' },
    { key: 'ANTI_LINK', value: 'true' },
    { key: 'ANTI_BAD_WORDS_ENABLED', value: 'true' },    
    { key: 'ANTI_BAD_WORDS', value: 'pakayo,huththo,ponnaya,hukanna,hukanawa,keriya,පකා,හුත්තා,හුත්ති,හුකන්නා,කැරියා,පොන්නයා,whotto,fuck,paco,පකේ,හුත්තෙ' },
    { key: 'ALWAYS_ONLINE', value: 'true' },
    { key: 'ANTI_BOT', value: 'true' },
    { key: 'LANG', value: 'EN' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'AUTO_BIO', value: 'true' },
    { key: 'ALLWAYS_OFFLINE', value: 'false' },     
            ];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('MongoDB Connected For Princess Olya ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
                                                      
