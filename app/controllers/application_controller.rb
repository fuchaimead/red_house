class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :configure_permitted_parameters, if: :devise_controller?


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:is_admin)
  end

    def json_error(model)
      render json: { errors: model.errors.full_messages.join(',') }, status: :unprocessable_entity
    end

end
