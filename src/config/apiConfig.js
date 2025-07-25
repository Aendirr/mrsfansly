/**
 * Copyright 2025 aendirr
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

export const API_CONFIG = {
  GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyvfc93BA6-xowkQiB8N1nFkVKDDNWZNmzgZ3hbm3BxuKcuvjvzz02xK8rMeQgsGf7eLg/exec',
  
  IS_DEVELOPMENT: true,
  
  FORM_SETTINGS: {
    timeout: 10000,
    retryAttempts: 3
  }
};

export const validateGoogleScriptURL = (url) => {
  const pattern = /^https:\/\/script\.google\.com\/macros\/s\/[a-zA-Z0-9_-]+\/exec$/;
  return pattern.test(url);
};

 