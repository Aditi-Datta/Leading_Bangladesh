// lib/fontawesome.js
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// Import other icon packs as needed
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

// Prevent Font Awesome from adding its CSS automatically
config.autoAddCss = false;

// Add icons to the library
library.add(fas);
