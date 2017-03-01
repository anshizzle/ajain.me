module ApplicationHelper

  def logo_tag(project)
    if FileTest.exist?(Rails.root.join('app', 'assets', 'images', 'projects', "#{slug_name(project)}.png"))
      image_tag "projects/#{slug_name(project)}.png", :class => "logo"
    else
      content_tag(:div, project, :class => "logo")
    end
  end

  def slug_name(project)
    project.downcase.gsub(/\s/, '-')
  end

end
