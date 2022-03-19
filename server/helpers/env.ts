export const env = () => ({
  port: process.env.VERCEL,
  client_x509_cert_url: process.env.client_x509_cert_url,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  token_uri: process.env.token_uri,
  auth_uri: process.env.auth_uri,
  client_id: process.env.client_id,
  client_email: process.env.client_email,
  private_key: process.env.private_key,
  private_key_id: process.env.private_key_id,
  project_id: process.env.project_id,
  type: process.env.type,
})
