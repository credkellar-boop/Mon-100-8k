import fs from 'fs';
import path from 'path';

// Define the Mon-100-8K hybrid file system structure
const structures = [
  'cloud_memory/google_drive',
  'cloud_memory/proton_drive',
  'cloud_memory/personal_nas',
  'local_ssd/downloads/incomplete',
  'local_ssd/downloads/staging',
  'local_ssd/media_library/cinema_8k',
  'local_ssd/media_library/high_res_audio',
  'local_ssd/media_library/visuals_cache',
  'local_ssd/web_workspace/documents',
  'local_ssd/web_workspace/cache',
  'gemini_core'
];

console.log('🚀 Initializing Mon-100-8K System Architecture...');

structures.forEach(dir => {
  fs.mkdirSync(path.join(process.cwd(), dir), { recursive: true });
  console.log(`📁 Created: ${dir}`);
});

// Initialize the Gemini Sync Policy configuration file
const defaultPolicy = {
  deviceName: "Mon-100-8K",
  storageThresholdPercent: 85,
  autoOffloadTo: "cloud_memory/google_drive",
  preferredAudioProfile: "Dolby_Atmos_Cinematic",
  bassBoost: true
};

fs.writeFileSync(
  path.join(process.cwd(), 'gemini_core/sync_policies.json'), 
  JSON.stringify(defaultPolicy, null, 2)
);

console.log('\n✅ System directory deployment complete. Gemini core policies active.');
