const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const ExecutionEnvironment = {
  canUseDOM,
  canUseEventListeners: canUseDOM && !!window.addEventListener,
  canUseViewport: canUseDOM && !!window.screen,
  canUseWorkers: typeof Worker !== "undefined",
  isInWorker: !canUseDOM,
};

export default ExecutionEnvironment;
