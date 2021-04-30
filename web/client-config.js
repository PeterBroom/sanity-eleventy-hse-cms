module.exports = {
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || 'nfc7ty44',
    dataset: process.env.SANITY_DATASET || 'production',
    withCredentials: true
  }
}
