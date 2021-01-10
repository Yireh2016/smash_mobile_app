export default (navigationState: any) =>
  navigationState.history
    ? navigationState.history.map((route: any) => {
        return route.key.match(/\w*/)[0];
      })
    : [];
