require "sinatra"
require "sprockets/helpers"
require "haml"

class App < Sinatra::Application
  set :sprockets, Sprockets::Environment.new
  helpers Sprockets::Helpers

  configure do
    Sprockets::Helpers.configure do |config|
      config.environment = sprockets
      config.prefix = "/assets"
      config.digest = true
    end
    sprockets.append_path 'assets/javascripts'
    sprockets.append_path 'assets/stylesheets'
    sprockets.js_compressor = :uglifier if ENV['RACK_ENV'] == "production"
  end

  get "/" do
    haml :index
  end

  get "/foo" do
    @title = "foo"
    haml :foo
  end

  get "/react" do
    @title = "react"
    erb :react
  end

  get "/react2" do
    @title = "react"
    erb :react2
  end
end
