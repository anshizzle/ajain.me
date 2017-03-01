class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @projects =
      JSON.parse(Rails.root.join('app', 'assets', 'json', 'projects.json').read)

    @projects = @projects.each_slice(2).to_a
  end

end
