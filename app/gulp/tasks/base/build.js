/*
    Build tasks for ./gulpfile.babel.js
*/

import { parallel, series } from 'gulp';
import requireDir from 'require-dir';

// index all gulp tasks
requireDir('../', { recurse: true });

// Define combined tasks for HSE
export const hseBuild = parallel('hseStyles', 'hseScripts', 'hseCopy', 'sharedScripts');
// export const hseBuild = parallel('hseStyles', 'hseScripts', 'hseCopy', 'sharedScripts', 'hseImages');

// Define production Tasks
export const prodTasks = series(parallel('sizeReport'));

// Define common Tasks
export const commonTasks = series(parallel('watchTask', 'sizeReport'));
