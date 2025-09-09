declare module "cpm/CPMApp" {
  const CPMApp: React.ComponentType<{ showAlert: () => void }>;
  const GlobalLayout: React.ComponentType<{ children: React.ReactNode }>;
  export { GlobalLayout };
  export default CPMApp;
}
