Rails.application.routes.draw do
  mount_ember_app :frontend, to: "/"
  constraints subdomain: 'api' do
    scope module: 'api' do
      namespace :v1 do
        root to: 'dashboard#index'
        resources :business_goals
      end
      namespace :v2 do
        root to: 'dashboard#index'
        resources :business_goals
      end
    end
  end
end
