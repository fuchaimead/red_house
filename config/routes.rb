Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :items
    get '/index_cart', to: 'items#index_cart'
  end



  get '*other', to: 'static#index'
end
