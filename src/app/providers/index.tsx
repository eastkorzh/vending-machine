export const withProviders = (component: () => React.ReactNode) => () => {
  return <>{component()}</>;
};
