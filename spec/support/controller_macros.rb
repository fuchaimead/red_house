def login_user
    before(:each) do
      @request.env[“devise.mapping”] = Devise.mappings[:staff]
      @user = FactoryBot.create(:staff)
      sign_in @user
      request.headers.merge!(@user.create_new_auth_token)
    end
  end

 def login_admin
    before(:each) do
      @request.env[“devise.mapping”] = Devise.mappings[:staff]
      @user = FactoryBot.create(:staff, kind: ‘admin’)
      sign_in @staff
      request.headers.merge!(@user.create_new_auth_token)
    end
  end
end