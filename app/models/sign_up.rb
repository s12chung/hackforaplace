class SignUp
  include Mongoid::Document
  field :email

  validates :email, uniqueness: true, presence: true
  validates :email, format: { with: /^([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})$/i }

  after_create do
    SignUpMailer.created(self).deliver
  end

  def email=(email)
    super(email.downcase)
  end
end
