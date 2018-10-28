export default function(context) {
  console.log('[Middlware] Check Auth');
  // if (process.client) {
  context.store.dispatch('initAuth', context.req);
  // }
}
