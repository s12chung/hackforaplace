class SignUpsController < ApplicationController
  def new
    @sign_up = SignUp.new
  end

  def create
    @sign_up = SignUp.create(params[:sign_up])
  end
end
