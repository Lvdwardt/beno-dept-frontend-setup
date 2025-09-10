import '../utils/scripts/events'
import moduleInit from '../utils/module-init'

// Initialize modules asynchronously for code splitting
moduleInit.async('[js-hook-module-counter]', () => import('../components/Counter/counter.class'))
moduleInit.async(
  '[js-hook-module-button-demo]',
  () => import('../components/ButtonDemo/buttonDemo.class'),
)
