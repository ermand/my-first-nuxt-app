export default function(context) {
  console.log('[Middlware] Auth');
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/auth');
  }
}
