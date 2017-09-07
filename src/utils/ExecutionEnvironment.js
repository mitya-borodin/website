const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const ExecutionEnvironment = {

  canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
  canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

export default ExecutionEnvironment;
