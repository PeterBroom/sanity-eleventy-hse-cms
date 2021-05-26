module.exports = {
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || 'nfc7ty44',
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: '2021-03-25',
    withCredentials: true
  }
}
