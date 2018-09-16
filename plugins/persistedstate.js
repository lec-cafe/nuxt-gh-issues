import createPersistedState from "vuex-persistedstate";

export default ({router,error, store, isHMR}) => {

  if(isHMR) return;

  if(process.client){
    createPersistedState({
      paths: [
        "user"
      ],
      subscriber: (store)=>{
        if(store.state.user.user){
          store.dispatch("user/RELOGIN").catch((e) => {
            alert("ログアウトしました")
            store.dispatch("user/LOGOUT")
            router.push("/login")
          })
        }
        return (handler) => {
          return store.subscribe(handler);
        }
      }
    })(store);
  }
};
