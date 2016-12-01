Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # origins '*'
    origins 'Rails.application.secrets.rack_cors_origins'

    resource '*',
      headers: :any,
      # methods: [:get, :post, :options]
      # methods: [:get, :post, :options, :delete, :put]
      methods: %i(get post put patch delete options head)
      # expose: ['access-token', 'expiry', 'token-type', 'uid', 'client'],
  end
end

