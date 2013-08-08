class SignUpMailer < ActionMailer::Base
  default from: "steve@placemarkhq.com"

  def created(sign_up)
    mail to: sign_up.email, subject: "Hack for a Place confirmed"
  end
end
