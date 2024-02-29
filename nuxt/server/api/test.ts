export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig()

  return {
    config:runtimeConfig.dev.apibase
  }
})
