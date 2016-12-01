ApplicationController.renderer.defaults.merge!(
  http_host: Rails.application.secrets.localhost,
  https: false
)
