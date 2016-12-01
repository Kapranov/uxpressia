module Api::V2
  class DashboardController < ApiController
    def index
      render plain: "Dashboard Index Page!"
    end
  end
end
