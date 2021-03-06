require_relative 'boot'

require "rails"
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
# require "action_mailer/railtie"
require "action_view/railtie"
# require "action_cable/engine"
# require "sprockets/railtie"
# require "rails/test_unit/railtie"

Bundler.require(*Rails.groups)

module Uxpressia
  class Application < Rails::Application
    config.api_only = true
    config.middleware.use Rack::Attack
    config.ember_cli_rails_mode = :rails
  end
end
